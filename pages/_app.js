import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import Store from "../stores";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
