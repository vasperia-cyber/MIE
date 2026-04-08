import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const CaloriesTool = () => {
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("1.55");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const a = parseFloat(age), w = parseFloat(weight), h = parseFloat(height);
    if (!a || !w || !h) return;
    let bmr = gender === "male"
      ? 88.362 + 13.397 * w + 4.799 * h - 5.677 * a
      : 447.593 + 9.247 * w + 3.098 * h - 4.330 * a;
    setResult(Math.round(bmr * parseFloat(activity)));
  };

  const selectClass = "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-ring";
  const inputClass = selectClass;

  return (
    <ToolLayout title="Calculateur de Calories" description="Estimez vos besoins caloriques journaliers avec la formule de Mifflin-St Jeor." article="<h2>Comment sont calculées les calories ?</h2><p>Ce calculateur utilise la formule de Mifflin-St Jeor, considérée comme l'une des plus précises pour estimer le métabolisme de base. Le résultat est ensuite multiplié par un facteur d'activité physique pour obtenir vos besoins caloriques totaux.</p><h2>Niveaux d'activité</h2><p><strong>Sédentaire :</strong> Travail de bureau, peu d'exercice.<br/><strong>Légèrement actif :</strong> Exercice léger 1-3 jours/semaine.<br/><strong>Modérément actif :</strong> Exercice modéré 3-5 jours/semaine.<br/><strong>Très actif :</strong> Exercice intense 6-7 jours/semaine.<br/><strong>Extrêmement actif :</strong> Entraînement intense quotidien ou travail physique.</p>">
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Sexe</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} className={selectClass}>
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
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Niveau d'activité</label>
          <select value={activity} onChange={(e) => setActivity(e.target.value)} className={selectClass}>
            <option value="1.2">Sédentaire</option>
            <option value="1.375">Légèrement actif</option>
            <option value="1.55">Modérément actif</option>
            <option value="1.725">Très actif</option>
            <option value="1.9">Extrêmement actif</option>
          </select>
        </div>
        <button onClick={calculate} className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:brightness-110">Calculer</button>
        {result && (
          <div className="mt-6 rounded-xl bg-secondary p-6 text-center">
            <p className="text-sm text-muted-foreground">Besoins caloriques journaliers</p>
            <p className="text-4xl font-bold font-serif text-primary">{result}</p>
            <p className="text-sm text-muted-foreground">kcal / jour</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default CaloriesTool;
