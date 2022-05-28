import classNames from "classnames";
import { FieldRenderProps } from "react-final-form";

import classes from "./Checkbox.module.scss";

interface Props extends FieldRenderProps<string> {
  label: string;
  className: string;
}

export default function Checkbox({ input, label, className }: Props) {
  return (
    <label className={classNames(className, classes.container)}>
      {label}
      <input
        {...input}
        className={classNames(input.className, classes.input)}
      />
      <span className={classes.checkmark}></span>
    </label>
  );
}
