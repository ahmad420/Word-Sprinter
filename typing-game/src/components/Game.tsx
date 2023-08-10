import React, { useState } from 'react';
import TextDisplay from './TextDisplay';
import Timer from './Timer';
import '../App.css';

const texts = [
  "The quick brown fox jumps over the lazy dog.",
  "Sphinx of black quartz, judge my vow.",
  "Pack my box with five dozen liquor jugs.",
  // Add more texts
];

const Game: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [typedText, setTypedText] = useState('');

  const handleTextCompletion = () => {
    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    setTypedText('');
    setTimerStarted(false);
  };

  const handleEndOfGame = () => {
    alert("Game over! Time's up.");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!timerStarted) {
      setTimerStarted(true);
    }
    setTypedText(e.target.value);
  };

  return (
  <div className='game1'>
    <div className="game-container">
      <h1>SwiftType Challenge</h1>
      <TextDisplay text={texts[currentTextIndex]} onCompletion={handleTextCompletion} typedText={typedText} />
      <Timer timerStarted={timerStarted} onEnd={handleEndOfGame} />
      <input
        type="text"
        value={typedText}
        onChange={handleInputChange}
        onFocus={() => setTimerStarted(true)}
        placeholder="Start typing..."
      />
    </div>
  </div>

  );
};

export default Game;
