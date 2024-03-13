import './App.css';
import ControlButtons from './components/ControlButtons/ControlButtons';
import { checkNumber } from './utils/utils';
import ControlAutoComptete from './components/ControlAutoComptete/ControlAutoComptete';
import controlStore from './store/control-store';
import { observer } from 'mobx-react-lite';

const App = observer((): JSX.Element => {
  const {
    firstControlText,
    secondControlText,
    thirdControlText,
    fourthControlText,
    setFirstControlText,
    setSecondControlText,
    setThirdControlText,
    setFourthControlText,
  } = controlStore;

  const firstControlRightButtons = [
    { buttonText: 'Clean', buttonClickHandler: () => setFirstControlText('') },
    { buttonText: 'SayHi', buttonClickHandler: () => setFirstControlText('Hello world!') },
  ];

  const secondControlRightButtons = [
    { buttonText: 'AlertText', buttonClickHandler: () => alert(secondControlText) },
  ];

  const secondControlLeftButtons = [
    { buttonText: 'CheckNumber', buttonClickHandler: () => checkNumber(secondControlText) },
  ];

  return (
    <>
      <div className={'container'}>
        <h2>Контрол с кнопками</h2>
        <ControlButtons
          controlText={firstControlText}
          setControlText={setFirstControlText}
          rightButtons={firstControlRightButtons}
        />
        <ControlButtons
          controlText={secondControlText}
          setControlText={setSecondControlText}
          rightButtons={secondControlRightButtons}
          leftButtons={secondControlLeftButtons}
        />
      </div>
      <div className={'container'}>
        <h2>Контрол-автокомплит</h2>
        <div className={'control__wrapper'}>
          <span className={'control__hint'}>3:</span>
          <ControlAutoComptete
            controlText={thirdControlText}
            setControlText={setThirdControlText}
            hintsNumber={3}
          />
        </div>
        <div className={'control__wrapper'}>
          <span className={'control__hint'}>10:</span>
          <ControlAutoComptete
            controlText={fourthControlText}
            setControlText={setFourthControlText}
            hintsNumber={10}
          />
        </div>
      </div>
    </>
  );
});

export default App;
