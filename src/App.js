import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import MyCourses from "./components/my-courses/MyCourses";
import Quiz from "./components/quiz/quiz.component";
import SignupForm from "./components/signup/SignupForm";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/courses" element={<CourseHome />} />
          <Route exact path="/my_courses" element={<MyCourses />} />
          <Route exact path="/quiz/:id" element={<Quiz />} />
          <Route exact path="/signup" element={<SignupForm />} />
        </Routes>
      </div>{" "}
    </BrowserRouter>
  );
}

export default App;
