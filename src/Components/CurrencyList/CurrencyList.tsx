import classNames from "classnames";
import { useEffect, useMemo, useState } from "react";
import RequestGroup from "../../Apis/RequestGroup";
import useApi from "../../Apis/useApi";
import CurrencyItem from "../CurrencyItem/CurrencyItem";
import SearchIcon from "../Icons/SearchIcon";
import classes from "./CurrencyList.module.scss";

interface Props {
  companyId: number;
  className?: string;
}

export default function CurrencyList({ className, companyId }: Props) {
  const requestGroup = useMemo(() => new RequestGroup(), []);
  const currenciesPromise = useMemo(
    () => {
      requestGroup.cancelAndReuse("unmounting or companyId changed");
      return requestGroup.getCurrencyList(companyId)
    },
    [requestGroup, companyId]
  );
  const { data, loading } = useApi(currenciesPromise);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setSelectedIndex(0);
  }, [requestGroup, companyId]);

  return (
    <div className={classNames(className, classes.container)}>
      <div className={classes.searchWrapper}>
        <SearchIcon className={classes.searchIcon} />
        <input
          type="text"
          value={searchText}
          onChange={(ev) => {
            setSearchText(ev.target.value);
          }}
          placeholder="Search"
          className={classes.searchInput}
        />
      </div>
      <div className={classes.list}>
        {loading && <div className={classes.loading}>loading...</div>}
        {data
          ?.filter((currency) =>
            currency.name.toLowerCase().includes(searchText.toLocaleLowerCase())
          )
          .map((currency, index) => (
            <CurrencyItem
              key={currency.id}
              radioGroup="currencies"
              currency={currency}
              selected={index === selectedIndex}
              onChange={() => {
                setSelectedIndex(index);
              }}
            />
          ))}
      </div>
    </div>
  );
}
