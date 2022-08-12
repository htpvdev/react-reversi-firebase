// eslint-disable-next-line import/prefer-default-export
export const secondsToZeroFillMinutes = (seconds: number) => [
  // eslint-disable-next-line no-bitwise
  `0${String((seconds / 60) | 0)}`.slice(-2),
  `0${String(seconds % 60)}`.slice(-2),
];
