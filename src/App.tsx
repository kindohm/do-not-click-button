import { useState } from "react";
import { RedButton } from "./RedButton";

function App() {
  const fingerprint = "asdf";
  const [buttonPressed, setButtonPressed] = useState(false);
  const [resultText, setResultText] = useState<string | null>(null)

  const buttonClicked = async () => {
    setButtonPressed(true);

    const response = await fetch("https://do-not-click-lambda.netlify.app/.netlify/functions/click", {
      method: "POST",
      body: JSON.stringify({ fingerprint }),
    });

    const data = await response.text();
    setResultText(data);
    setButtonPressed(false);

  };

  return (
    <div style={{textAlign: 'center'}}>
      <RedButton onClick={buttonClicked} pressed={buttonPressed} />
      <h1 style={{fontFamily: 'sans-serif', textAlign: 'center'}}>{resultText}</h1>
    </div>
  );
}

export default App;
