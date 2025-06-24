import Threads from "./Threads";
import TextPressure from "./TextPressure";

export default function Landing() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', background: '#000', overflow: 'hidden' }}>
      <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      <TextPressure
        text="Hello!"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#fff"
        strokeColor="#ff0000"
        minFontSize={36}
      />
    </div>
  );
} 