import { StyledEngineProvider } from "@mui/material/styles";
import Categories from "./components/Categories";


const App = () => {
  return (
    <StyledEngineProvider>
      <Categories />
    </StyledEngineProvider>
  );
};
export default App;
