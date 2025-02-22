import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { GlareCard } from "@/components/ui/glare-card";
import { ShieldCheck } from "lucide-react";

const formSchema = z.object({
  offer: z.enum(["complete", "premium", "magique"], {
    required_error: "Veuillez sélectionner une offre",
  }),
  siteType: z.enum(["vitrine", "ecommerce", "service"], {
    required_error: "Veuillez sélectionner un type de site",
  }),
  email: z.string().email({
    message: "Veuillez entrer une adresse email valide",
  }),
  brandName: z.string().min(2, {
    message: "Le nom de la marque doit contenir au moins 2 caractères",
  }),
  brandColor: z.string().min(3, {
    message: "Veuillez entrer une couleur valide (ex: #FF0000, red, rgb(255,0,0))",
  }),
  serviceDescription: z.string().optional(),
  productDescription: z.string().optional(),
  digitalProductDescription: z.string().optional(),
});

export type OrderFormData = z.infer<typeof formSchema>;

interface OrderFormProps {
  onSubmit: (values: OrderFormData) => void;
}

export const OrderForm = ({ onSubmit }: OrderFormProps) => {
  const [showSiteTypeFields, setShowSiteTypeFields] = useState(false);
  const [showBrandFields, setShowBrandFields] = useState(false);
  const [siteType, setSiteType] = useState<"vitrine" | "ecommerce" | "service">();

  const form = useForm<OrderFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      offer: undefined,
      siteType: undefined,
      email: "",
      brandName: "",
      brandColor: "",
      serviceDescription: "",
      productDescription: "",
      digitalProductDescription: "",
    },
  });

  const handleSubmit = async (values: OrderFormData) => {
    try {
      // Save order to Supabase
      const { error: dbError } = await supabase
        .from('Informations de commande')
        .insert({
          offer: values.offer,
          site_type: values.siteType,
          email: values.email,
          brand_name: values.brandName,
          brand_color: values.brandColor,
          service_description: values.serviceDescription,
          product_description: values.productDescription,
          digital_product_description: values.digitalProductDescription,
        });

      if (dbError) {
        console.error("Erreur lors de l'enregistrement de la commande:", dbError);
        toast.error("Une erreur est survenue lors de l'enregistrement de votre commande");
        return;
      }

      // Send detailed order email
      const { error: emailError } = await supabase.functions.invoke('send-order-email', {
        body: {
          offer: values.offer,
          siteType: values.siteType,
          email: values.email,
          brandName: values.brandName,
          brandColor: values.brandColor,
          serviceDescription: values.serviceDescription,
          productDescription: values.productDescription,
          digitalProductDescription: values.digitalProductDescription,
        },
      });

      if (emailError) {
        console.error("Erreur lors de l'envoi de l'email:", emailError);
        toast.error("Une erreur est survenue lors de l'envoi de la confirmation");
        return;
      }

      toast.success("Votre commande a été enregistrée avec succès !");
      onSubmit(values);
    } catch (error) {
      console.error("Erreur lors du traitement de la commande:", error);
      toast.error("Une erreur est survenue lors du traitement de votre commande");
    }
  };

  const handleOfferSelect = (offerType: "complete" | "premium" | "magique") => {
    form.setValue("offer", offerType);
    setShowSiteTypeFields(true);
    toast.success(`Offre ${offerType} sélectionnée`);
  };

  const handleSiteTypeChange = (value: string) => {
    setSiteType(value as "vitrine" | "ecommerce" | "service");
    setShowBrandFields(true);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="offer"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="text-2xl md:text-3xl font-bold text-center block mb-8 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Choisissez votre offre
                </FormLabel>
                <FormControl>
                  <div data-name="offers-section" className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 max-w-[2000px] mx-auto">
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                      <GlareCard 
                        className="flex flex-col items-start justify-between p-6 cursor-pointer relative"
                        onClick={() => handleOfferSelect("complete")}
                      >
                        <div className="w-full">
                          <h3 className="text-2xl font-bold text-white mb-4">Offre Complète</h3>
                          <div className="space-y-3 text-neutral-200">
                            {["Design personnalisé", "Responsive design", "3 pages", "Formulaire de contact", "Optimisation SEO de base", "Support 30 jours"].map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6">
                            <p className="text-2xl font-bold text-primary">849€</p>
                            <p className="text-sm text-neutral-400 line-through">999€</p>
                          </div>
                          <div className="mt-4 bg-primary/10 p-4 rounded-lg backdrop-blur-sm">
                            <p className="font-semibold text-primary">BONUS : Guide d'optimisation SEO offert (valeur 99€)</p>
                          </div>
                        </div>
                      </GlareCard>
                    </div>

                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                      <GlareCard 
                        className="flex flex-col items-start justify-between p-6 cursor-pointer relative"
                        onClick={() => handleOfferSelect("premium")}
                      >
                        <div className="absolute -top-2 left-0 right-0 mx-auto w-40 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold z-10 text-center shadow-lg">
                          Plus Populaire
                        </div>
                        <div className="w-full">
                          <h3 className="text-2xl font-bold text-white mb-4">Premium</h3>
                          <div className="space-y-3 text-neutral-200">
                            {["Tout de l'offre Complète", "Jusqu'à 7 pages", "Blog intégré", "Animations personnalisées", "Optimisation SEO avancée", "Support 60 jours"].map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6">
                            <p className="text-2xl font-bold text-primary">1399€</p>
                            <p className="text-sm text-neutral-400 line-through">1699€</p>
                          </div>
                          <div className="mt-4 bg-primary/10 p-4 rounded-lg backdrop-blur-sm">
                            <p className="font-semibold text-primary">BONUS : Formation maintenance WordPress (valeur 299€)</p>
                          </div>
                          <div className="mt-4 bg-primary/10 p-4 rounded-lg backdrop-blur-sm">
                            <p className="text-primary">Passez à l'offre Magique pour seulement 500€ de plus et obtenez des pages illimitées !</p>
                          </div>
                        </div>
                      </GlareCard>
                    </div>

                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                      <GlareCard 
                        className="flex flex-col items-start justify-between p-6 cursor-pointer relative"
                        onClick={() => handleOfferSelect("magique")}
                      >
                        <div className="w-full">
                          <h3 className="text-2xl font-bold text-white mb-4">Magique</h3>
                          <div className="space-y-3 text-neutral-200">
                            {["Tout de l'offre Premium", "Pages illimitées", "E-commerce intégré", "Système de réservation", "Optimisation SEO expert", "Support 90 jours"].map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6">
                            <p className="text-2xl font-bold text-primary">1899€</p>
                            <p className="text-sm text-neutral-400 line-through">2499€</p>
                          </div>
                          <div className="mt-4 bg-primary/10 p-4 rounded-lg backdrop-blur-sm">
                            <p className="font-semibold text-primary">BONUS EXCLUSIF : Audit performance + Plan marketing (valeur 599€)</p>
                          </div>
                        </div>
                      </GlareCard>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {showSiteTypeFields && (
            <div className="animate-in fade-in-50 duration-500">
              <FormField
                control={form.control}
                name="siteType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Quel type de site souhaitez-vous créer ?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) => {
                          field.onChange(value);
                          handleSiteTypeChange(value);
                        }}
                        defaultValue={field.value}
                        className="flex flex-col space-y-4"
                      >
                        <FormItem className="flex flex-col space-y-2">
                          <div className="flex items-center space-x-3">
                            <FormControl>
                              <RadioGroupItem value="vitrine" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Site Vitrine
                            </FormLabel>
                          </div>
                          <p className="text-sm text-muted-foreground pl-8">
                            Parfait pour présenter votre entreprise, vos services ou votre portfolio
                          </p>
                        </FormItem>
                        
                        <FormItem className="flex flex-col space-y-2">
                          <div className="flex items-center space-x-3">
                            <FormControl>
                              <RadioGroupItem value="ecommerce" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Site E-commerce
                            </FormLabel>
                          </div>
                          <p className="text-sm text-muted-foreground pl-8">
                            Pour vendre des produits physiques en ligne avec gestion de stock et paiements
                          </p>
                        </FormItem>
                        
                        <FormItem className="flex flex-col space-y-2">
                          <div className="flex items-center space-x-3">
                            <FormControl>
                              <RadioGroupItem value="service" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Site de vente de produits digitaux
                            </FormLabel>
                          </div>
                          <p className="text-sm text-muted-foreground pl-8">
                            Idéal pour vendre des ebooks, formations en ligne, logiciels ou autres produits numériques
                          </p>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {showBrandFields && (
            <div className="space-y-6 animate-in fade-in-50 duration-500">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Votre adresse email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="exemple@domaine.com" 
                        {...field} 
                      />
                    </FormControl>
                    <p className="text-sm text-muted-foreground mt-1">
                      Cette adresse email sera utilisée par nos professionnels pour vous envoyer votre site web une fois terminé.
                    </p>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="brandName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom de votre marque</FormLabel>
                    <FormControl>
                      <Input placeholder="Votre marque" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="brandColor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Couleur principale de votre marque</FormLabel>
                    <FormControl>
                      <Input 
                        type="text" 
                        placeholder="Entrez une couleur (ex: #FF0000, red, rgb(255,0,0))" 
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          console.log("Couleur saisie:", e.target.value);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {siteType === "vitrine" && (
                <FormField
                  control={form.control}
                  name="serviceDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Décrivez vos services</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Détaillez les services que vous proposez..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {siteType === "ecommerce" && (
                <FormField
                  control={form.control}
                  name="productDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Décrivez vos produits</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Détaillez les produits que vous vendez..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {siteType === "service" && (
                <FormField
                  control={form.control}
                  name="digitalProductDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Décrivez vos produits numériques</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Détaillez les produits numériques que vous proposez..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <RainbowButton type="submit" className="w-full">
                Procéder au paiement
              </RainbowButton>
            </div>
          )}
        </div>
      </form>
    </Form>
  );
};