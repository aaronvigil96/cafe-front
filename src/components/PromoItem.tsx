import { PromoItemProps } from "../interfaces/promo-item.interface";

const PromoItem = ({bg, subtitle, title}:PromoItemProps) => {
    return(
        <div style={{ backgroundImage: `url(${bg})` }} className={`h-56 w-full mx-2 bg-slate-600 bg-cover bg-top z-10`}>
            <div className="p-2 flex flex-col">
                <p className="bg-white text-black font-thin max-w-max p-2">{title}</p>
                <h3 className="text-3xl uppercase font-bold text-white">{subtitle}</h3>
                <button className="bg-black max-w-max text-white p-2 cursor-pointer uppercase">ver más</button>
            </div>
        </div>
    )
}

export default PromoItem;