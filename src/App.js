import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NewAnimalPage from "./pages/newAnimalPage/NewAnimalPage";
import GetData from "./api/get/GetData";
import PostData from "./api/post/PostData";
import PieChart from "./components/chart/PieChart";
import MainChart from "./components/chart/MainChart";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewAnimalPage />} />
          <Route path="/get" element={<GetData />} />
          <Route path="/post" element={<PostData />} />
          <Route path="/edit/:id" element={<NewAnimalPage />} />
          <Route path="/chat" element={<PieChart />} />
          <Route path="/mainchat" element={<MainChart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
