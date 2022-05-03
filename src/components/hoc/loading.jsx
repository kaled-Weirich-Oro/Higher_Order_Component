import React from "react";

function Wrapper(Component) {
    return class extends React.Component {
        // eslint-disable-next-line no-useless-constructor
        constructor(props) {
            super(props);
        }
        render() {
            return (
                this.props.loadprop === false ? <div >Carregando</div> : <Component {...this.props}/>
            )
        }
    }
}
export default  Wrapper;