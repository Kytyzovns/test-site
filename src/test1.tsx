import React from 'react';

export const Test1 = () => {
    return (
        <div>

        </div>
    );
};

type PropsType = {
    city: string        // 'minsk'
    country: string     // 'belarus'
    coords?: string     // '53.917501,27.604851'
}
export const Wrapper1 = () => {
    return <PropsComponent1 city='minsk' country={'belarus'}/>
}
export const PropsComponent1: React.FC<PropsType> = (props) => {
    return <div>hello</div>
}