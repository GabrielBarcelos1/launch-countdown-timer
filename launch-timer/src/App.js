import './app.css'
import Timer from './components/timer/Timer'
function App() {
  return (
    <div className="app">
      <div className="subContainerTop">
        <p>
          WE´RE LAUNCHING SOON
        </p>
        <div className="containerDate">
          <Timer text="DAYS" propsNumber="5"/>
          <Timer text="HOURS" propsNumber="12"/>
          <Timer text="MINUTES" propsNumber="27"/>
          <Timer text="SECONDS" propsNumber="59"/>
        </div>
        
      </div>
      <div className="subContainerBottom">

      </div>
    </div>
  );
}

export default App;
