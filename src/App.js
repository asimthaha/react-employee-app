import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeAdd from "./components/EmployeeAdd";
import EmployeeSearch from "./components/EmployeeSearch";
import EmployeeDelete from "./components/EmployeeDelete";
import EmployeeView from "./components/EmployeeView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<EmployeeAdd />}></Route>
        <Route path="search" element={<EmployeeSearch />}></Route>
        <Route path="delete" element={<EmployeeDelete />}></Route>
        <Route path="view" element={<EmployeeView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
