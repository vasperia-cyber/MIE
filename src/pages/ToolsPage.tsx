import Layout from "@/components/Layout";
import ToolCard from "@/components/ToolCard";
import { Calculator, Droplets, Moon, HeartPulse, Scale, Activity, Baby, Brain, Flame, Weight } from "lucide-react";

const tools = [
  { title: "Calcul IMC", description: "Calculez votre Indice de Masse Corporelle et évaluez votre poids santé.", icon: Calculator, to: "/outil/imc", color: "bg-primary" },
  { title: "Calcul Calories", description: "Estimez vos besoins caloriques journaliers selon votre profil et activité.", icon: Flame, to: "/outil/calories", color: "bg-wellness-gold" },
  { title: "Hydratation", description: "Découvrez la quantité d'eau idéale à boire chaque jour.", icon: Droplets, to: "/outil/hydratation", color: "bg-[hsl(var(--wellness-sky))]" },
  { title: "Calculateur Sommeil", description: "Trouvez l'heure idéale pour vous coucher ou vous lever.", icon: Moon, to: "/outil/sommeil", color: "bg-[hsl(var(--wellness-lavender))]" },
  { title: "Zones Cardiaques", description: "Calculez vos zones de fréquence cardiaque pour un entraînement optimal.", icon: HeartPulse, to: "/outil/cardiaque", color: "bg-[hsl(var(--wellness-rose))]" },
  { title: "Masse Grasse", description: "Estimez votre pourcentage de masse grasse corporelle.", icon: Scale, to: "/outil/masse-grasse", color: "bg-wellness-earth" },
  { title: "Poids Idéal", description: "Calculez votre poids idéal selon différentes formules scientifiques.", icon: Weight, to: "/outil/poids-ideal", color: "bg-wellness-leaf" },
  { title: "IMC Enfant", description: "Évaluez l'IMC de votre enfant selon les courbes de croissance.", icon: Baby, to: "/outil/imc-enfant", color: "bg-[hsl(var(--wellness-peach))]" },
  { title: "Métabolisme Basal", description: "Calculez votre métabolisme de base (BMR) pour mieux gérer votre poids.", icon: Activity, to: "/outil/metabolisme", color: "bg-primary" },
  { title: "Test de Stress", description: "Évaluez votre niveau de stress et recevez des conseils personnalisés.", icon: Brain, to: "/outil/stress", color: "bg-[hsl(var(--wellness-sage))]" },
];

const ToolsPage = () => (
  <Layout>
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-3 font-serif text-3xl font-bold text-foreground">Tous nos Outils</h1>
      <p className="mb-10 max-w-xl text-muted-foreground">Explorez notre collection complète d'outils de santé et de bien-être.</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tools.map((tool, i) => (
          <ToolCard key={tool.to} {...tool} delay={Math.min(i, 5)} />
        ))}
      </div>
    </div>
  </Layout>
);

export default ToolsPage;
