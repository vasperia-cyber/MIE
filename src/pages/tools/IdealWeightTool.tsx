import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const IdealWeightTool = () => {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [results, setResults] = useState<{ name: string; weight: number }[] | null>(null);

  const calculate = () => {
    const h = parseFloat(height);
    if (!h) return;
    const hInch = h / 2.54;
    const base = hInch - 60;
    const formulas = gender === "male"
      ? [
          { name: "Devine", weight: 50 + 2.3 * base },
          { name: "Robinson", weight: 52 + 1.9 * base },
          { name: "Miller", weight: 56.2 + 1.41 * base },
          { name: "Hamwi", weight: 48.0 + 2.7 * base },
        ]
      : [
          { name: "Devine", weight: 45.5 + 2.3 * base },
          { name: "Robinson", weight: 49 + 1.7 * base },
          { name: "Miller", weight: 53.1 + 1.36 * base },
          { name: "Hamwi", weight: 45.5 + 2.2 * base },
        ];
    setResults(formulas.map((f) => ({ ...f, weight: Math.round(f.weight * 10) / 10 })));
  };

  const inputClass = "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <ToolLayout title="Calculateur de Poids Idéal" description="Estimez votre poids idéal selon 4 formules scientifiques reconnues." article="<h2>Les différentes formules</h2><p><strong>Devine (1974)</strong> : La plus utilisée en médecine.<br/><strong>Robinson (1983)</strong> : Ajustement de Devine.<br/><strong>Miller (1983)</strong> : Prend en compte les morphologies plus larges.<br/><strong>Hamwi (1964)</strong> : Une des premières formules développées.</p><p>Chaque formule donne un résultat légèrement différent. La moyenne de ces résultats offre une estimation raisonnable de votre poids idéal.</p>">
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Sexe</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} className={inputClass}>
            <option value="male">Homme</option>
            <option value="female">Femme</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Taille (cm)</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="175" className={inputClass} />
        </div>
        <button onClick={calculate} className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:brightness-110">Calculer</button>
        {results && (
          <div className="mt-6 space-y-3">
            {results.map((r) => (
              <div key={r.name} className="flex items-center justify-between rounded-lg bg-secondary p-4">
                <span className="text-sm font-medium text-foreground">Formule {r.name}</span>
                <span className="text-lg font-bold text-primary">{r.weight} kg</span>
              </div>
            ))}
            <div className="rounded-lg bg-primary/10 p-4 text-center">
              <p className="text-sm text-muted-foreground">Moyenne</p>
              <p className="text-2xl font-bold font-serif text-primary">
                {(results.reduce((s, r) => s + r.weight, 0) / results.length).toFixed(1)} kg
              </p>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default IdealWeightTool;
