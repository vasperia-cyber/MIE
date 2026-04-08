import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const HydrationTool = () => {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [climate, setClimate] = useState("temperate");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    if (!w) return;
    let base = w * 0.033;
    if (activity === "active") base += 0.5;
    if (activity === "very-active") base += 1;
    if (climate === "hot") base += 0.5;
    if (climate === "very-hot") base += 0.8;
    setResult(Math.round(base * 10) / 10);
  };

  const selectClass = "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <ToolLayout title="Calculateur d'Hydratation" description="Découvrez combien de litres d'eau vous devriez boire chaque jour." article="<h2>L'importance de l'hydratation</h2><p>L'eau représente environ 60% du poids corporel d'un adulte. Une bonne hydratation est essentielle pour la régulation de la température, le transport des nutriments, l'élimination des déchets et le bon fonctionnement de tous les organes.</p><h2>Signes de déshydratation</h2><p>Fatigue, maux de tête, urine foncée, bouche sèche, vertiges et difficulté à se concentrer sont des signes courants de déshydratation. Il est recommandé de boire régulièrement tout au long de la journée, sans attendre d'avoir soif.</p>">
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Poids (kg)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="70" className={selectClass} />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Niveau d'activité</label>
          <select value={activity} onChange={(e) => setActivity(e.target.value)} className={selectClass}>
            <option value="sedentary">Sédentaire</option>
            <option value="moderate">Modéré</option>
            <option value="active">Actif</option>
            <option value="very-active">Très actif</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Climat</label>
          <select value={climate} onChange={(e) => setClimate(e.target.value)} className={selectClass}>
            <option value="cold">Froid</option>
            <option value="temperate">Tempéré</option>
            <option value="hot">Chaud</option>
            <option value="very-hot">Très chaud</option>
          </select>
        </div>
        <button onClick={calculate} className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:brightness-110">Calculer</button>
        {result && (
          <div className="mt-6 rounded-xl bg-secondary p-6 text-center">
            <p className="text-sm text-muted-foreground">Quantité d'eau recommandée</p>
            <p className="text-4xl font-bold font-serif text-primary">{result} L</p>
            <p className="text-sm text-muted-foreground">par jour (≈ {Math.round(result * 4)} verres)</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default HydrationTool;
