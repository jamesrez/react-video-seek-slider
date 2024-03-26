export interface Time {
  sec: string;
  ms: string;
  mss: string;
}

export function microsecondsToTime(micro: number, offset = 0): Time {

  micro = micro + offset;

  const sec = Math.floor((micro/1000/1000) << 0)
  const ms = Math.floor((micro/1000%1000) << 0)
  const mss = Math.floor(micro % 1000)
  let s = sec > 0 ? ("0" + sec + ":") : "00:";
  if(sec == 0) s == "";
  const m = (ms > 0 ? (ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms) : "000").toString();
  const ss = (mss > 0 ? (mss < 10 ? "00" + mss : mss < 100 ? "0" + mss : mss) : "000").toString();
  
  return {
    sec: s,
    ms: m,
    mss: ss
  };
}
