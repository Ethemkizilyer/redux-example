import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Card from "./pages/Card";
import Home from "./pages/Home";
import {store} from "./redux/index"


function App() {
//  localStorage.setItem("test", JSON.stringify(store)); 
  return (
    <>
      <Provider store={store}>
        <Header />
        <div className="h-12"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
