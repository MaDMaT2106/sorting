import { swap } from "./swap";

export function shuffle(arr) {
  const arrCopy = [...arr];
  for (let i = arrCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    swap(arrCopy, i, j);
  }
  return arrCopy;
}
