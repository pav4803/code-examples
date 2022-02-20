import ReactDOM from "react-dom";
import "./css/main.css";
import App from "./components/app";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { setConfigureStore } from "./store/store";

const store = setConfigureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
