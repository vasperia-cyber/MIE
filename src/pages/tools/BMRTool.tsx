import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const BMRTool = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const a = parseFloat(age), w = parseFloat(weight), h = parseFloat(height);
    if (!a || !w || !h) return;
    const bmr = gender === "male"
      ? 10 * w + 6.25 * h - 5 * a + 5
      : 10 * w + 6.25 * h - 5 * a - 161;
    setResult(Math.round(bmr));
  };

  const inputClass = "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <ToolLayout title="Métabolisme Basal (BMR)" description="Calculez les calories que votre corps brûle au repos avec la formule Mifflin-St Jeor." article="<h2>Qu'est-ce que le métabolisme basal ?</h2><p>Le métabolisme basal (BMR) représente l'énergie minimale dont votre corps a besoin pour maintenir ses fonctions vitales au repos : respiration, circulation sanguine, régulation de la température, renouvellement cellulaire.</p><h2>Comment l'utiliser ?</h2><p>Votre BMR vous aide à déterminer vos besoins caloriques minimaux. Pour obtenir vos besoins totaux, multipliez-le par votre facteur d'activité. Ne descendez jamais en dessous de votre BMR dans un régime alimentaire sans supervision médicale.</p>">
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Sexe</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} className={inputClass}>
            <option value="male">Homme</option>
            <option value="female">Femme</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Âge</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="30" className={inputClass} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Poids (kg)</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="70" className={inputClass} />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Taille (cm)</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="175" className={inputClass} />
          </div>
        </div>
        <button onClick={calculate} className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:brightness-110">Calculer</button>
        {result && (
          <div className="mt-6 rounded-xl bg-secondary p-6 text-center">
            <p className="text-sm text-muted-foreground">Votre métabolisme basal</p>
            <p className="text-4xl font-bold font-serif text-primary">{result}</p>
            <p className="text-sm text-muted-foreground">kcal / jour au repos</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default BMRTool;
