import "./App.css";
import { LandingPage } from "./components/LandingPage/landingPage";
import { LogIn } from "./components/LogIn/logIn";
import { Register } from "./components/Register/register";



export const App = () => {
  return (
  <>
    <LandingPage />
    <Register />
    <LogIn />
  </>
  )
};
export default App;