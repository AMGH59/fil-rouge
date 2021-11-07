import { PureComponent } from "react";
import { connect } from "react-redux";

export class Main extends PureComponent{
    constructor(props){
        super(props)
    }

    render(){
        
    }

}

const MapStateToProps = (state) => {
    return{
        isLogged:this.state.isLogged
    }
}

export default connect(MapStateToProps,null)(Main)