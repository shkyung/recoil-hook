import {increNumState, decreNumState} from '../recoil'
import {useRecoilState} from "recoil";

export const useHook2 = () => {
    const [increNum, setIncreNum] = useRecoilState(increNumState)
    const [decreNum, setDecreNum] = useRecoilState(decreNumState)

    return {
        increNum,
        setIncreNum,
        decreNum,
        setDecreNum
    }
}