// import { LeftMenu} from "./components/leftMenu/LeftMenu";
import { Main } from "./components/main/Main";
import { RightMenu } from "./components/rightMenu/RightMenu";
import LeftMenu from './components/leftMenu/LeftMenu';
import AppStyle from "./App.css"

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <Main />
      <RightMenu />
    </div>
  );
}

export default App;
