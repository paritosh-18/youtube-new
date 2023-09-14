import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Header />
      <div className="flex p-2">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
