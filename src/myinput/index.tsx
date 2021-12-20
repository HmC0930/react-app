import React from 'react';

interface IPropsInput {
    getInput: (str: string) => void;
}

class MyInput extends React.Component<IPropsInput> {
    constructor(props: IPropsInput) {
        super(props);
    }
    state = {
        inputValue : "",
        isEmpty: true
    }
    inputChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inputValue: e.target.value,
            isEmpty: (e.target.value === "")
        });
        this.props.getInput(e.target.value)
        console.log(e.target.value)
    }
    clearInput=() => {
        this.setState({
            inputValue: "",
            isEmpty: true
        });
        this.props.getInput("")
        document.getElementById("mInput")?.focus();
    }
    render() {
        return (
            <div>
                <h2>input输入后可以清除:</h2>
                <input id="mInput" value={this.state.inputValue}  onChange={(e) => this.inputChange(e)}/>
                {!(this.state.isEmpty)?
                <button onClick={this.clearInput}>Clear</button>:<div/>
                }
            </div>
        )
    }
  }

export default MyInput;