import { Link } from "react-router";

const LoginPage = () => {
    return(
        <form className="p-2 flex flex-col gap-2 justify-between h-full">
            <div>
                <label htmlFor="email" className="block text-xl font-bold">Email</label>
                <input id="email" type="text" className="border rounded-sm w-full h-10 pl-2" placeholder="test@example.com"/>
                <label htmlFor="password" className="block text-xl font-bold">Contraseña</label>
                <input id="password" type="password" className="border rounded-sm w-full h-10 pl-2" placeholder="*******"/>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-lg">¿No tenes cuenta? <Link to={'/auth/register'} className="font-bold uppercase cursor-pointer">registrate</Link></p>
                <button className="w-full bg-slate-600 py-3 text-xl rounded text-white font-semibold cursor-pointer">Iniciar sesión</button>
            </div>
        </form>
    )
}

export default LoginPage;