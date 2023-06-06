
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Vacancies from "../pages/Vacancies";
import {routerType} from "interfaces";



const pagesData: routerType[] = [
    {
        path: "",
        title: "home",
        element: <Home/>
    },
    {
        path: "/vacancies",
        element: <Vacancies/>,
        title: "vacancies"
    },
    {
        path: "/vacancies/:params",
        element: <Vacancies/>,
        title: "vacancies"
    },
];

const AppRouter = () => {
    const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });

    return <Routes>{pageRoutes}</Routes>;
};
export default AppRouter;
