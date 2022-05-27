import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store from "./store";

export const useTypedSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;

export const useTypedDispatch = () => useDispatch<typeof store.dispatch>();
