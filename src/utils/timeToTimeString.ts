import { microsecondsToTime } from './secondsToTime';

export function timeToTimeString(
  max: number,
  seekHoverTime: number,
  offset = 0,
  minutesPrefix = '',
  secondsPrefix = ''
): string {
  const times = microsecondsToTime(seekHoverTime, offset);
  return `${times.sec}${times.ms}:${times.mss}`;
}
