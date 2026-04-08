import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const BodyFatTool = () => {
  const [gender, setGender] = useState("male");
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [height, setHeight] = useState("");
  const [hip, setHip] = useState("");
  const [result, setResult] = useState<{ bf: number; category: string } | null>(null);

  const calculate = () => {
    const w = parseFloat(waist), n = parseFloat(neck), h = parseFloat(height), hp = parseFloat(hip);
    if (!w || !n || !h) return;
    let bf: number;
    if (gender === "male") {
      bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
    } else {
      if (!hp) return;
      bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hp - n) + 0.22100 * Math.log10(h)) - 450;
    }
    let category = "";
    if (gender === "male") {
      if (bf < 6) category = "Essentiel";
      else if (bf < 14) category = "Athlétique";
      else if (bf < 18) category = "Forme";
      else if (bf < 25) category = "Acceptable";
      else category = "Excès";
    } else {
      if (bf < 14) category = "Essentiel";
      else if (bf < 21) category = "Athlétique";
      else if (bf < 25) category = "Forme";
      else if (bf < 32) category = "Acceptable";
      else category = "Excès";
    }
    setResult({ bf: Math.round(bf * 10) / 10, category });
  };

  const inputClass = "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <ToolLayout title="Calculateur de Masse Grasse" description="Estimez votre pourcentage de graisse corporelle avec la méthode US Navy." article="<h2>La méthode US Navy</h2><p>Cette méthode utilise des mesures de tour de taille, de cou et de hanches pour estimer le pourcentage de graisse corporelle. Bien qu'elle soit moins précise que les méthodes comme le DEXA scan, elle offre une bonne estimation sans équipement spécialisé.</p>">
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Sexe</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} className={inputClass}>
            <option value="male">Homme</option>
            <option value="female">Femme</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Taille (cm)</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="175" className={inputClass} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Tour de cou (cm)</label>
            <input type="number" value={neck} onChange={(e) => setNeck(e.target.value)} placeholder="38" className={inputClass} />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Tour de taille (cm)</label>
          <input type="number" value={waist} onChange={(e) => setWaist(e.target.value)} placeholder="85" className={inputClass} />
        </div>
        {gender === "female" && (
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Tour de hanches (cm)</label>
            <input type="number" value={hip} onChange={(e) => setHip(e.target.value)} placeholder="95" className={inputClass} />
          </div>
        )}
        <button onClick={calculate} className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:brightness-110">Calculer</button>
        {result && (
          <div className="mt-6 rounded-xl bg-secondary p-6 text-center">
            <p className="text-sm text-muted-foreground">Masse grasse estimée</p>
            <p className="text-4xl font-bold font-serif text-primary">{result.bf}%</p>
            <p className="mt-1 text-sm font-semibold text-foreground">{result.category}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default BodyFatTool;
