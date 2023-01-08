import styles from './Keyboard.module.css';

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

type KeyboardProps = {
  word: string;
  guessedLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

export function Keyboard({
  word,
  guessedLetters,
  disabled = false,
  addGuessedLetter,
}: KeyboardProps) {
  const activeLetters = guessedLetters.filter((letter) =>
    word.includes(letter)
  );

  const incorrectLetters = guessedLetters.filter(
    (letter) => !word.includes(letter)
  );

  return (
    <div className={styles.keyboard}>
      {KEYS.map((key, id) => {
        const activeLetter = activeLetters.includes(key);
        const inActive = incorrectLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${activeLetter ? styles.active : ''} ${
              inActive ? styles.inactive : ''
            }`}
            key={id}
            disabled={activeLetter || inActive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
