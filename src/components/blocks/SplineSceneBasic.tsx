'use client';
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center text-lg md:text-xl">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Notre Histoire
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Depuis 2020, nous innovons et créons des expériences numériques uniques. Notre parcours est marqué par l'excellence technique et l'innovation constante.
          </p>
        </div>

        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}