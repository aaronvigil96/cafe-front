import { Link } from "react-router";

const RegisterPage = () => {

    return(
        <form className="p-2 flex flex-col gap-2 justify-between h-full">
            <div>
                <label htmlFor="email" className="block text-xl font-bold">Email</label>
                <input id="email" type="text" className="border rounded-sm w-full h-10 pl-2" placeholder="test@example.com"/>
                <label htmlFor="password" className="block text-xl font-bold">Contraseña</label>
                <input id="password" type="password" className="border rounded-sm w-full h-10 pl-2" placeholder="*******"/>
                <label htmlFor="repassword" className="block text-xl font-bold">Repetí la contraseña</label>
                <input id="repassword" type="password" className="border rounded-sm w-full h-10 pl-2" placeholder="*******"/>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-lg">¿Ya tenes cuenta? <Link to={'/auth/login'} className="font-bold uppercase cursor-pointer">inicia sesión</Link></p>
                <button className="w-full bg-slate-600 py-3 text-xl rounded text-white font-semibold cursor-pointer">Crear</button>
            </div>
        </form>
    )
}

export default RegisterPage;