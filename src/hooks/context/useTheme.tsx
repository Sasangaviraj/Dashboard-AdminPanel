import { useContext } from "react";
import { ThemeContext } from "../../context/theme";

const useUiTheme = () => {
  return useContext(ThemeContext);
};

export default useUiTheme;
