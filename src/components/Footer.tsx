import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Heart className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-serif text-lg font-bold text-foreground">VitalSanté</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Votre partenaire de confiance pour une vie plus saine. Des outils gratuits et fiables pour suivre votre bien-être au quotidien.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Outils Populaires</h4>
          <div className="space-y-2">
            <Link to="/outil/imc" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Calcul IMC</Link>
            <Link to="/outil/calories" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Calcul Calories</Link>
            <Link to="/outil/hydratation" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Hydratation</Link>
            <Link to="/outil/sommeil" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Sommeil</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Plus d'Outils</h4>
          <div className="space-y-2">
            <Link to="/outil/metabolisme" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Métabolisme Basal</Link>
            <Link to="/outil/masse-grasse" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Masse Grasse</Link>
            <Link to="/outil/poids-ideal" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Poids Idéal</Link>
            <Link to="/outil/stress" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Test Stress</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-4">Informations</h4>
          <div className="space-y-2">
            <Link to="/a-propos" className="block text-sm text-muted-foreground hover:text-primary transition-colors">À Propos</Link>
            <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            <Link to="/politique-de-confidentialite" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Politique de Confidentialité</Link>
            <Link to="/mentions-legales" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Mentions Légales</Link>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} VitalSanté. Tous droits réservés. Les informations fournies sont à titre indicatif et ne remplacent pas un avis médical.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
