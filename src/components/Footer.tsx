import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-primary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 <span className="text-primary font-semibold">Sampath Durgam</span>. All rights reserved.
          </p>

          <p className="text-sm text-muted-foreground">
            Built with <span className="text-red-500">♥</span> using React & Tailwind CSS
          </p>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full group hover:scale-110 transition-all"
          >
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;