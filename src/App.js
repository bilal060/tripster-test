import "./Assests/Css/App.css";
import AppLayout from "./Components/AppLayout";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <AppLayout>
        <Home />
      </AppLayout>
    </div>
  );
}

export default App;
