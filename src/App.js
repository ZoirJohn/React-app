import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/redux";

import Header from "./container_components/HeaderContainer";
import Main from "./components/Main";

import "./css/App.css";

const App = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="wrapper">
                    <Header />
                    <Main />
                </div>
            </Provider>
        </BrowserRouter>
    );
};

export default App;
