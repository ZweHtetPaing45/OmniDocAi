import { useState } from "react";
import "./App.css";
import { HaloButton } from "./components/ui/halo-button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="dark flex items-center justify-center min-h-screen bg-background">
      <HaloButton onClick={() => setCount(count + 1)}>
        Click me: {count}
      </HaloButton>
    </div>
  );
}

export default App;
