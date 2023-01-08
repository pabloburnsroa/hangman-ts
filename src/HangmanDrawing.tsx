import styles from './HangmanDrawing.module.css';

const FRAME_1 = (
  <div
    style={{
      height: '10px',
      width: '250px',
      background: 'black',
      transform: 'translatey(400px)',
    }}
  />
);
const FRAME_2 = (
  <div
    style={{
      height: '400px',
      width: '10px',
      marginLeft: '120px',
      background: 'black',
      // transform: 'translatey(400px)',
    }}
  />
);
const FRAME_3 = (
  <div
    style={{
      height: '10px',
      width: '200px',
      background: 'black',
      marginLeft: '120px',
      transform: 'translatey(-400px)',
    }}
  />
);
const FRAME_4 = (
  <div
    style={{
      height: '50px',
      width: '10px',
      background: 'black',
      position: 'absolute',
      top: '10px',
      right: '80px',
    }}
  />
);

const HEAD = (
  <div
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '100%',
      border: '10px solid black',
      position: 'absolute',
      top: '50px',
      right: '50px',
    }}
  />
);

const BODY = (
  <div
    style={{
      width: '10px',
      height: '100px',
      background: 'black',
      position: 'absolute',
      top: '115px',
      right: '80px',
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '-15px',
      rotate: '-30deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '150px',
      right: '85px',
      rotate: '30deg',
      transformOrigin: 'right bottom',
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '200px',
      right: '-10px',
      rotate: '60deg',
      transformOrigin: 'left bottom',
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: '100px',
      height: '10px',
      background: 'black',
      position: 'absolute',
      top: '200px',
      right: '80px',
      rotate: '-60deg',
      transformOrigin: 'right bottom',
    }}
  />
);

const BODY_PARTS = [
  FRAME_1,
  FRAME_2,
  FRAME_3,
  FRAME_4,
  HEAD,
  BODY,
  RIGHT_ARM,
  LEFT_ARM,
  RIGHT_LEG,
  LEFT_LEG,
];

type HangmanDrawingProps = {
  incorrectGuesses: number;
};
export function HangmanDrawing({ incorrectGuesses }: HangmanDrawingProps) {
  console.log(`incorrectGuesses: ${incorrectGuesses}`);
  return (
    <div
      style={{
        position: 'relative',
        height: '500px',
        width: '400px',
      }}
    >
      {BODY_PARTS.slice(0, incorrectGuesses)}
    </div>
  );
}
