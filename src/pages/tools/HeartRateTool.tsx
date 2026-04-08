import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const HeartRateTool = () => {
  const [age, setAge] = useState("");
  const [restHr, setRestHr] = useState("");
  const [zones, setZones] = useState<{ name: string; min: number; max: number; desc: string }[] | null>(null);

  const calculate = () => {
    const a = parseFloat(age), rhr = parseFloat(restHr) || 70;
    if (!a) return;
    const maxHr = 220 - a;
    const reserve = maxHr - rhr;
    const z = [
      { name: "Zone 1 — Récupération", pMin: 0.5, pMax: 0.6, desc: "Échauffement et récupération active" },
      { name: "Zone 2 — Endurance", pMin: 0.6, pMax: 0.7, desc: "Brûlage de graisses, endurance de base" },
      { name: "Zone 3 — Aérobie", pMin: 0.7, pMax: 0.8, desc: "Amélioration de la condition cardiovasculaire" },
      { name: "Zone 4 — Seuil", pMin: 0.8, pMax: 0.9, desc: "Performance et vitesse" },
      { name: "Zone 5 — Maximum", pMin: 0.9, pMax: 1.0, desc: "Effort maximal, sprints courts" },
    ];
    setZones(z.map((zone) => ({
      name: zone.name,
      min: Math.round(rhr + reserve * zone.pMin),
      max: Math.round(rhr + reserve * zone.pMax),
      desc: zone.desc,
    })));
  };

  return (
    <ToolLayout title="Zones de Fréquence Cardiaque" description="Calculez vos zones cardiaques optimales avec la méthode de Karvonen." article="<h2>La méthode de Karvonen</h2><p>Cette méthode utilise votre fréquence cardiaque de réserve (FC max - FC repos) pour calculer des zones d'entraînement plus précises que la simple méthode par pourcentage de FC max. Elle est recommandée par les professionnels du sport.</p><h2>Comment mesurer sa FC au repos ?</h2><p>Mesurez votre pouls au réveil, allongé, pendant 60 secondes, sur 3 jours consécutifs. Faites la moyenne des 3 mesures pour obtenir votre FC au repos.</p>">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">Âge</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="30" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">FC repos (bpm)</label>
            <input type="number" value={restHr} onChange={(e) => setRestHr(e.target.value)} placeholder="70" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
          </div>
        </div>
        <button onClick={calculate} className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:brightness-110">Calculer mes zones</button>
        {zones && (
          <div className="mt-6 space-y-3">
            {zones.map((z, i) => (
              <div key={i} className="rounded-lg bg-secondary p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">{z.name}</span>
                  <span className="text-sm font-bold text-primary">{z.min} - {z.max} bpm</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{z.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default HeartRateTool;
