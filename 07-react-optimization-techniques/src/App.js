import React, { useCallback, useState } from 'react';

import Button from "./components/UI/Button/Button"
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const ToggleShowParagraph = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((PrevShowParagraph) => !PrevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput onShow={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={ToggleShowParagraph}>Show paragraph</Button>
    </div>
  );
}

export default App;
