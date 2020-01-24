import React, { useState } from 'react';
import { ConfirmInput } from './Styles';

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
                    <ConfirmInput type="button" confirm={true} value="Yes" onClick={ () => {
                        action();
                        toggleConfirm(false);
                    }} />
                    <ConfirmInput type="button" confirm={false} value="No" onClick={ () => toggleConfirm(false) } />
                </div>
            }
            
        </div>
    )
}

export default ConfirmBtn;
