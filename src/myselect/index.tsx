import React from "react";

interface IPropsSelect {
    getSelected: (str: string) => void;
}

class MSelect extends React.Component<IPropsSelect> {
    state = {
        options: ["apple", "orange", "banana"],
        selected: ""
    }

    choose = () => {
        let myselect = document.getElementById("sl");
        let index = myselect?.ariaSelected
        this.setState({selectd: index});
        console.log(this.state.selected);
        this.props.getSelected(this.state.selected)
    }

    handleLimit(event: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({
            selected: event.target.value
        })
        console.log(this.state.selected)
        this.props.getSelected(this.state.selected)
    }

    getValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value)
        this.setState({
            options: ["apple", "orange", "banana"],
            selected: event.target.value
        })
        this.props.getSelected(event.target.value)
    }

    render() {
        return(
            <div>
                <h2>select选择框:</h2>
                <select name="fruit" id="sl" onChange={(e) => this.getValue(e)}>
                    {
                        this.state.options.map((ele, index)=> {
                            return(
                                <option key={index}>{ele}</option>
                            )
                        })
                    }
                </select>
            </div>
        )
    }
  }

export default MSelect;