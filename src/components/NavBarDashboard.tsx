import { AiFillHome } from "react-icons/ai";
import { IoArrowBack, IoCartSharp } from "react-icons/io5";
import { RiBillFill } from "react-icons/ri";
import { Link } from "react-router";

type ItemNavBarDashboardProps = {
    icon: React.ElementType;
    url: string;
    iconStyle?: React.CSSProperties;
    containerIconStyle?: React.CSSProperties;
}

const ItemNavBarDashboard = ({icon: Icon, url, iconStyle, containerIconStyle}:ItemNavBarDashboardProps) => {
    return (
        <Link to={url}>
            <div style={containerIconStyle} className="bg-slate-950 h-16 w-16 my-2 flex items-center rounded-3xl justify-center group hover:bg-green-700 hover:rounded-xl transition-all duration-300 ease-linear cursor-pointer">
                <Icon style={iconStyle} className="text-green-700 text-3xl group-hover:text-white transition-colors duration-300 ease-in-out" />
            </div>
        </Link>
    )
}


const NavBarDashboard = () => {

    return(
        <nav className={`h-full w-28 bg-[#14213d] flex flex-col justify-between items-center py-4`}>
            <div className="flex flex-col gap-1">
                <ItemNavBarDashboard icon={AiFillHome} url="/dashboard"/>
                <ItemNavBarDashboard icon={IoCartSharp} url="/dashboard/product"/>
                <ItemNavBarDashboard icon={RiBillFill} url="/dashboard/order"/>
            </div>
            <ItemNavBarDashboard icon={IoArrowBack} url="/" iconStyle={{color:'red'}} containerIconStyle={{backgroundColor: '#E5E5E5'}}/>
        </nav>
    )
}

export default NavBarDashboard;