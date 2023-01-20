import logo from "./logo.svg";
import { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  useEffect(() => {
    let json = {};
    json["body"] = {
      MessageBody: "sendFromVScode",
    };
    async function getSQS() {
      let res = await fetch(
        "https://ep5ze1krj8.execute-api.ap-southeast-1.amazonaws.com/directgetfromsqs"
      );
      console.log(res);
    }

    async function sendSQS() {
      let random = Math.ceil(Math.random() * 10);
      try {
        let res = await axios.put(
          "https://ep5ze1krj8.execute-api.ap-southeast-1.amazonaws.com/directputtosqs",
          { MessageBody: "send from VScode" + random }
        );
        console.log(res);
      } catch (error) {
        console.log("error" + error);
      }
    }
    getSQS();
    sendSQS();
    setInterval(function () {
      sendSQS();
    }, 300000);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
