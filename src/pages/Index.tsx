import Layout from "@/components/Layout";
import ToolCard from "@/components/ToolCard";
import { Calculator, Droplets, Moon, HeartPulse, Scale, Activity, Baby, Brain, Flame, Weight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

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

const Index = () => (
  <Layout>
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "var(--gradient-hero)" }}>
      <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" width={1920} height={1080} />
      <div className="container relative mx-auto px-4 text-center">
        <h1 className="animate-fade-up mb-4 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
          Prenez soin de votre <span className="text-gradient-primary">santé</span>
        </h1>
        <p className="animate-fade-up animate-fade-up-delay-1 mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Des outils gratuits, fiables et faciles à utiliser pour suivre et améliorer votre bien-être au quotidien.
        </p>
        <a href="#outils" className="animate-fade-up animate-fade-up-delay-2 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:brightness-110">
          Découvrir nos outils
        </a>
      </div>
    </section>

    <section id="outils" className="container mx-auto px-4 py-16 md:py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-3 font-serif text-3xl font-bold text-foreground">Nos 10 Outils Santé</h2>
        <p className="mx-auto max-w-xl text-muted-foreground">Des calculateurs et tests conçus par des experts pour vous aider à mieux comprendre votre corps.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tools.map((tool, i) => (
          <ToolCard key={tool.to} {...tool} delay={Math.min(i, 5)} />
        ))}
      </div>
    </section>

    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Pourquoi utiliser VitalSanté ?</h2>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {[
            { title: "100% Gratuit", desc: "Tous nos outils sont accessibles gratuitement, sans inscription requise." },
            { title: "Fiable & Précis", desc: "Nos formules sont basées sur des études scientifiques reconnues." },
            { title: "Confidentialité", desc: "Aucune donnée personnelle n'est stockée. Vos calculs restent privés." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl bg-card p-6 shadow-sm">
              <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
