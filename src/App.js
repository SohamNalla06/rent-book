//import logo from './logo.svg';
//import Header from "./components/Header";
//import TextForm from "./components/TextForm";
//import Menu from "./components/Menu";
//import Signup from "./components/Signup";
//import Card from './components/Card';
//import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
//import { app } from "./firebase";
import "./App.css";
import NoPage from "./components/NoPage";
import Home from "./components/Home";
import Login from "./components/Login";
import { useRoutes } from "react-router-dom";

//const auth = getAuth(app);
function App() {
  //   const SignupUser = () => {
  //     createUserWithEmailAndPassword(
  //       auth,
  //       "sohamhi06@gmail.com",
  //       "soham@0622"
  //     ).then((value) => console.log(value));
  //   };
  // return (
  //   <div className="app">
  //     <Navbar />
  //     <ListBooks />
  //   </div>
  // );
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "login", element: <Login /> },
    { path: "*", element: <NoPage /> },
  ]);

  return routes;
}
export default App;
