import debounce from 'lodash.debounce';
import { useState, useEffect } from 'react';
import styles from './controlAutoComptete.module.css';
import { CountryInfo, getCountryByName } from '../../api/apiService';
import TextInput from '../TextInput/TextInput';
import CountryList from '../CountryList/CountryList';

interface ControlAutoCompteteProps {
  controlText: string;
  setControlText: (text: string) => void;
  hintsNumber: number;
}

const ControlAutoComptete = ({
  controlText,
  setControlText,
  hintsNumber,
}: ControlAutoCompteteProps) => {
  const [countries, setCountries] = useState<CountryInfo[]>([]);

  const getTargetCoutries = debounce(async (name: string) => {
    const targetCountries = await getCountryByName(name);
    setCountries(targetCountries);
  }, 500);

  useEffect(() => {
    getTargetCoutries(controlText);
  }, [controlText]);

  return (
    <div className={styles.control}>
      <TextInput value={controlText} onChange={setControlText} placeholder="Enter the text" />
      {countries.length !== 0 && (
        <CountryList countries={countries} hintsNumber={hintsNumber} onClick={setControlText} />
      )}
    </div>
  );
};

export default ControlAutoComptete;
