import React from "react";

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>
      <div className="prose prose-invert max-w-none">
        <p className="mb-6">
          Dernière mise à jour : {new Date().toLocaleDateString()}
        </p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Chez PixelCraftLab, nous accordons une grande importance à la protection de vos données personnelles. 
            Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Collecte des Données</h2>
          <p>
            Nous collectons uniquement les données nécessaires pour vous fournir nos services :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Informations de contact (nom, email, téléphone)</li>
            <li>Données de navigation sur notre site</li>
            <li>Informations techniques sur votre appareil</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Utilisation des Données</h2>
          <p>
            Vos données sont utilisées pour :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Améliorer nos services</li>
            <li>Personnaliser votre expérience</li>
            <li>Communiquer avec vous</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Privacy;