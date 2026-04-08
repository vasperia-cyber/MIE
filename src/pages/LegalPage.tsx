import Layout from "@/components/Layout";

const LegalPage = () => (
  <Layout>
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-6 font-serif text-3xl font-bold text-foreground">Mentions Légales</h1>
      <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground">
        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Éditeur du site</h2>
          <p className="leading-relaxed">VitalSanté — Site d'outils de santé et de bien-être en ligne.</p>
        </section>
        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Responsabilité</h2>
          <p className="leading-relaxed">Les informations fournies sur ce site sont à titre indicatif et ne constituent pas un avis médical. VitalSanté décline toute responsabilité quant à l'utilisation des résultats des outils proposés. Consultez un professionnel de santé pour tout conseil médical.</p>
        </section>
        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">Propriété intellectuelle</h2>
          <p className="leading-relaxed">L'ensemble du contenu de ce site (textes, images, design) est protégé par le droit d'auteur. Toute reproduction est interdite sans autorisation préalable.</p>
        </section>
      </div>
    </div>
  </Layout>
);

export default LegalPage;
