import logo from "./logo.svg";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { A } from "./A";
import { B } from "./B";
import { M } from "./M";

function App() {
  return (
    <BrowserRouter className="App">
      <Route path="/a" exact component={A} />
      <Route path="/b" exact component={B} />
      <Route path="/" component={M} />
    </BrowserRouter>
  );
}

export default App;
