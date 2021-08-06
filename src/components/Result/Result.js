
import './Result.css';
import { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

const Result = () => {
  const {globalState} = useContext(GlobalContext);

  return (
    <section className={globalState.isResult ? "counter__result" : "counter__result counter__result--hidden"}>
      <h2 className="heading">Ваша норма калорий</h2>
      <ul className="counter__result-list">
        <li className="counter__result-item">
          <h3><span id="calories-norm">{globalState.result.retention}</span> ккал</h3>
          <p>поддержание веса</p>
        </li>
        <li className="counter__result-item">
          <h3><span id="calories-minimal">{globalState.result.increase}</span> ккал</h3>
          <p>снижение веса</p>
        </li>
        <li className="counter__result-item">
          <h3><span id="calories-maximal">{globalState.result.decrease}</span> ккал</h3>
          <p>набор веса</p>
        </li>
      </ul>
    </section>
  )
}

export default Result;