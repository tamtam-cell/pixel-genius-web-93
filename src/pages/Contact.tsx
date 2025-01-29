import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-8">Contactez-nous</h1>
        <p className="text-muted-foreground mb-12">
          Notre équipe est à votre écoute pour vous accompagner dans votre projet
        </p>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="cyber-border p-8 rounded-xl mb-8"
        >
          <div className="flex items-center justify-center gap-4 text-2xl font-semibold">
            <Phone className="w-8 h-8 text-primary" />
            <motion.a
              href="tel:+33123456789"
              className="hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              +33 1 23 45 67 89
            </motion.a>
          </div>
          <p className="mt-4 text-muted-foreground">
            Disponible du lundi au vendredi, de 9h à 18h
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;