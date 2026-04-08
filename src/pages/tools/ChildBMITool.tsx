import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const ChildBMITool = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<{ imc: number; interpretation: string } | null>(null);

  const calculate = () => {
    const a = parseFloat(age), w = parseFloat(weight), h = parseFloat(height) / 100;
    if (!a || !w || !h || a < 2 || a > 18) return;
    const imc = w / (h * h);
    let interpretation = "";
    // Simplified percentile interpretation
    const thresholds = gender === "male"
      ? { under: 14.5 + a * 0.1, normal: 18.5 + a * 0.3, over: 21 + a * 0.4 }
      : { under: 14 + a * 0.1, normal: 18 + a * 0.3, over: 20.5 + a * 0.4 };

    if (imc < thresholds.under) interpretation = "Insuffisance pondérale — Consultez votre pédiatre.";
    else if (imc < thresholds.normal) interpretation = "Poids normal — Votre enfant a un poids santé.";
    else if (imc < thresholds.over) interpretation = "Surpoids — Des ajustements alimentaires peuvent aider.";
    else interpretation = "Obésité — Consultez votre pédiatre pour un suivi adapté.";

    setResult({ imc: Math.round(imc * 10) / 10, interpretation });
  };

  const inputClass = "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <ToolLayout title="IMC Enfant & Adolescent" description="Évaluez l'IMC de votre enfant (2-18 ans) et sa position par rapport aux références." article="<h2>Particularités de l'IMC chez l'enfant</h2><p>Contrairement aux adultes, l'IMC chez l'enfant varie normalement avec l'âge et le sexe. Il doit être interprété en fonction de courbes de référence (percentiles). Un IMC «normal» à 5 ans est très différent d'un IMC normal à 15 ans.</p><h2>Quand consulter ?</h2><p>Si l'IMC de votre enfant semble s'écarter significativement des normes, consultez votre pédiatre. Un suivi régulier de la croissance est le meilleur moyen de détecter précocement un problème pondéral.</p>">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Sexe</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} className={inputClass}>
              <option value="male">Garçon</option>
              <option value="female">Fille</option>
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Âge (2-18)</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="10" className={inputClass} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Poids (kg)</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="35" className={inputClass} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Taille (cm)</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="140" className={inputClass} />
          </div>
        </div>
        <button onClick={calculate} className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:brightness-110">Calculer</button>
        {result && (
          <div className="mt-6 rounded-xl bg-secondary p-6 text-center">
            <p className="text-sm text-muted-foreground">IMC de l'enfant</p>
            <p className="text-4xl font-bold font-serif text-primary">{result.imc}</p>
            <p className="mt-2 text-sm text-foreground">{result.interpretation}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default ChildBMITool;
