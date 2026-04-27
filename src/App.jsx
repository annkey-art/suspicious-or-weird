import { useState } from "react";

const questions = [
  {
    text: "Did they blink 3 or 5 times before mentioning the contract?",
    funny: true,
    answers: [
      { text: "Exactly 3. Very suspicious pigeon energy.", score: 0 },
      { text: "I was too busy questioning my life choices.", score: 0 }
    ]
  },
  {
    text: "Can they explain exactly what they will deliver?",
    answers: [
      { text: "Yes, clear and specific.", score: 0 },
      { text: "Kind of… fog machine activated.", score: 2 },
      { text: "No. Just beautiful words and expensive air.", score: 3 }
    ]
  },
  {
    text: "Can you verify one past result independently?",
    answers: [
      { text: "Yes, I checked.", score: 0 },
      { text: "Only from their own story.", score: 2 },
      { text: "No proof, just vibes in a suit.", score: 3 }
    ]
  },
  {
    text: "Does the timeline match their team size and capacity?",
    answers: [
      { text: "Yes, realistic.", score: 0 },
      { text: "A little too magical.", score: 2 },
      { text: "They promised a cathedral by Tuesday.", score: 3 }
    ]
  },
  {
    text: "Do they welcome questions?",
    answers: [
      { text: "Yes, openly.", score: 0 },
      { text: "They answer, but dance around details.", score: 2 },
      { text: "They act offended that reality exists.", score: 3 }
    ]
  },
  {
    text: "Are payment terms and responsibilities clear?",
    answers: [
      { text: "Yes, written clearly.", score: 0 },
      { text: "Some parts are vague.", score: 2 },
      { text: "The contract was written by smoke.", score: 3 }
    ]
  },
  {
    text: "Final gut check: does something feel off?",
    answers: [
      { text: "No, it feels steady.", score: 0 },
      { text: "A little, but I cannot name it.", score: 2 },
      { text: "My soul quietly left the meeting.", score: 3 }
    ]
  }
];

function getResult(score) {
  if (score <= 3) {
    return {
      title: "Clear Enough to Continue",
      tone: "No major red flags. Still verify documents, because trust is lovely but paperwork pays rent.",
      level: "low"
    };
  }
  if (score <= 10) {
    return {
      title: "Needs Verification",
      tone: "Not disaster. Not comfort either. Ask for specifics before you sign anything with your grown-up pen.",
      level: "medium"
    };
  }
  return {
    title: "Charming Chaos Detected",
    tone: "Step away from the contract. Slowly. Do not maintain eye contact with the timeline.",
    level: "high"
  };
}

export default function App() {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const done = index >= questions.length;
  const result = getResult(score);

  function answer(option) {
    setScore(score + option.score);
    setIndex(index + 1);
  }

  function restart() {
    setStarted(false);
    setIndex(0);
    setScore(0);
  }

  if (!started) {
    return (
      <main className="page">
        <section className="card hero">
          <p className="eyebrow">Serious business. Slightly suspicious questions.</p>
          <h1>Suspicious or Just Weird?</h1>
          <p className="lead">
            A tiny deal-checker for investors, founders, and people who have heard too many confident sentences.
          </p>
          <button onClick={() => setStarted(true)}>Check the deal</button>
        </section>
      </main>
    );
  }

  if (done) {
    return (
      <main className="page">
        <section className={`card result ${result.level}`}>
          <p className="eyebrow">Result</p>
          <h1>{result.title}</h1>
          <p className="lead">{result.tone}</p>

          <div className="score">Risk score: {score}</div>

          <div className="cta">
            <p>
              If you felt something but couldn’t explain it,
that’s exactly where most mistakes begin, but you do not need panic.
              You need a second brain with a flashlight.
            </p><a
  href="https://wa.me/48799148776?text=Hi%20Ania%2C%20I%20used%20Suspicious%20or%20Just%20Weird%20and%20I%20want%20to%20talk."
  target="_blank"
  rel="noreferrer"
>
  Talk to me on WhatsApp
</a>
          </div>

          <button className="secondary" onClick={restart}>Start again</button>
        </section>
      </main>
    );
  }

  const q = questions[index];

  return (
    <main className="page">
      <section className="card">
        <p className="eyebrow">Question {index + 1} / {questions.length}</p>
        <h1>{q.text}</h1>

        {q.funny && (
          <p className="note">
            This question is legally useless, emotionally necessary.
          </p>
        )}

        <div className="answers">
          {q.answers.map((a, i) => (
            <button key={i} onClick={() => answer(a)}>
              {a.text}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
