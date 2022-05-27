import { TypedUseSelectorHook, useSelector } from "react-redux";
import store from "./store";

const useTypedSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export {
  useTypedSelector as useSelector,
}
