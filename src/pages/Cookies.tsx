import React from "react";

const Cookies = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Paramètres des Cookies</h1>
      <div className="prose prose-invert max-w-none">
        <p className="mb-6">
          Dernière mise à jour : {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Utilisation des Cookies</h2>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
            Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous 
            aident à fournir et améliorer nos services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Types de Cookies</h2>
          <ul className="list-disc pl-6 mt-2">
            <li>Cookies essentiels pour le fonctionnement du site</li>
            <li>Cookies analytiques pour comprendre l'utilisation</li>
            <li>Cookies de préférences pour personnaliser votre expérience</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Gestion des Cookies</h2>
          <p>
            Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. 
            Vous pouvez supprimer tous les cookies déjà présents sur votre appareil et 
            paramétrer la plupart des navigateurs pour les empêcher d'en installer.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Cookies;