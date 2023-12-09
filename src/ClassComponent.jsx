import { Component } from "react";

class ClassCounter extends Component {
    constructor() {
        super();
        this.state = {
            cnt: 0,
        }
    }

    increment = () => {
        this.setState({
            cnt: this.state.cnt + 1
        })
    }

    decrement = () => {
        this.setState({
            cnt: this.state.cnt - 1
        })
    }

    reset = () => {
        this.setState({
            cnt: this.state.cnt = 0
        })
    }

    render() {
        return (
            <>
                <h1>Counter app using class component</h1>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="counter-app">
                                <div className="main">
                                    <button onClick={this.decrement}>-</button>

                                    <span>{this.state.cnt}</span>

                                    <button onClick={this.increment}>+</button>

                                    <button onClick={this.reset}>Reset</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default ClassCounter;