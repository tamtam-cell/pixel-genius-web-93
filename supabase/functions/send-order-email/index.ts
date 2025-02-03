import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface OrderEmailRequest {
  offer: string;
  siteType: string;
  email: string;
  brandName: string;
  brandColor: string;
  serviceDescription?: string;
  productDescription?: string;
  digitalProductDescription?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const orderData: OrderEmailRequest = await req.json();
    console.log("Received order data:", orderData);

    const { offer, siteType, email, brandName, brandColor, serviceDescription, productDescription, digitalProductDescription } = orderData;

    const descriptionText = siteType === 'vitrine' ? serviceDescription :
                          siteType === 'ecommerce' ? productDescription :
                          digitalProductDescription;

    const emailResponse = await resend.emails.send({
      from: "PixelCraftLab <onboarding@resend.dev>",
      to: ["eltmytb@gmail.com"],
      subject: `Nouvelle commande - ${offer} pour ${brandName}`,
      html: `
        <h1>Nouvelle commande reçue !</h1>
        <h2>Détails de la commande :</h2>
        <ul>
          <li><strong>Offre choisie :</strong> ${offer}</li>
          <li><strong>Type de site :</strong> ${siteType}</li>
          <li><strong>Email client :</strong> ${email}</li>
          <li><strong>Nom de la marque :</strong> ${brandName}</li>
          <li><strong>Couleur de la marque :</strong> ${brandColor}</li>
          ${descriptionText ? `<li><strong>Description :</strong> ${descriptionText}</li>` : ''}
        </ul>
        <p>Connectez-vous à votre dashboard Supabase pour voir tous les détails de la commande.</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-order-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);