import {atom, selector} from "recoil";

export const increNumState = atom<number>({
    key: "increaseNumber",
    default: 0
})

export const decreNumState = atom<number>({
    key: "decreaseNumber",
    default: 100
})
