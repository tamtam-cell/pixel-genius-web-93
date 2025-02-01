import { CardData } from "@/types/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

interface ProjectDialogProps {
  selectedCard: CardData | null;
  onOpenChange: (open: boolean) => void;
}

export const ProjectDialog = ({ selectedCard, onOpenChange }: ProjectDialogProps) => {
  if (!selectedCard) return null;

  return (
    <Dialog open={!!selectedCard} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-sites-web bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#D6BCFA]">
            {selectedCard.title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {selectedCard.story}
          </p>
          <div className="mt-6 flex justify-end">
            <InteractiveHoverButton 
              onClick={() => window.open(selectedCard.websiteUrl, '_blank')}
              text="Visiter le site"
              icon={<ExternalLink className="h-4 w-4" />}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};