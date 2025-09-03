import AddTask from "./components/AddTask";
import BasicTable from "./components/Tasks";

import { Provider } from "react-redux";
import { store } from "./app/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <h1>Basic Redux Todo App</h1>
        <AddTask />
        <BasicTable />
      </Provider>
    </>
  );
}

export default App;
