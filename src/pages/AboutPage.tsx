import Layout from "@/components/Layout";
import { Heart, Shield, Users } from "lucide-react";

const AboutPage = () => (
  <Layout>
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-4 font-serif text-3xl font-bold text-foreground">À Propos de VitalSanté</h1>
      <div className="mx-auto max-w-3xl">
        <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
          VitalSanté est une plateforme dédiée à votre santé et votre bien-être. Notre mission est de rendre les outils de santé accessibles à tous, gratuitement et sans inscription.
        </p>
        <p className="mb-10 leading-relaxed text-muted-foreground">
          Nos calculateurs sont basés sur des formules médicales reconnues et validées par la communauté scientifique. Nous croyons que chacun devrait avoir accès à des informations fiables pour mieux comprendre son corps et prendre soin de sa santé.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Heart, title: "Notre Mission", desc: "Démocratiser l'accès aux outils de santé pour permettre à chacun de mieux comprendre son corps." },
            { icon: Shield, title: "Confidentialité", desc: "Vos données restent sur votre appareil. Aucune information personnelle n'est collectée ni stockée." },
            { icon: Users, title: "Pour Tous", desc: "Des outils simples et intuitifs, conçus pour être utilisés par tous, sans connaissances médicales préalables." },
          ].map((item) => (
            <div key={item.title} className="card-wellness rounded-2xl border border-border bg-card p-6">
              <item.icon className="mb-3 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-xl bg-secondary p-6">
          <h2 className="mb-3 font-serif text-xl font-semibold text-foreground">Avertissement médical</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Les outils proposés sur VitalSanté sont fournis à titre informatif uniquement. Ils ne remplacent en aucun cas un avis médical professionnel, un diagnostic ou un traitement. Consultez toujours votre médecin ou un professionnel de santé qualifié pour toute question relative à votre état de santé.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
