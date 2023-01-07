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
};

export function Keyboard({
  word,
  guessedLetters,
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
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={styles.btn}
            key={id}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
