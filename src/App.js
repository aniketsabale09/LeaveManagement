import "./App.css";
import Main from "./Components/Main";
import LoginContextProvider from "./Context/LoginContext";

import Routings from "./Routing/Routings";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "blanchedalmond" }}>
      <LoginContextProvider>
        {/* <Main /> */}
        <Routings />
      </LoginContextProvider>
    </div>
  );
}

export default App;
