import { useCallback, useEffect, useState } from 'react';
import { Keyboard } from './Keyboard';
import { HangmanDrawing } from './HangmanDrawing';
import { HangmanWord } from './HangmanWord';
import words from './word-list.json';

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [word, setWord] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [timeUp, setTimeUp] = useState(false);

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !word.includes(letter)
  );

  const addGuessedLetter = useCallback(
    (letter: string) => {
      // check if letter already guessed
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      // update guessedLetters array of strings
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters]
  );

  const isWinner = word
    .split('')
    .every((letter) => guessedLetters.includes(letter));
  const isLoser = incorrectGuesses.length >= 10;
  const isPlaying = true;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeUp(true);
      setGuessedLetters([]);
      setWord(getWord());
    }, 120000);

    return () => clearTimeout(timeout);
  }, []);

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

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== 'Enter') return;

      e.preventDefault();
      setGuessedLetters([]);
      setWord(getWord());
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, []);
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
        <h1>
          {isWinner && 'You Win!'}
          {isLoser && 'Nice Try, You Lose'}
        </h1>
        {timeUp ? <p>You lost, times up! </p> : null}
      </div>
      <HangmanDrawing incorrectGuesses={incorrectGuesses.length} />
      <HangmanWord
        word={word}
        guessedLetters={guessedLetters}
        reveal={isLoser}
      />
      {/* align-self: stretch will auto-size the keyboard buttons to fit the
      container (in this example - to fit the flexbox) */}
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard
          addGuessedLetter={addGuessedLetter}
          guessedLetters={guessedLetters}
          word={word}
          disabled={isWinner || isLoser}
        />
      </div>
    </div>
  );
}

export default App;
