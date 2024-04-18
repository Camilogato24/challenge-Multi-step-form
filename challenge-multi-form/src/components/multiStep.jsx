import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';
import StepFourth from './stepFourth';
import useStore from '../store/store';

const MultiStep = () => {
  const {step} = useStore();
  switch (step) {
    case 1:
      return <StepOne />;
    case 2:
      return <StepTwo />;
    case 3:
      return <StepThree />;
    case 4:
      return <StepFourth />;
    default:
      return `  Step ${step} not found`;
  }
};

export default MultiStep;
