import React, {Component, createRef} from "react";


interface State {
    word: string,
    value: string,
    result: string
}

class WordRelayClass extends Component <{}, State> {

    state = {
        word: "조현진",
        value: "",
        result: ""
    };

    onSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        const input = this.onRefInput.current;
        if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
            this.setState({
                result: "딩동댕",
                word: this.state.value,

            });
        } else {
            this.setState({
                result: "",
                word: "",

            });

        }

    }

    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({value: e.target.value})
    }
    onRefInput = createRef<HTMLInputElement>();

    render() {
        return (
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input
                        ref={this.onRefInput}
                        value={this.state.value}
                        onChange={this.onChange}/>
                </form>
                <div>{this.state.result}</div>
            </>
        )
    }
}


export {WordRelayClass}