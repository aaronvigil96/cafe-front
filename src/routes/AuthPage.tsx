import { Outlet } from "react-router"
import NavItem from "../components/NavItem";

const AuthPage = () => {
    return(
        <div className="max-w-5xl mx-auto my-4">
            <h2 className="text-2xl text-center">Cuenta</h2>
            <div className="flex justify-center gap-2 text-xl font-bold">
                <NavItem location="/auth/login" name="iniciar sesión"/>
                <NavItem location="/auth/register" name="registro"/>
            </div>
            <div className="w-80 h-80 mx-auto shadow">
                <Outlet/>
            </div>
        </div>
    )
}

export default AuthPage;