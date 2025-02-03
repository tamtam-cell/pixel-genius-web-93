import { useState } from "react";
import { SparklesText } from "@/components/ui/sparkles-text";
import { OrderForm, OrderFormData } from "@/components/forms/OrderForm";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";

const Services = () => {
  const location = useLocation();
  const state = location.state as { scrollToCards?: boolean };

  const handleStripeRedirect = (offer: string) => {
    console.log('Redirecting to Stripe for offer:', offer);
    const stripeLinks = {
      complete: 'https://buy.stripe.com/eVa5nV4ZF6T95uE6oo',
      premium: 'https://buy.stripe.com/eVag2z3VBcdt3mw289',
      magique: 'https://buy.stripe.com/fZedUr3VBgtJbT2dQS'
    };
    
    const link = stripeLinks[offer];
    if (link) {
      window.location.href = link;
    } else {
      toast.error("Une erreur s'est produite lors de la redirection vers le paiement");
    }
  };

  const handleSubmit = (values: OrderFormData) => {
    handleStripeRedirect(values.offer);
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
      <OrderForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Services;