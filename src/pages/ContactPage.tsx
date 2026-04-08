import Layout from "@/components/Layout";
import { Mail, MessageSquare } from "lucide-react";

const ContactPage = () => (
  <Layout>
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-4 font-serif text-3xl font-bold text-foreground">Contact</h1>
      <div className="mx-auto max-w-2xl">
        <p className="mb-8 text-muted-foreground">
          Vous avez une question, une suggestion ou souhaitez signaler un problème ? N'hésitez pas à nous contacter.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-wellness rounded-2xl border border-border bg-card p-6">
            <Mail className="mb-3 h-8 w-8 text-primary" />
            <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">Email</h3>
            <p className="text-sm text-muted-foreground">contact@vitalsante.com</p>
          </div>
          <div className="card-wellness rounded-2xl border border-border bg-card p-6">
            <MessageSquare className="mb-3 h-8 w-8 text-primary" />
            <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">Réseaux Sociaux</h3>
            <p className="text-sm text-muted-foreground">Suivez-nous pour des conseils santé quotidiens.</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ContactPage;
