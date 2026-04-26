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
