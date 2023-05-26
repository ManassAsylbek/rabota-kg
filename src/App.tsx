import React, {createContext, useState} from 'react';
import AppRouter from "./router/AppRouter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function App() {

    return (
        <>
            <Header/>
            <AppRouter/>
            <Footer/>
        </>
    );
}

export default App;
