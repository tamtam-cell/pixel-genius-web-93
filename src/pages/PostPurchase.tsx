import { motion } from "framer-motion";
import { Mail, CreditCard, AlertCircle, FileEdit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLocation } from "react-router-dom";

const PostPurchase = () => {
  const { t } = useLanguage();
  const location = useLocation();
  console.log("PostPurchase page loaded with state:", location.state);

  return (
    <div className="min-h-screen py-24 flex items-center justify-center bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block p-4 rounded-full bg-primary/10 mb-6"
            >
              <CreditCard className="w-12 h-12 text-primary" />
            </motion.div>
            <h1 className="text-4xl font-bold mb-4">Merci pour votre commande !</h1>
            <p className="text-muted-foreground text-lg">
              Nous avons bien reçu votre paiement et allons commencer à travailler sur votre projet très prochainement.
            </p>
          </div>

          <div className="grid gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex items-center gap-4 mb-2">
                      <AlertCircle className="w-8 h-8 text-primary" />
                      <h2 className="text-2xl font-semibold">Besoin d'aide ?</h2>
                    </div>
                    <p className="text-muted-foreground text-lg mb-4">
                      En cas de problème ou de question, n'hésitez pas à nous contacter :
                    </p>
                    <div className="inline-flex items-center gap-2 text-primary hover:underline bg-primary/10 px-4 py-2 rounded-full transition-all hover:bg-primary/20">
                      <Mail className="w-5 h-5" />
                      <a href="mailto:contact@pixelcraftlab.fr" className="text-lg">contact@pixelcraftlab.fr</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <FileEdit className="w-6 h-6 text-primary" />
                    <h2 className="text-xl font-semibold">Modifications</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Vous souhaitez modifier votre site après sa création ? C'est possible ! 
                      Les modifications seront facturées en supplément selon la complexité des changements demandés.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PostPurchase;