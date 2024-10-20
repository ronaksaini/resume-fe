import Navbar from "./components/Navbar";
import ResumeTemplates from "./components/ResumeTemplates";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FormComponent from "./components/FormComponent";
import FormPage from "./pages/FormPage";
import Template1 from "./templates/template1";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume-templates" element={<ResumeTemplates />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/template" element={<Template1/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />

      </Routes>
    </>
  );
};

export default App;
