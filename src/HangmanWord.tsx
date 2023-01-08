type HangmanWordProps = {
  word: string;
  guessedLetters: string[];
  reveal?: boolean;
};
export function HangmanWord({
  word,
  guessedLetters,
  reveal,
}: HangmanWordProps) {
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
            visibility:
              guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden',
            color: !guessedLetters.includes(letter) && reveal ? 'red' : '',
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
