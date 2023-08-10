import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Auth from "./api/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("User");
  const [token, setToken] = useState("");

  const handleClose = () => {
    setEmail("");
    setPassword("");
    setName("");
    setPhoneNumber("");
    setRole("");
  };
  const handleSubmit = () => {
    const data = {
      email,
      password,
      name,
      phoneNumber: parseInt(phoneNumber),
      role,
    };
    Auth.signup({ data: data }).then((res) => {
      if (res.status === 201) {
        handleClose();
      } else {
        console.log("error");
      }
    });
  };

  const handleLogin = () => {
    const data = {
      email,
      password,
    };
    Auth.login({ data: data }).then((res) => {
      if (res.status === 200) {
        handleClose();
        setToken(res.data.token);
      } else {
        console.log("error");
      }
    });
  };

  console.log(token);

  return (
    <div>
      {token}
      <input
        type='text'
        placeholder='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='phone-number'
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <input
        type='text'
        placeholder='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option>Admin</option>
        <option>User</option>
      </select>

      <button onClick={handleSubmit}>Submit</button>

      <div>
        <input
          type='text'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default App;
