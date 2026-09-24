import BlurText from "./components/BlurText";
import CircularText from "./components/CircularText/CircularText";
import CurvedLoop from "./components/CurvedLoop/CurvedLoop";
import "./App.css";

function App() {
  return (
    <>
      <BlurText
        text="Isn't this so cool?!"
        delay={200}
        animateBy="words"
        direction="top"
        className="text-2xl mb-8"
      />

      <CircularText
        text="REACT*BITS*COMPONENTS*"
        onHover="speedUp"
        spinDuration={20}
        className="custom-class"
      />

      <CurvedLoop
        marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"
        speed={2}
        curveAmount={400}
        direction="right"
        interactive
        className="custom-text-style"
      />
    </>
  );
}

export default App;
