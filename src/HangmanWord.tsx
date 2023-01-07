type HangmanWordProps = {
  word: string;
  guessedLetters: string[];
};
export function HangmanWord({ word, guessedLetters }: HangmanWordProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}
    >
      {word.split('').map((letter, index) => (
        <span
          key={index}
          style={{
            borderBottom: '.1em solid black',
            visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden',
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
