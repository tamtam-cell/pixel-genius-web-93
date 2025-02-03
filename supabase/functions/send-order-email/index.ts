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

    const descriptionText = orderData.siteType === 'vitrine' ? orderData.serviceDescription :
                          orderData.siteType === 'ecommerce' ? orderData.productDescription :
                          orderData.digitalProductDescription;

    const emailResponse = await resend.emails.send({
      from: "PixelCraftLab <onboarding@resend.dev>",
      to: ["eltmytb@gmail.com"],
      subject: `Nouvelle commande - ${orderData.offer} pour ${orderData.brandName}`,
      html: `
        <h1>Nouvelle commande reçue !</h1>
        <h2>Détails de la commande :</h2>
        <ul>
          <li><strong>Offre choisie :</strong> ${orderData.offer}</li>
          <li><strong>Type de site :</strong> ${orderData.siteType}</li>
          <li><strong>Email client :</strong> ${orderData.email}</li>
          <li><strong>Nom de la marque :</strong> ${orderData.brandName}</li>
          <li><strong>Couleur de la marque :</strong> ${orderData.brandColor}</li>
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