import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NewAnimalPage from "./pages/newAnimalPage/NewAnimalPage";
import GetData from "./api/get/GetData";
import PieChart from "./components/chart/PieChart";
import MainChart from "./components/chart/MainChart";
import Login from "./components/Login/Login";
import SignUp from "./components/signUp/SignUp";
import Forget from "./components/forgetpassword/Forget";
import UserProfile from "./components/userProfile/UserProfile";
import PasswordInput from "./utilities/passwordinput/PasswordInput";
import ProfilePage from "./pages/profilePage/ProfilePage";
import GetSignInApi from "./api/signInApis/GetSignInApi";
import GetNav from "./api/GetNavApi/GetNav";

function App() {
  return (
    <div className="App">
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route path="/sumit-ridge-app" element={<Login />} />
          <Route path="/sumit-ridge-app/home" element={<Home />} />
          <Route path="/sumit-ridge-app/new" element={<NewAnimalPage />} />
          <Route path="/get" element={<GetData />} />
          <Route path="/edit/:id" element={<NewAnimalPage />} />
          <Route path="/chat" element={<PieChart />} />
          <Route path="/mainchat" element={<MainChart />} />
          <Route path="/sumit-ridge-app/signup" element={<SignUp />} />
          <Route path="/sumit-ridge-app/forget" element={<Forget />} />
          <Route path="/sumit-ridge-app/june" element={<GetSignInApi />} />
          <Route
            path="/sumit-ridge-app/input-utility"
            element={<PasswordInput />}
          />
          <Route path="/sumit-ridge-app/update" element={<UserProfile />} />
          <Route
            path="/sumit-ridge-app/profile-page"
            element={<ProfilePage />}
          />
          <Route path="/sumit-ridge-app/gets" element={<GetNav />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
