import { getByPlaceholderText } from '@testing-library/react';
import React, {MouseEvent} from 'react';

interface IPropsSlide {
    getProgress: (progress: number) => void;
}

class MySlider extends React.Component<IPropsSlide> {
    constructor(props: IPropsSlide) {
        super(props);
    }

    state = {
        progress: 0
    }
    
   

    slide = (ev: MouseEvent<HTMLDivElement>) => {
        let scroll = document.getElementById('scroll')!;
        let bar = document.getElementById('bar')!;
        let mask = document.getElementById('mask')!;
        let barleft = 0;
       
        bar.onmousemove = (ev) => {
            let event = ev || window.event;
            let leftVal = event.clientX - bar.offsetLeft!
            let that = bar;
            let eventInner = event || window.event;
            barleft = event.clientX - leftVal;
            if (barleft < 0) {
                barleft = 0;
            } else if (barleft > scroll.offsetWidth) {
                barleft = scroll.offsetWidth
            }
            mask.style.width = barleft + 'px';
            that.style.left = barleft + 'px';

            

            let prog = barleft/(scroll.offsetWidth-bar.offsetWidth)*100 
            console.log(prog);
            this.setState ({
                progress: prog
            })
        }
    }

    render() {
        return (
            <div>
                <h2>slide进度条（可拖动）：</h2>
                <div className="scroll" id="scroll">
                    <div className="bar" id="bar" onMouseDown={(e)=>this.slide(e)}>
                    <div className="mask" id="mask"></div>
                </div>
                </div>
                
            </div>
        );
    }
}

export default MySlider;