import { throws } from 'assert';
import React from 'react';

interface IPropsCheck {
    getChecked: (checked: string) => void;
}

class CheckboxList extends React.Component<IPropsCheck> {
    constructor(props: IPropsCheck) {
        super(props);
    }

    state = {
        checked: [false, false, false]
    }

    
    setItem = (num: number) => {
        this.state.checked[num] = !(this.state.checked[num])
        let res = ""
        let value = ["语文", "数学", "英语"]
        for (let i = 0; i < 3; i++) {
            if(this.state.checked[i]) { 
                res += value[i]
            }
        }
        console.log(res)
        this.props.getChecked(res)
    }

    render() {
        return (
            <div className="checkboxList">
            <h2>checkbox多选:</h2>
            <p>
            <input type="checkbox" id="cbox1" value="first_checkbox" onClick={()=>this.setItem(0)}></input>
            <label htmlFor="cbox1">语文</label>
            </p>
            <p>
            <input type="checkbox" id="cbox2" value="second_checkbox" onClick={()=>this.setItem(1)}></input>
            <label htmlFor="cbox2">数学</label>
            </p>
            <p>
            <input type="checkbox" id="cbox3" value="third_checkbox" onClick={()=>this.setItem(2)}></input>
            <label htmlFor="cbox2">英语</label>
            </p>
            </div>
        )
    }
  }

export default CheckboxList;