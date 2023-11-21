import React from 'react';
import {routes} from './services/routes';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./component/Header";
import Footer from "./component/Footer";
import {Box} from "@mui/material";
/*----------------------------------*/
function App() {
    return (
        <Box className="App">
            <Header/>
            <BrowserRouter>
                <Routes>
                    {routes.map(route => (
                        <Route key={route.key} Component={route.component} path={route.path}/>
                    ))}
                </Routes>
            </BrowserRouter>
            <Footer/>
        </Box>
    );
}

export default App;
