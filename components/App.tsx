import TestA from './TestA'
import TestB from './TestB'
import TestC from './TestC'
import TestD from './TestD'

export default function App() {
    return (
        <div>
            <div>
                <h1>React.useState + hook - 각각 개별로 동작</h1>
                <TestA/>
                <TestB/>
            </div>
            <div>
                <h1>recoil + hook </h1>
                <TestC/>
                <TestD/>
            </div>
        </div>
    )
}