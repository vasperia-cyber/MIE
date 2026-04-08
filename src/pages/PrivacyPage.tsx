import Layout from "@/components/Layout";

const PrivacyPage = () => (
  <Layout>
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-6 font-serif text-3xl font-bold text-foreground">Politique de Confidentialité</h1>
      <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground">
        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">1. Collecte des données</h2>
          <p className="leading-relaxed">VitalSanté ne collecte aucune donnée personnelle de santé. Tous les calculs sont effectués localement sur votre appareil et aucune information n'est transmise à nos serveurs.</p>
        </section>
        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">2. Cookies</h2>
          <p className="leading-relaxed">Nous utilisons des cookies strictement nécessaires au fonctionnement du site. Des cookies tiers peuvent être utilisés à des fins publicitaires par Google AdSense, conformément à la politique de confidentialité de Google.</p>
        </section>
        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">3. Google AdSense</h2>
          <p className="leading-relaxed">Ce site utilise Google AdSense pour afficher des publicités. Google peut utiliser des cookies pour diffuser des annonces basées sur vos visites précédentes sur ce site ou d'autres sites. Vous pouvez désactiver la publicité personnalisée en visitant les paramètres de publicité Google.</p>
        </section>
        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">4. Vos droits</h2>
          <p className="leading-relaxed">Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous à contact@vitalsante.com.</p>
        </section>
        <section>
          <h2 className="mb-2 font-serif text-xl font-semibold text-foreground">5. Modifications</h2>
          <p className="leading-relaxed">Nous nous réservons le droit de modifier cette politique à tout moment. Les modifications seront publiées sur cette page avec la date de mise à jour.</p>
        </section>
        <p className="text-sm">Dernière mise à jour : Avril 2026</p>
      </div>
    </div>
  </Layout>
);

export default PrivacyPage;
