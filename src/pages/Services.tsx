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

const formSchema = z.object({
  offer: z.enum(["complete", "premium", "magique"], {
    required_error: "Veuillez sélectionner une offre",
  }),
  siteType: z.enum(["vitrine", "ecommerce", "service"], {
    required_error: "Veuillez sélectionner un type de site",
  }),
  businessName: z.string().min(2, {
    message: "Le nom de l'entreprise doit contenir au moins 2 caractères",
  }),
  industry: z.string({
    required_error: "Veuillez sélectionner votre secteur d'activité",
  }),
  budget: z.string({
    required_error: "Veuillez sélectionner votre budget",
  }),
  timeline: z.string({
    required_error: "Veuillez sélectionner votre délai souhaité",
  }),
  description: z.string().min(10, {
    message: "La description doit contenir au moins 10 caractères",
  }),
});

const Services = () => {
  const [showSiteTypeFields, setShowSiteTypeFields] = useState(false);
  const [showNextFields, setShowNextFields] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      offer: undefined,
      siteType: undefined,
      businessName: "",
      industry: "",
      budget: "",
      timeline: "",
      description: "",
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
    setShowNextFields(true);
  };

  return (
    <div className="container mx-auto px-4 pt-32 pb-16 max-w-2xl">
      <h1 className="text-4xl font-bold text-center mb-8">Créez Votre Site Web</h1>
      <p className="text-center text-muted-foreground mb-12">
        Suivez les étapes ci-dessous pour nous aider à comprendre votre projet
      </p>

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

            {showNextFields && (
              <div className="space-y-6 animate-in fade-in-50 duration-500">
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom de votre entreprise</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre entreprise" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="industry"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Secteur d'activité</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez votre secteur" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="commerce">Commerce</SelectItem>
                          <SelectItem value="services">Services</SelectItem>
                          <SelectItem value="technologie">Technologie</SelectItem>
                          <SelectItem value="sante">Santé</SelectItem>
                          <SelectItem value="education">Éducation</SelectItem>
                          <SelectItem value="autre">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget approximatif</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez votre budget" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="moins-2000">Moins de 2000€</SelectItem>
                          <SelectItem value="2000-5000">2000€ - 5000€</SelectItem>
                          <SelectItem value="5000-10000">5000€ - 10000€</SelectItem>
                          <SelectItem value="plus-10000">Plus de 10000€</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Délai souhaité</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez votre délai" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1-mois">1 mois</SelectItem>
                          <SelectItem value="2-3-mois">2-3 mois</SelectItem>
                          <SelectItem value="3-6-mois">3-6 mois</SelectItem>
                          <SelectItem value="plus-6-mois">Plus de 6 mois</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description de votre projet</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Décrivez brièvement votre projet..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Envoyer ma demande
                </Button>
              </div>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Services;