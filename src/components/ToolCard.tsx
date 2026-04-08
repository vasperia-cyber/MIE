import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  color: string;
  delay?: number;
}

const ToolCard = ({ title, description, icon: Icon, to, color, delay = 0 }: ToolCardProps) => (
  <Link to={to} className={`card-wellness group block rounded-2xl border border-border bg-card p-6 animate-fade-up animate-fade-up-delay-${delay}`}>
    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${color} transition-transform duration-300 group-hover:scale-110`}>
      <Icon className="h-7 w-7 text-primary-foreground" />
    </div>
    <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">{title}</h3>
    <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    <div className="mt-4 flex items-center text-sm font-medium text-primary transition-colors group-hover:text-wellness-leaf">
      Utiliser l'outil →
    </div>
  </Link>
);

export default ToolCard;
