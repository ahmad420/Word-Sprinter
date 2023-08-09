import React, { useEffect } from 'react';

interface TextDisplayProps {
  text: string;
  onCompletion: () => void;
  typedText: string;
}

const TextDisplay: React.FC<TextDisplayProps> = ({ text, onCompletion, typedText }) => {
  const displayWords = text.split(' ');
  const typedWords = typedText.split(' ');

  useEffect(() => {
    if (typedText === text) {
      onCompletion();
    }
  }, [typedText, text, onCompletion]);

  return (
    <div>
      <p>
        {displayWords.map((word, index) => (
          <span
            key={index}
            style={{
              backgroundColor: typedWords[index] === word ? 'lightgreen' : 'lightcoral',
            }}
          >
            {word}{' '}
          </span>
        ))}
      </p>
    </div>
  );
};

export default TextDisplay;
