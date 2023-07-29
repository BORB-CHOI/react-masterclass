// import { atom } from "recoil";

// export interface ITodo {
//   id: number;
//   text: string;
// }

// interface IToDoState {
//   [key: string]: ITodo[];
// }

// export const toDoState = atom<IToDoState>({
//   key: "toDo",
//   default: {
//     "To Do": [],
//     Doing: [],
//     Done: [],
//   },
// });
import { atom, selector } from "recoil";

export const timerState = atom<NodeJS.Timer>({
  key: "timer",
});

export const secondState = atom<number>({
  key: "second",
  default: 60,
});

export const minuteSelector = selector<number>({
  key: "minute",
  get: ({ get }) => {
    const second = get(secondState) / 60;
    return second;
  },
  set: ({ set }, newValue) => {
    const second = Number(newValue) * 60;
    set(secondState, second);
  },
});

export const roundState = atom<number>({
  key: "round",
  default: 0,
});

export const goalSelector = selector<number>({
  key: "goal",
  get: ({ get }) => {
    const round = get(roundState) / 4;
    return round;
  },
  set: ({ set }, newValue) => {
    const round = Number(newValue) * 4;
    set(roundState, round);
  },
});
