export interface Time {
  ms: string;
  mss: string;
}

export function microsecondsToTime(micro: number, offset = 0): Time {

  micro = micro + offset;

  const ms = Math.floor((micro/1000) << 0)
  const mss = Math.floor(micro % 1000)
  const m = (ms > 0 ? (ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms) : "000:").toString();
  const s = (mss > 0 ? (mss < 10 ? "00" + mss : mss < 100 ? "0" + mss : mss) : "000").toString();

  return {
    ms: m,
    mss: s
  };
}
