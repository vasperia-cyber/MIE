import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const SleepTool = () => {
  const [mode, setMode] = useState<"wake" | "sleep">("wake");
  const [time, setTime] = useState("07:00");
  const [results, setResults] = useState<string[]>([]);

  const calculate = () => {
    const [h, m] = time.split(":").map(Number);
    const totalMin = h * 60 + m;
    const cycles = [6, 5, 4, 3]; // sleep cycles (90 min each) + 15 min to fall asleep
    const times: string[] = [];

    cycles.forEach((c) => {
      let t = mode === "wake"
        ? totalMin - c * 90 - 15
        : totalMin + c * 90 + 15;
      if (t < 0) t += 1440;
      if (t >= 1440) t -= 1440;
      const hr = Math.floor(t / 60).toString().padStart(2, "0");
      const min = (t % 60).toString().padStart(2, "0");
      times.push(`${hr}:${min} (${c} cycles)`);
    });

    setResults(times);
  };

  return (
    <ToolLayout title="Calculateur de Sommeil" description="Trouvez les meilleurs horaires de coucher ou de réveil basés sur vos cycles de sommeil." article="<h2>Les cycles de sommeil</h2><p>Un cycle de sommeil complet dure environ 90 minutes et comprend le sommeil léger, le sommeil profond et le sommeil paradoxal (REM). Se réveiller entre deux cycles permet de se sentir plus reposé. L'adulte moyen a besoin de 4 à 6 cycles par nuit, soit 6 à 9 heures de sommeil.</p><h2>Conseils pour un meilleur sommeil</h2><p>Maintenez des horaires réguliers, évitez les écrans 1h avant le coucher, gardez votre chambre fraîche (18-20°C) et sombre, limitez la caféine après 14h et pratiquez une activité relaxante avant de dormir.</p>">
      <div className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">Mode</label>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => setMode("wake")} className={`rounded-lg py-2.5 text-sm font-medium transition-all ${mode === "wake" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
              Je veux me réveiller à
            </button>
            <button onClick={() => setMode("sleep")} className={`rounded-lg py-2.5 text-sm font-medium transition-all ${mode === "sleep" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
              Je vais dormir à
            </button>
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-foreground">{mode === "wake" ? "Heure de réveil" : "Heure de coucher"}</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        <button onClick={calculate} className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:brightness-110">Calculer</button>
        {results.length > 0 && (
          <div className="mt-6 space-y-3">
            <p className="text-sm font-medium text-foreground">{mode === "wake" ? "Heures de coucher recommandées :" : "Heures de réveil recommandées :"}</p>
            {results.map((r, i) => (
              <div key={i} className={`rounded-lg p-4 text-center font-semibold ${i === 0 ? "bg-primary/10 text-primary" : "bg-secondary text-secondary-foreground"}`}>
                {r} {i === 0 && "⭐ Optimal"}
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default SleepTool;
