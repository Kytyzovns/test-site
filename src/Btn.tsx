import React from 'react';

type buttonProps = {
    callback?: () => void;
    name?: string;
}

export const Btn = (props: buttonProps) => {
    return (
        <button onClick={props.callback}>
            {props.name}
        </button>
    );
};

