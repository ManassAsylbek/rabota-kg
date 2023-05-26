import React, {FC} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface ILayout {
    children: React.ReactNode,
}

const Layout: FC<ILayout> = ({children}) => {
    return (
        <>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </>
    );
};

export default Layout;