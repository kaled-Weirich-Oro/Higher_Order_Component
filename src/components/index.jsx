import React, {useState, useEffect} from 'react';
import Main from './Main';

function Index() {
    const [load, setLoad] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoad(true);
        },2000);
        
    },[]);
    return (
        <Main loadprop={load}/>
    )
};

export default Index;