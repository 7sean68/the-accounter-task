import classNames from "classnames";
import { FieldRenderProps } from "react-final-form";

import classes from "./TextField.module.scss";

interface Props extends FieldRenderProps<string> {
  label: string;
  className: string;
}

export default function TextField({
  meta: { touched, error },
  input,
  label,
  className,
}: Props) {
  return (
    <div className={classNames(className, classes.container)}>
      <div className={classes.labelWrapper}>
        <label htmlFor={input.name} className={classes.label}>
          {label}
        </label>
        {Boolean(touched && error) && (
          <span className={classes.error}>{error}</span>
        )}
      </div>
      <input
        {...input}
        className={classNames(input.className, classes.input)}
      />
    </div>
  );
}
