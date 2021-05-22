import "./App.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h2 className="title">We're all mad here</h2>
        </header>
        <main>
          <section className="search">
            <SearchEngine />
          </section>
        </main>
        <footer>
          <div class="code-link">
            <p>
              <a
                href="https://github.com/WinglessNomad/dictionary-project"
                class="cl"
                rel="noopener y
              noreferrer"
                target="_blank"
              >
                Open-source code
              </a>{" "}
              for{" "}
              <a
                href="https://www.shecodes.io/"
                class="cl"
                rel="noopener noreferrer"
                target="_blank"
              >
                SheCodes{" "}
              </a>
              hosted on{" "}
              <a
                href="https://www.netlify.com/"
                class="cl"
                rel="noopener noreferrer"
                target="_blank"
              >
                Netlify{" "}
              </a>
              by Nina B
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
