import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>External App</h1>
        <iframe width="1400" height="800" src='https://builder.io/login/oidc/mira-walter'></iframe>
      </header>
    </div>
  );
}

export default App;
