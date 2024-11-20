import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NewAnimalPage from "./pages/newAnimalPage/NewAnimalPage";
import GetData from "./api/get/GetData";
import PostData from "./api/post/PostData";
// import PutData from "./api/put/PutData";
// import NewComp from "./components/newAnimal/NewComp";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
