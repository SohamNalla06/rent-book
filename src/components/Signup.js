import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useState } from "react";
const auth = getAuth(app);
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("suucess")
    );
  };
  return (
    <div>
      <label>email</label>
      <input
        placeholder="Enter Email"
        on
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
      ></input>
      <label>Password</label>
      <input
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      ></input>
      <button onClick={createUser}>Signup</button>
    </div>
  );
};
export default Signup;
