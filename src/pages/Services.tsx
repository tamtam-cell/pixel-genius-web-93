import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { GlareCard } from "@/components/ui/glare-card";
import { ShieldCheck } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { SparklesText } from "@/components/ui/sparkles-text";

const formSchema = z.object({
  offer: z.enum(["complete", "premium", "magique"], {
    required_error: "Veuillez sélectionner une offre",
  }),
  siteType: z.enum(["vitrine", "ecommerce", "service"], {
    required_error: "Veuillez sélectionner un type de site",
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

const Services = () => {
  const [showSiteTypeFields, setShowSiteTypeFields] = useState(false);
  const [showBrandFields, setShowBrandFields] = useState(false);
  const [siteType, setSiteType] = useState<"vitrine" | "ecommerce" | "service">();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      offer: undefined,
      siteType: undefined,
      brandName: "",
      brandColor: "",
      serviceDescription: "",
      productDescription: "",
      digitalProductDescription: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Formulaire soumis avec les valeurs:", values);
    toast.success("Votre demande a été envoyée avec succès !");
  };

  const handleOfferChange = (value: string) => {
    form.setValue("offer", value as "complete" | "premium" | "magique");
    setShowSiteTypeFields(true);
  };

  const handleSiteTypeChange = (value: string) => {
    setSiteType(value as "vitrine" | "ecommerce" | "service");
    setShowBrandFields(true);
  };

  const handleOfferSelect = (offerType: "complete" | "premium" | "magique") => {
    form.setValue("offer", offerType);
    setShowSiteTypeFields(true);
    toast.success(`Offre ${offerType} sélectionnée`);
  };

  return (
    <div className="w-full px-4 pt-32 pb-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-white to-primary/80 bg-clip-text text-transparent font-sites-web">
        Créez Votre Site Web
      </h1>
      <SparklesText 
        text="Suivez les étapes ci-dessous pour nous aider à comprendre votre projet"
        className="text-center text-lg md:text-xl text-primary/90 mb-12 font-medium"
        colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
        sparklesCount={15}
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="offer"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-2xl md:text-3xl font-bold text-center block mb-8 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                    Choisissez votre offre
                  </FormLabel>
                  <FormControl>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 max-w-[2000px] mx-auto">
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
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="vitrine" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Site Vitrine
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="ecommerce" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Site E-commerce
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="service" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Site de Services
                            </FormLabel>
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
                  Envoyer ma demande
                </RainbowButton>
              </div>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Services;
