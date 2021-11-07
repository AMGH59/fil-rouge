import Login from "./Login"
import Signin from "./Signin"

export default function SignInForm() {
    return ( 
        <div>
        <h2 className="p-2">Connexion</h2>
            <div className="disp-flex justify-content-center ">
                <div className="p-5 border-top border-bottom border-dark">
                <Signin></Signin>
                </div>
                
                <div className="p-5 border-top border-bottom border-dark">
                <Login></Login>
                </div>
            </div>
            </div>
    )

}