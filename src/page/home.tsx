import UiInput from "../components/ui-input";
import { Theme } from "../context/theme";
import useAuth from "../hooks/context/useAuth";
import useUiTheme from "../hooks/context/useTheme";

const Home = () => {
  const { authInfor } = useAuth();
  const { T } = useUiTheme();
  console.log(T);

  return (
    <div>
      <UiInput
        placeholder="your name"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <h1 className={`${T ? "text-gray-900" : "text-gray-400"}`}>hi</h1>
    </div>
  );
};

export default Home;
