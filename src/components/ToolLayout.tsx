import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "./Layout";

interface ToolLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  article?: string;
}

const ToolLayout = ({ title, description, children, article }: ToolLayoutProps) => (
  <Layout>
    <div className="container mx-auto px-4 py-8">
      <Link to="/outils" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> Retour aux outils
      </Link>
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 font-serif text-3xl font-bold text-foreground">{title}</h1>
        <p className="mb-8 text-muted-foreground">{description}</p>
        <div className="card-wellness rounded-2xl border border-border bg-card p-6 md:p-8">
          {children}
        </div>
        {article && (
          <article className="prose prose-sm mt-10 max-w-none text-muted-foreground">
            <div dangerouslySetInnerHTML={{ __html: article }} />
          </article>
        )}
      </div>
    </div>
  </Layout>
);

export default ToolLayout;
