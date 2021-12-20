import { throwStatement } from '@babel/types';
import React, { useCallback, useState, useRef, useEffect } from 'react';
import './myswitch.scss';
interface IPropsSwitch {
    checked: boolean
    onChange: (e: React.ChangeEvent) => void;
    checkedColor?: string;
}

class MySwitch extends React.Component<IPropsSwitch> {
    constructor(props: IPropsSwitch) {
        super(props);
    }

    state = {
        isOn: true
    }


    render() {
    return (
      <div>
          <h2>switch开关：</h2>
      <div className={'self-ui-switch'}>
        <input
          id = {'switch-input'}
          checked={this.props.checked}
          onChange={(e) => this.props.onChange(e)}
          className={'self-ui-switch-input'}
          type="checkbox"
        />
        <label
          htmlFor = "switch-input"
          style={{ backgroundColor: this.props.checked ? this.props.checkedColor : undefined }}
          className={'self-ui-switch-label'}
        >
          <span className={'self-ui-switch-button'}/>
        </label>
      </div>
      </div>
    );
    }
}

export default MySwitch;