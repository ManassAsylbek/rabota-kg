import React from 'react';
import AppRouter from "./router/AppRouter";
import Layout from "./components/Layout/Layout";

function App() {
    return (
        <Layout>
            <AppRouter/>
        </Layout>
    );
}

export default App;
