import {useHook2} from "../hooks/useHook2";

export default function TestC() {
    const { increNum, decreNum, setIncreNum, setDecreNum} = useHook2()
    return (
        <div style={{background: "yellow"}}>
            <div><h3> TestC</h3></div>
            <div>
                <p>
                    <span>increaseNum : { increNum }</span>
                    <button onClick={() => setIncreNum(increNum+1)}>setIncreaseNum</button>
                </p>
                <p>
                    <span>decreaseNum : { decreNum }</span>
                    <button onClick={() => setDecreNum(decreNum-1)}>setIncreaseNum</button>
                </p>
            </div>
        </div>
    )
}