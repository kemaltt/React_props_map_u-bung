import FaqItems from "./FaqItems";

let faq = [
  {
    question: "Für wen ist dieses Bootcamp?",
    answer:
      "Für alle Menschen die motiviert sind Neues zu lernen! Du solltest außerdem über 18 Jahre alt sein und bestenfalls eine Leidenschaft für den Bereich IT mitbringen.",
  },
  {
    question: "Welcher akademische Grad ist erforderlich?",
    answer:
      "Lange Rede, kurzer Sinn – Keiner. Wir sind auf der Suche nach wunderbaren Querdenkern*innen, die motiviert sind ein neues Leben zu starten.",
  },
  {
    question: "Ist Vorerfahrung im Bereich IT / Coding notwendig?",
    answer:
      "Nein. Alles was du brauchst ist Zeit, Motivation und den Willen eines Bill Gates. 😉 Du solltest aber in der Lage sein, Songs von Britney Spears zu verstehen und zu übersetzen, da alle Programmiersprachen auf Englisch basieren.",
  },
  {
    question: "Wie lange dauern die Bootcamps?",
    answer:
      "Das kommt ganz auf das Kursformat an. Der Vollzeit Kurs ist 22 Wochen lang (5 Monate) und der Teilzeitkurs streckt sich über 30 Wochen (7 Monate).",
  },
];

const Faq = () => {
  return (
    <div className="faq_container">
      <h1>FAQ</h1>
      <FaqItems question={faq[0].question} answer={faq[0].answer} />
      <FaqItems question={faq[1].question} answer={faq[1].answer} />
      <FaqItems question={faq[2].question} answer={faq[2].answer} />
      <FaqItems question={faq[3].question} answer={faq[3].answer} />
    </div>
  );
};

export default Faq;
