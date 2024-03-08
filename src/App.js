//import logo from './logo.svg';
import "./App.css";
import ListBooks from "./components/ListBooks";
//import Header from "./components/Header";
import Navbar from "./components/Navbar";
//import TextForm from "./components/TextForm";
//import Menu from "./components/Menu";
import Signup from "./components/Signup";
import Login from "./components/Login";
//import Card from './components/Card';
function App() {
  return (
    <div className="app">
      <ListBooks />
      <h1 className="text-underline text-[10rem]">TEST TESTE</h1>
      <Navbar />
      <Login />
      <Signup />
    </div>
  );
}
export default App;
