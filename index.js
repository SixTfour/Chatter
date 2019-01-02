import React from 'react';
import store from "./src/store";
import { Provider } from "react-redux";
import App from "./src/App";
import { registerRootComponent } from "expo";

export class Index extends React.Component {
    render() {
        return ( 
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}

registerRootComponent(Index);