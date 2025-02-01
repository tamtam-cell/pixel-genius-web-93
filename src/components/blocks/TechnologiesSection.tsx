import { GradientHeading } from "@/components/ui/gradient-heading";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { 
  AppleIcon, 
  SupabaseIcon, 
  VercelIcon, 
  ClaudeAIIcon, 
  NextjsIcon, 
  TailwindCSSIcon, 
  UpstashIcon, 
  TypeScriptIcon, 
  StripeIcon, 
  OpenAIIconBlack 
} from "@/components/ui/icons";

const allLogos = [
  { name: "React", id: 1, img: AppleIcon },
  { name: "Next.js", id: 2, img: NextjsIcon },
  { name: "TypeScript", id: 3, img: TypeScriptIcon },
  { name: "Tailwind CSS", id: 4, img: TailwindCSSIcon },
  { name: "Supabase", id: 5, img: SupabaseIcon },
  { name: "Vercel", id: 6, img: VercelIcon },
  { name: "OpenAI", id: 7, img: OpenAIIconBlack },
  { name: "Stripe", id: 8, img: StripeIcon },
  { name: "Upstash", id: 9, img: UpstashIcon },
  { name: "Claude AI", id: 10, img: ClaudeAIIcon },
];

export const TechnologiesSection = () => {
  return (
    <section className="w-full bg-slate-50/50 py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-8 py-12">
          <div className="mx-auto flex w-full max-w-screen-lg flex-col items-center space-y-8">
            <div className="text-center">
              <GradientHeading variant="secondary" size="lg">
                Technologies de pointe
              </GradientHeading>
              <GradientHeading size="xxl" className="mt-4">
                Notre Stack Technique
              </GradientHeading>
            </div>

            <LogoCarousel columnCount={4} logos={allLogos} />
          </div>
        </div>
      </div>
    </section>
  );
};