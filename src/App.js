/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */
import "./App.css";
import InsertTODO from "./InsertTODO";
import TODOList from "./TODOList";

function App() {
  return (
    <div>
      <InsertTODO />
      <TODOList />
    </div>
  );
}

export default App;
