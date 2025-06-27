import AuthProvider from "./context/auth";
import UiThemeProvider from "./context/theme";
import RootRouter from "./router/root-router";

const App = () => {
  return (
    <UiThemeProvider>
      <AuthProvider>
        <RootRouter />
      </AuthProvider>
    </UiThemeProvider>
  );
};

export default App;
