import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme";
/*--------------------Store--------------------*/
import {Provider} from "react-redux";
import {setupStore} from './store/store';
const store = setupStore();
/*--------------------Store--------------------*/
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
);

