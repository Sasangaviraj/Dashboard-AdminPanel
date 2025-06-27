import type { FC } from "react";
import type { TUiInput } from "./type";

const UiInput: FC<TUiInput> = ({ value, placeholder, onChange }) => {
  return <input value={value} placeholder={placeholder} onChange={onChange} />;
};

export default UiInput;
