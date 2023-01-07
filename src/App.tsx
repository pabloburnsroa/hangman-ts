import { useCallback, useEffect, useState } from 'react';
import { Keyboard } from './Keyboard';
import { HangmanDrawing } from './HangmanDrawing';
import { HangmanWord } from './HangmanWord';
import words from './word-list.json';

function App() {
  const [word, setWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !word.includes(letter)
  );

  const addGuessedLetter = useCallback(
    (letter: string) => {
      // check if letter already guessed
      if (guessedLetters.includes(letter)) return;
      // update guessedLetters array of strings
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters]);
  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <div>
        <h1>Placeholder for win/lose text</h1>
      </div>
      <HangmanDrawing incorrectGuesses={incorrectGuesses.length} />
      <HangmanWord word={word} guessedLetters={guessedLetters} />
      {/* align-self: stretch will auto-size the keyboard buttons to fit the
      container (in this example - to fit the flexbox) */}
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard
          addGuessedLetter={addGuessedLetter}
          guessedLetters={guessedLetters}
          word={word}
        />
      </div>
    </div>
  );
}

export default App;
