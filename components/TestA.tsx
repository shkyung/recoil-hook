import {useHook1} from "../hooks/useHook1";
export default function TestA() {
    const {increaseNum, decreaseNum, setIncreaseNum, setDecreaseNum } = useHook1()
    return (
        <div style={{background: "gray"}}>
            <div><h3> TestA</h3></div>
            <div>
                <p>
                    <span>increaseNum : { increaseNum }</span>
                    <button onClick={() => setIncreaseNum(increaseNum+1)}>setIncreaseNum</button>
                </p>
                <p>
                    <span>decreaseNum : { decreaseNum }</span>
                    <button onClick={() => setDecreaseNum(decreaseNum-1)}>setIncreaseNum</button>
                </p>
            </div>
        </div>
    )
}