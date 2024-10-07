import './App.css';
import {BrowserRouter} from "react-router-dom";
import PagesTitle from "./components/PagesTitle";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";

const App = observer(() => {

  return (
    <BrowserRouter>

      <PagesTitle />

      <AppRouter />

    </BrowserRouter>
  );
});

export default App;
