import { useEffect, useState } from "react";
import { RedButton } from "./RedButton";
import { useCookies } from "react-cookie";

const clickUrl =
  "https://do-not-click-lambda.netlify.app/.netlify/functions/click";
const fingerprintUrl =
  "https://do-not-click-lambda.netlify.app/.netlify/functions/fingerprint";

function App() {
  const [buttonPressed, setButtonPressed] = useState(false);
  const [resultText, setResultText] = useState<string | null>(null);
  const [cookies, setCookie] = useCookies(["fingerprint"]);

  useEffect(() => {
    const setNewFingerprintCookie = async () => {
      const resp = await fetch(fingerprintUrl);
      const newFingerprint = await resp.text();
      setCookie("fingerprint", newFingerprint);
    };

    if (!cookies["fingerprint"]) {
      setNewFingerprintCookie();
      return;
    }
  }, [cookies, setCookie]);

  const fingerprint = cookies['fingerprint'];

  const buttonClicked = async () => {
    setButtonPressed(true);

    const response = await fetch(clickUrl, {
      method: "POST",
      body: JSON.stringify({ fingerprint }),
    });

    const data = await response.text();
    setResultText(data);
    setButtonPressed(false);
  };

  if (!fingerprint){
    return null;
  }

  return (
    <div
      style={{
        textAlign: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ flex: "1", maxHeight: "60vh", width: "100%" }}>
        <RedButton onClick={buttonClicked} pressed={buttonPressed} />
      </div>
      <h1
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          margin: "20px 0 0 0",
          fontSize: "clamp(16px, 5vw, 32px)",
          maxHeight: "20vh",
          overflow: "auto",
        }}
      >
        {resultText}
      </h1>
    </div>
  );
}

export default App;
