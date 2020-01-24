import React, { useState } from 'react';
import './ConfirmBtn.css';

const ConfirmBtn = (props) => {
    const { action, buttonText } = props;

    const [confirming, setConfirming] = useState(false);

    function toggleConfirm(toggle) {
        setConfirming(toggle);
    }

    return (
        <div>
            {
                !confirming ?
                    <input type="button" id="btnMain" value={buttonText} onClick={ () => toggleConfirm(true) } />
                :
                <div>
                    <input type="button" className="confirm-yes" value="Yes" onClick={ () => {
                        action();
                        toggleConfirm(false);
                    }} />
                    <input type="button" className="confirm-no" value="No" onClick={ () => toggleConfirm(false) } />
                </div>
            }
            
        </div>
    )
}

export default ConfirmBtn;
