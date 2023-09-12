import { LeftSidebar } from "./components/leftSidebar/LeftSidebar";
import { Main } from "./components/main/Main";
import { RightSidebar } from "./components/rightSidebar/RightSidebar";

function App() {
  return (
    <div className="App">
      <RightSidebar />
      <Main />
      <LeftSidebar />
    </div>
  );
}

export default App;
