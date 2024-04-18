import StepsList from "./components/stepList";
import MultiStep from "./components/multiStep";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <aside>
          <StepsList /> 
        </aside>
        <section> 
          <MultiStep />
        </section>
      </main>
    </>
  );
}

export default App;
