import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { GlareCard } from "@/components/ui/glare-card";
import { Sparkles, Rocket, Crown } from "lucide-react";

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
  brandColor: z.string({
    required_error: "Veuillez sélectionner une couleur",
  }),
  serviceDescription: z.string().optional(),
  productDescription: z.string().optional(),
  digitalProductDescription: z.string().optional(),
});

const OffersDisplay = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <GlareCard className="flex flex-col items-center justify-center gap-4 p-6">
        <Sparkles className="h-14 w-14 text-white" />
        <div className="text-center">
          <h3 className="text-white text-xl font-bold mb-2">Offre Complète</h3>
          <p className="text-neutral-200 text-sm">
            Site simple et efficace pour les petites entreprises
          </p>
        </div>
      </GlareCard>
      
      <GlareCard className="flex flex-col items-center justify-center gap-4 p-6">
        <Rocket className="h-14 w-14 text-white" />
        <div className="text-center">
          <h3 className="text-white text-xl font-bold mb-2">Premium</h3>
          <p className="text-neutral-200 text-sm">
            Fonctionnalités avancées pour entreprises en croissance
          </p>
        </div>
      </GlareCard>
      
      <GlareCard className="flex flex-col items-center justify-center gap-4 p-6">
        <Crown className="h-14 w-14 text-white" />
        <div className="text-center">
          <h3 className="text-white text-xl font-bold mb-2">Magique</h3>
          <p className="text-neutral-200 text-sm">
            Solution complète pour les grandes entreprises
          </p>
        </div>
      </GlareCard>
    </div>
  );
};

const Services = () => {
  const [showSiteTypeFields, setShowSiteTypeFields] = useState(false);
  const [showBrandFields, setShowBrandFields] = useState(false);

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
    form.setValue("siteType", value as "vitrine" | "ecommerce" | "service");
    setShowBrandFields(true);
  };

  const siteType = form.watch("siteType");

  return (
    <div className="container mx-auto px-4 pt-32 pb-16 max-w-2xl">
      <h1 className="text-4xl font-bold text-center mb-8">Créez Votre Site Web</h1>
      <p className="text-center text-muted-foreground mb-12">
        Choisissez l'offre qui correspond le mieux à vos besoins
      </p>

      <OffersDisplay />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="offer"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Choisissez votre offre</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleOfferChange(value);
                      }}
                      defaultValue={field.value}
                      className="flex flex-col space-y-4"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0 rounded-lg border p-4 hover:bg-accent">
                        <FormControl>
                          <RadioGroupItem value="complete" />
                        </FormControl>
                        <div className="space-y-1">
                          <FormLabel className="font-semibold">Offre Complète</FormLabel>
                          <p className="text-sm text-muted-foreground">
                            Idéal pour les petites entreprises - Site simple et efficace
                          </p>
                        </div>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0 rounded-lg border p-4 hover:bg-accent">
                        <FormControl>
                          <RadioGroupItem value="premium" />
                        </FormControl>
                        <div className="space-y-1">
                          <FormLabel className="font-semibold">Premium</FormLabel>
                          <p className="text-sm text-muted-foreground">
                            Pour les entreprises en croissance - Fonctionnalités avancées
                          </p>
                        </div>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0 rounded-lg border p-4 hover:bg-accent">
                        <FormControl>
                          <RadioGroupItem value="magique" />
                        </FormControl>
                        <div className="space-y-1">
                          <FormLabel className="font-semibold">Magique</FormLabel>
                          <p className="text-sm text-muted-foreground">
                            Solution complète pour les grandes entreprises
                          </p>
                        </div>
                      </FormItem>
                    </RadioGroup>
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
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Choisissez une couleur" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="color-1">Rouge</SelectItem>
                          <SelectItem value="color-2">Violet</SelectItem>
                          <SelectItem value="color-3">Bleu</SelectItem>
                          <SelectItem value="color-4">Turquoise</SelectItem>
                          <SelectItem value="color-5">Vert</SelectItem>
                        </SelectContent>
                      </Select>
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

                <Button type="submit" className="w-full">
                  Envoyer ma demande
                </Button>
              </div>
            )}
          </div>
        </form>
      </Form>

      <div className="mt-16 text-center space-y-4">
        <p className="text-lg font-medium">Pas convaincu? Appellez-nous!</p>
        <Button asChild variant="outline" className="mx-auto">
          <Link to="/contact">Nous Contacter</Link>
        </Button>
      </div>
    </div>
  );
};

export default Services;