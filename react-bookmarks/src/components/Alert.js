import React, { useRef } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { useContext } from "react";
import {CSSTransition} from 'react-transition-group';

export const Alert = () => {
    const {alert, hide}  = useContext(AlertContext);
    const nodeRef = useRef(null);

    // if (!alert.visible) {
    //     return null
    // }
    return (
        <CSSTransition
            in={alert.visible}
            nodeRef={nodeRef}
            timeout={{
                enter: 500,
                exit: 350
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible fade show role="alert"`}>
                <strong>Внимание!</strong>
                {alert.text}
                <button onClick={hide} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Закрыть"></button>
            </div>
        </CSSTransition>
    )
}