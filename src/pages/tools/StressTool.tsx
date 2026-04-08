import { useState } from "react";
import ToolLayout from "@/components/ToolLayout";

const questions = [
  "Vous sentez-vous souvent irritable ou agité(e) ?",
  "Avez-vous du mal à vous endormir ou à rester endormi(e) ?",
  "Ressentez-vous des tensions musculaires fréquentes (cou, dos, épaules) ?",
  "Avez-vous du mal à vous concentrer sur vos tâches quotidiennes ?",
  "Vous sentez-vous souvent dépassé(e) par vos responsabilités ?",
  "Avez-vous des maux de tête fréquents ?",
  "Votre appétit a-t-il changé récemment (trop ou pas assez) ?",
  "Avez-vous du mal à vous détendre, même pendant votre temps libre ?",
  "Vous sentez-vous fatigué(e) même après une nuit de sommeil ?",
  "Avez-vous tendance à vous inquiéter excessivement ?",
];

const StressTool = () => {
  const [answers, setAnswers] = useState<number[]>(new Array(10).fill(-1));
  const [result, setResult] = useState<{ score: number; level: string; advice: string } | null>(null);

  const setAnswer = (qi: number, val: number) => {
    const newAnswers = [...answers];
    newAnswers[qi] = val;
    setAnswers(newAnswers);
  };

  const calculate = () => {
    if (answers.some((a) => a === -1)) return;
    const score = answers.reduce((s, a) => s + a, 0);
    let level = "", advice = "";
    if (score <= 10) {
      level = "Faible"; advice = "Votre niveau de stress est bas. Continuez à maintenir un bon équilibre de vie avec de l'exercice régulier et des moments de détente.";
    } else if (score <= 20) {
      level = "Modéré"; advice = "Vous ressentez un stress modéré. Pensez à intégrer des techniques de relaxation comme la méditation, le yoga ou la respiration profonde dans votre routine.";
    } else if (score <= 30) {
      level = "Élevé"; advice = "Votre stress est élevé. Il est recommandé de consulter un professionnel de santé et d'adopter des stratégies de gestion du stress : activité physique, sophrologie, thérapie cognitive.";
    } else {
      level = "Très élevé"; advice = "Votre niveau de stress est très préoccupant. Consultez rapidement un médecin ou un psychologue. Ne restez pas seul(e) face à cette situation.";
    }
    setResult({ score, level, advice });
  };

  const options = [
    { label: "Jamais", value: 0 },
    { label: "Rarement", value: 1 },
    { label: "Parfois", value: 2 },
    { label: "Souvent", value: 3 },
    { label: "Toujours", value: 4 },
  ];

  return (
    <ToolLayout title="Test de Niveau de Stress" description="Évaluez votre niveau de stress avec ce questionnaire en 10 questions.">
      <div className="space-y-6">
        {questions.map((q, i) => (
          <div key={i}>
            <p className="mb-2 text-sm font-medium text-foreground">{i + 1}. {q}</p>
            <div className="flex flex-wrap gap-2">
              {options.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setAnswer(i, opt.value)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    answers[i] === opt.value
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
        <button onClick={calculate} disabled={answers.some((a) => a === -1)} className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed">
          Voir mon résultat
        </button>
        {result && (
          <div className="rounded-xl bg-secondary p-6">
            <div className="mb-4 text-center">
              <p className="text-sm text-muted-foreground">Score de stress</p>
              <p className="text-4xl font-bold font-serif text-primary">{result.score}/40</p>
              <p className="mt-1 text-lg font-semibold text-foreground">Niveau : {result.level}</p>
            </div>
            <div className="mb-3 h-3 w-full rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${(result.score / 40) * 100}%` }} />
            </div>
            <p className="text-sm text-muted-foreground">{result.advice}</p>
          </div>
        )}
      </div>
    </ToolLayout>
  );
};

export default StressTool;
