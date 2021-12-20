import React from "react";

interface IProps {
    checked: String[],
    selected: string,
    slide: number,
    input: string,
    switch: boolean
}

function Result(props:IProps) {
    return(
        <div style={{width:'50%', float:'right'}}>
            <h2>checkbox多选：</h2>
            <p>{props.checked.forEach.toString}</p>
            <h2>select多选框：</h2>
            <p>{props.selected}</p>
            <h2>slide进度条（可拖动）：</h2>
            <p>{props.slide}</p>
            <h2>input输入后可清除：</h2>
            <p>{props.input}</p>
            <h2>switch开关：</h2>
            <p>{props.switch}</p>
        </div>
    );
}

export default Result;
