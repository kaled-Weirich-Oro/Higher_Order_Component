import React from 'react';
import Wrapper from './hoc/loading';

function Main() {
    return (
        <h1>Teste Hight Order Component</h1>
    )
}
export default Wrapper(Main);