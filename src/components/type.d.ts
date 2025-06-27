import type { ChangeEventHandler } from "react";

export type TUiInput = {
  value?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
