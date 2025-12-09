import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";

function CountryList({ countries, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }

  if (!countries || !countries.length) {
    return <Message message="No countries to display" />;
  }

  const myCountries = countries.reduce((arr, country) => {
    if (!arr.map((el) => el.country).includes(country.country))
      return [...arr, country];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
