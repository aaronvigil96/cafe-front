import useEmblaCarousel from "embla-carousel-react";
import CarrouselProduct from "../components/CarrouselProduct";
import PromoItem from "../components/PromoItem";
import { ProductItemProps } from "../interfaces/product-item.interface";
import Autoplay from "embla-carousel-autoplay";

const slides:ProductItemProps[] = [
    {
        name: 'café argentino'
    },
    {
        name: 'café boliviano'
    },
    {
        name: 'café brasilero'
    },
    {
        name: 'café guatemalteco'
    }
]

const HomePage = () => {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({delay: 3000})]);

    return(
        <div className="flex flex-col gap-4">
            <div className="h-screen bg-[url(cafe-home.jpg)] bg-bottom bg-cover bg-no-repeat flex">
                <div className="md:basis-1/2 h-full flex justify-center items-center">
                    <div className="pl-5 pb-10">
                        <h2 className="text-4xl font-thin text-white">tu café preferido</h2>
                        <h1 className="text-6xl font-bold text-white">Siempre cerca tuyo</h1>
                        <p className="text-white">espresso, barista y mucho más.</p>
                        <button className="cursor-pointer p-2 border uppercase font-bold text-white rounded-sm max-w-max">Encontranos</button>
                    </div>
                </div>
            </div>
            <div className="max-w-max mx-auto">
                    <h2 className="text-center font-black text-4xl">NUESTROS PRODUCTOS</h2>
                    <hr className="text-amber-300"/>
                </div>
            <div className="max-w-5xl w-full embla mx-auto" ref={emblaRef}>
                <CarrouselProduct slides={slides}/>
            </div>
            <div className="max-w-5xl mx-auto w-full my-2">
                <div className="mx-auto w-full flex flex-wrap md:flex-nowrap gap-2">
                    <PromoItem bg="/cafetera-banner.jpg" subtitle="las cafeteras" title="la versatilidad de las cafeteras"/>
                    <PromoItem bg="/cafe-banner.jpg" subtitle="secretos del café" title="hacé los mejores cafés"/>
                </div>
            </div>
            <div className="bg-slate-200">
                <div className="max-w-5xl mx-auto p-4 sm:p-2 rounded-sm">
                    <h3 className="font-bold text-5xl mb-2">Servicio personalizado</h3>
                    <p className="font-thin">
                        Sabemos lo frustrante que es querer disfrutar de un buen café en la oficina y no encontrar una opción que realmente te guste. Por eso, hemos creado una suscripción semanal para que recibas café de calidad todos los días hábiles, directo en la puerta de tu oficina. Sin complicaciones, siempre fresco y listo para disfrutar. ¡Suscribite y hacé que tus mañanas sean mejores!
                    </p>
                    <p>
                        👉 Diferentes variedades cada semana
                    </p>
                    <p>
                        👉 Granos seleccionados y frescos
                    </p>
                    <p>
                        👉 Entrega sin interrupciones, directamente en tu oficina
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;