import ReactDOM from "react-dom";
import "./css/main.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { setConfigureStore } from "./store/store";
import { HashRouter } from "react-router-dom";

const store = setConfigureStore();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
