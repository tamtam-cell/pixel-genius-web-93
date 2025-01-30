import { motion } from "framer-motion";
import { Phone, Instagram } from "lucide-react";

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
        
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="cyber-border p-8 rounded-xl"
          >
            <div className="flex items-center justify-center gap-4 text-2xl font-semibold">
              <Phone className="w-8 h-8 text-primary" />
              <motion.a
                href="tel:+33745451136"
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                +33 7 45 45 11 36
              </motion.a>
            </div>
            <p className="mt-4 text-muted-foreground">
              Disponible 7j/7 de 9h à 20h
            </p>
          </motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="cyber-border p-8 rounded-xl"
          >
            <div className="flex items-center justify-center gap-4 text-2xl font-semibold">
              <Instagram className="w-8 h-8 text-primary" />
              <motion.a
                href="https://instagram.com/pixelcraftlab.professionnelle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                @pixelcraftlab.professionnelle
              </motion.a>
            </div>
            <p className="mt-4 text-muted-foreground">
              Vous pouvez aussi contacter notre Professionnelle sur Instagram disponible 7j/7 de 9h à 20h
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;