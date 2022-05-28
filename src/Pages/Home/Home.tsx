import CurrencyList from "../../Components/CurrencyList/CurrencyList";
import { useTypedSelector } from "../../Redux/hooks";

import classes from "./Home.module.scss";

export default function Home() {
  const companyId = useTypedSelector((state) => state.user.user!.company);
  return (
    <div className={classes.container}>
      <CurrencyList companyId={companyId} />
    </div>
  );
}
