import React from "react";

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Conditions d'Utilisation</h1>
      <div className="prose prose-invert max-w-none">
        <p className="mb-6">
          Dernière mise à jour : {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptation des Conditions</h2>
          <p>
            En accédant à notre site, vous acceptez d'être lié par ces conditions d'utilisation, 
            toutes les lois et réglementations applicables, et acceptez que vous êtes responsable 
            du respect des lois locales applicables.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Licence d'Utilisation</h2>
          <p>
            La permission d'utiliser notre site est accordée sous réserve des restrictions suivantes :
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Ne pas reproduire ou copier le contenu</li>
            <li>Ne pas utiliser le site à des fins illégales</li>
            <li>Ne pas tenter de nuire au fonctionnement du site</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Limitation de Responsabilité</h2>
          <p>
            PixelCraftLab ne sera pas tenu responsable des dommages directs, indirects, 
            accessoires ou consécutifs résultant de votre utilisation du site.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;