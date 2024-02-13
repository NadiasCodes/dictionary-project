import Dictionary from "./Dictionary.js";
import "./App.css";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h2>
            <img
              src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/115/264/original/Designed_by_Nadia_Bouli_%281%29.png?1707846758"
              className="img-fluid image-header"
              alt="header"
            ></img>
          </h2>
        </header>

        <main>
          <Dictionary defaultKeyword="Aesthetic" className="main-word" />
        </main>
        <footer className="App-footer">
          <p>
            This project coded by <span className="coder">Nadia Bouli</span>
          </p>
          <div>
            It is open sourced on{" "}
            <a href="https://github.com/NadiasCodes/dictionary-project">
              GitHub
            </a>{" "}
            & hosted on{" "}
            <a href="https://dictionary-project-olive.vercel.app/">Vercel</a>{" "}
          </div>
        </footer>
      </div>
    </div>
  );
}
