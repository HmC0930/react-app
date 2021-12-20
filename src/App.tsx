import React, { useCallback, useState } from 'react';
import CheckboxList from './mycheckboxlist';
import MySelect from './myselect';
import MySwitch from './myswitch';
import MyInput from './myinput';
import MySlider from './myslider';
import './App.css';

function App() {
  const [ checked, setChecked ] = useState("");
  const [ selected, setSelected ] = useState("");
  const [ slideValue, setSlideValue ] = useState(0);
  const [ inputText, setInputText ] = useState("");
  const [ isOn, setIsOn ] = useState(false);
  const [ showResult, setShowResult] = useState('none');

  function handleClick() {
    setShowResult('block')
  }

  let check = (checked: string) => {
    setChecked(checked)
  }

  let input = (str: string) => {
    setInputText(str)
  }
  
  let select = (str: string) => {
    setSelected(str)
  }
  
  let slide = (num: number) => {
    setSlideValue(num)
  }

  return (
    <div>
      <div style={{width:'50%', float:'left'}}>
        <CheckboxList getChecked={check}/>
        <MySelect getSelected={select}/>
        <MySlider getProgress={slide}/>
        <MyInput getInput={input}/>
        <MySwitch checked={isOn} onChange={() => setIsOn(!isOn)}/>
        <button onClick={handleClick}>提交</button>
      </div>
      
      <div className={showResult? 'hidden' : ''} style={{width:'50%', float:'right', display: showResult}} >
      <h2>checkbox多选：</h2>
            <p>{checked}</p>
            <h2>select多选框：</h2>
            <p>{selected}</p>
            <h2>slide进度条（可拖动）：</h2>
            <p>{slide}</p>
            <h2>input输入后可清除：</h2>
            <p>{inputText}</p>
            <h2>switch开关：</h2>
            <p>{isOn? "true":"false"}</p>
      </div>
    </div>
);
}

export default App;





