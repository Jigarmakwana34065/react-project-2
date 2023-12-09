import { useState } from "react"

const FunctionCounter = () => {
    const [counter, setcounter] = useState(0)

    const increment = () => {
        setcounter(counter + 1)
    }

    const decrement = () => {
        setcounter(counter - 1)
    }

    const reset = () => {
        // setcounter(counter = 0)   this also work
        setcounter(0)
    }

    console.log(counter);

    return (
        <>
            <h1>counter app using function component</h1>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="counter-app">
                            <div className="main">
                                <button onClick={decrement}>-</button>
                                <span>{counter}</span>
                                <button onClick={increment}>+</button>
                                <button onClick={reset}>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FunctionCounter;