import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { PureComponent } from "react"
import Home from '../views/Home'
import Singin from '../views/Singin'
import HomeBanner from "./HomeBanner"
import UserBanner from "./UserBanner"
import User from '../views/User'
import Error from "../views/Error"
import '../styles/Banner.css'
import { connect } from "react-redux"
import Topics from "../views/Topics"
import { Redirect } from "react-router-dom"




export class Banner extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Router>

                    {this.props.user.isLogged ? <UserBanner /> : <HomeBanner />}

                    <Switch>
                        <Route path="/user">
                            {this.props.user.isLogged ? <User /> : <Redirect to='/' />}
                        </Route>
                        <Route path="/topics">
                            {this.props.user.isLogged ? <Topics /> : <Redirect to='/' />}
                        </Route>
                        <Route path="/singin">
                            {this.props.user.isLogged ? <Redirect to='/topics' /> : <Singin />}
                        </Route>
                        <Route exact path="/">
                            {this.props.user.isLogged ? <Redirect to='/topics' /> : <Home />}
                        </Route>
                        <Route>
                            <Error/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

const mapsStateToProps = (state) => {
    return {
        user: state.user
    }
}
// const mapsActionToProps = (dispatch) =>{
//     return(
//         getLogged:dispatch()
//     )
// }

export default connect(mapsStateToProps, null)(Banner)