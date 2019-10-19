import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import users from "./users";
import "./styles.css";

function App() {
  const [user, setUser] = useState("guest");

  useEffect(() => {
    document.title = `Welcome ${user}!`;
  });

  return (
    <div>
      <select onChange={e => setUser(e.target.value)}>
        {users.map(user => (
          <option key={user.id} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>
      <p>user is {user}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
