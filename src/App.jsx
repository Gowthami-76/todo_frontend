// App.jsx

import { Route, Routes } from "react-router-dom";
import Authenticate from "./components/Authenticate";
import Home from "./components/Home";
import ProtectedRoutes from "./utils/ProtectedRoute";
import TodoModal from "./components/TodoModal";
import { useSelector } from "react-redux";
import TodoTable from "./components/TodoTable";
const App = () => {
  const userData = useSelector((state) => state.isAuthUser);

  useSelector((state) => console.log(state));
  console.log(userData, "userData.............");
  return (
    <Routes>
      <Route path="/" element={<Authenticate />} />
      {/* <Route element={<ProtectedRoutes userData={userData} />}> */}
      <Route path="/home" element={<Home />} />
      <Route path="/Todo" element={<TodoModal />} />
      <Route path="/TodoList" element={<TodoTable />} />
      {/* </Route> */}
    </Routes>
  );
};

export default App;
