import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const IMCTool = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<{ imc: number; category: string; color: string } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (!w || !h) return;
    const imc = w / (h * h);
    let category = "";
    let color = "";
    if (imc < 18.5) { category = "Insuffisance pondérale"; color = "text-[hsl(var(--wellness-sky))]"; }
    else if (imc < 25) { category = "Poids normal"; color = "text-primary"; }
    else if (imc < 30) { category = "Surpoids"; color = "text-wellness-gold"; }
    else if (imc < 35) { category = "Obésité modérée"; color = "text-destructive"; }
    else { category = "Obésité sévère"; color = "text-destructive"; }
    setResult({ imc, category, color });
  };

  return (
    <ToolLayout title="Calculateur d'IMC" description="L'Indice de Masse Corporelle (IMC) est un indicateur simple pour évaluer votre corpulence." article="<h2>Qu'est-ce que l'IMC ?</h2><p>L'IMC (Indice de Masse Corporelle) est une mesure internationale utilisée pour évaluer la corpulence d'une personne. Il se calcule en divisant le poids (en kg) par la taille (en m) au carré. Un IMC entre 18,5 et 24,9 est considéré comme normal. Cet indicateur a été développé par Adolphe Quetelet au 19ème siècle.</p><h2>Limites de l'IMC</h2><p>L'IMC ne prend pas en compte la composition corporelle (masse musculaire vs masse grasse), l'âge, le sexe ou la répartition des graisses. Un sportif musclé peut avoir un IMC élevé sans être en surpoids. Pour une évaluation complète, consultez un professionnel de santé.</p>">
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Poids (kg)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="70" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Taille (cm)</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="175" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <button onClick={calculate} className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:brightness-110">Calculer mon IMC</button>
        {result && (
          <div className="mt-6 rounded-xl bg-secondary p-6 text-center">
            <p className="text-sm text-muted-foreground">Votre IMC</p>
            <p className={`text-4xl font-bold font-serif ${result.color}`}>{result.imc.toFixed(1)}</p>
            <p className={`mt-1 font-semibold ${result.color}`}>{result.category}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default IMCTool;
