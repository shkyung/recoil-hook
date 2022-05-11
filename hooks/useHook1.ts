import React, {useState} from 'react'

export const useHook1 = () => {
    const [increaseNum, setIncreaseNum] = useState(0)
    const [decreaseNum, setDecreaseNum] = useState(100)

    return {
        increaseNum,
        decreaseNum,
        setIncreaseNum,
        setDecreaseNum
    }
}