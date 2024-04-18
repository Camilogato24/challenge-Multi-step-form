import { stepslists } from '../helpers/steps';
import useStore from '../store/store';

const StepsList = () => {
  const { setStep, step } = useStore();

  return (
    <ul>
      {stepslists.map((steplist) => (
        <li key={steplist.number} onClick={() => setStep(step.number)}>
          <span className={steplist.number === step ? 'active' : ''}>{steplist.number}</span>
          <h3 className={step}>{steplist.title}</h3>
          <p>{steplist.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default StepsList;