import { ChangeEventHandler } from "react";
import classNames from "classnames";
import Currency from "../../Types/Currency";
import classes from "./CurrencyItem.module.scss";

interface Props {
  currency: Currency;
  selected: boolean;
  className?: string;
  onChange: ChangeEventHandler;
  radioGroup: string;
}

export default function CurrencyItem({
  currency,
  selected,
  className,
  onChange,
}: Props) {
  return (
    <label className={classNames(className, classes.container)}>
      <input
        type="radio"
        onChange={onChange}
        checked={selected}
        className={classes.input}
      />
      <span className={classes.checkmark} />
      <img src={currency.flag} alt={currency.code} className={classes.flag} />
      <span className={classes.text}>{currency.code} - {currency.name}</span>
    </label>
  );
}
