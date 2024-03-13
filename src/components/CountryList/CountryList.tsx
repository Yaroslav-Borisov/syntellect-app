import { CountryInfo } from '../../api/apiService';
import styles from './countryList.module.css';

export interface CountryListProps {
  countries: CountryInfo[];
  hintsNumber: number;
  onClick: (country: string) => void;
}

const CountryList = ({ countries, hintsNumber, onClick }: CountryListProps) => (
  <ul className={styles.countries__list}>
    {Array.from(new Set(countries))
      .slice(0, hintsNumber)
      .map((country, index) => (
        <li
          className={styles.countries__item}
          onClick={() => onClick(`${country.name}, ${country.fullName}`)}
          key={`country-${index}`}
        >
          <span>
            {country.name}, {country.fullName}
          </span>
          <img src={country.flag} width={60} height={20} alt={`flag-${country.name}`} />
        </li>
      ))}
  </ul>
);

export default CountryList;
