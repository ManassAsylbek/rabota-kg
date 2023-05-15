
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import {routerType} from "../interfaces/routerType";



const pagesData: routerType[] = [
    {
        path: "",
        element: <Home />,
        title: "home"
    },
];

const AppRouter = () => {
    const pageRoutes = pagesData.map(({ path, title, element }: routerType) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });

    return <Routes>{pageRoutes}</Routes>;
};
export default AppRouter;
