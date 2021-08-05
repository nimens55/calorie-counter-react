import './App.css';
import Сalculator from './components/Сalculator/Сalculator';
import Result from './components/Result/Result';

function App() {
  return (
    <div className="container">
      <article className="counter">
        <h1 className="counter__heading heading-main">
          Счётчик калорий
        </h1>
        <Сalculator />
        <Result />
      </article>
    </div>
  );
}

export default App;