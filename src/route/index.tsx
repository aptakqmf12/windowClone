import { Route, Routes } from "react-router-dom";
import MyHome from "../pages/home";
import Signin from "@pages/signin";
import SignUp from "@pages/signup";
import Mypage from "@components/mypage";
import RequestCreateAccount from "@pages/reqCreateAccount";

const RouterComponents = () => {
  return (
    <Routes>
      <Route path="/" element={<MyHome />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/reqCreateAccount" element={<RequestCreateAccount />} />
    </Routes>
  );
};

export default RouterComponents;
