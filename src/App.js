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
import Spinner from "./components/Spinner";
function App() {
  return (
    <div className="app">
      <ListBooks />
      <Navbar />
      <Login />
      <Signup />
      <Spinner />
    </div>
  );
}
export default App;
