import { Link } from "react-router";

const Footer = () => {
    return(
        <footer className="bg-black p-2 w-full">
            <div className="max-w-5xl mx-auto">
                <div className="text-white mb-2">
                    <h3 className="text-3xl">CafeList</h3>
                </div>
                <nav className="flex flex-wrap sm:gap-5">
                    <div className="text-white basis-1/2 sm:basis-0">
                        <h3 className="uppercase font-bold text-stone-300">Contenidos</h3>
                        <ul className="flex flex-col gap-2 max-w-max">
                            <Link to={'/'}>
                                <li className="capitalize font-thin text-slate-400 cursor-pointer hover:text-white">inicio</li>
                            </Link>
                            <Link to={'/product'}>
                                <li className="capitalize font-thin text-slate-400 cursor-pointer hover:text-white">tienda</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="text-white">
                        <h3 className="uppercase font-bold text-stone-300">necesitas ayuda</h3>
                        <ul className="flex flex-col gap-2 max-w-max">
                            <li className="capitalize font-thin text-slate-400 cursor-pointer hover:text-white">tutorial</li>
                            <li className="capitalize font-thin text-slate-400 cursor-pointer hover:text-white">trabaja con nosotros</li>
                            <li className="capitalize font-thin text-slate-400 cursor-pointer hover:text-white">contacto</li>
                        </ul>
                    </div>
                    <div className="pr-4 basis-full md:basis-1/3">
                        <h3 className="text-center text-stone-300 font-bold uppercase mb-2">Suscribite a nuestro newsletter</h3>
                        <div className="flex">
                            <input type="text" className="border text-white w-full border-stone-200"/>
                            <button className="uppercase bg-stone-300 p-2 cursor-pointer">suscribirme</button>
                        </div>
                </div>
                </nav>
            </div>
            <blockquote className="font-thin text-sm text-center text-white mt-2">
                <p>©Copyright 2025 CafeList - Todos los derechos reservados.</p>
                <p>Sitio desarrollado y mantenido por Aaron Vigil</p>
                </blockquote>
        </footer>
    )
}

export default Footer;