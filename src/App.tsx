import "./App.css";
import Application from "./components/application/application";
import Skills from "./components/skills/skills";
import Counter from "./components/counter/counter";
import CounterTwo from "./components/counter-two/counter-two";
import AppProviders from "./providers/app-providers";
import MuiMode from "./components/mui/mui-mode";
import Users from "./components/users/users";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Application />
        <Skills skills={["HTML", "CSS", "JavaScript"]} />
        <Counter />
        <CounterTwo count={666} />
        <Users />
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
