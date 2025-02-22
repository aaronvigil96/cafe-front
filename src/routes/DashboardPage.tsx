import { Outlet } from "react-router";
import NavBarDashboard from "../components/NavBarDashboard";

const DashboardPage = () => {
    return(
        <div className="h-screen w-full bg-slate-950 flex gap-2">
            <NavBarDashboard/>
            <div className="bg-slate-950 w-full h-full rounded p-2">
                <Outlet/>
            </div>
        </div>
    )
}

export default DashboardPage;