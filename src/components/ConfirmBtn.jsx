import React, { Component } from 'react';
import { connect } from 'react-redux'
import actionCreators from '../store/actionCreators';
import './ConfirmBtn.css';

class ConfirmBtn extends Component {
    state = {
        confirming: false
    };

    toggleConfirm = toggle => {
        this.setState({ confirming: toggle });
    }

    render = () => {
        return (
            <div>
                {
                    !this.state.confirming ?
                        <input type="button" value={this.props.buttonText} onClick={ () => this.toggleConfirm(true) } />
                    :
                    <div>
                        <input type="button" className="confirm-yes" value="Yes" onClick={ () => {
                            this.props.action();
                            this.toggleConfirm(false);
                        }} />
                        <input type="button" className="confirm-no" value="No" onClick={ () => this.toggleConfirm(false) } />
                    </div>
                }
                
            </div>
        )
    }
}

export default ConfirmBtn;
