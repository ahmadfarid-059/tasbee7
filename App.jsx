import { Provider } from "react-redux";
import { createStore } from "redux";
import Navigation from "./src/Navigation";

import reducer from "./src/store/reducers";
const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
