import { useContext } from 'react';
import './App.css';
import Center from './Components/Center/Center';
import LeftMenu from './Components/LeftMenu/LeftMenu';
import { ThemeContext } from './Context/ThemeContext';

const getStyle = (theme) =>
  theme === "light" ?
    {
      backgroundColor: "#F2F2F2",
      color: "black"
    }
    :
    {
      backgroundColor: "#1F2327",
      color: "white"
    }

const getBlackStyle = (theme) =>
  theme === "light" ?
    {
      backgroundColor: "#FFFFFF",
      color: "black"
    }
    :
    {
      backgroundColor: "#16191C",
      color: "white"
    }

const getMiddleStyle = (theme) =>
  theme === "light" ?
    {
      backgroundColor: "#FFFFFF",
      color: "black"
    }
    :
    {
      backgroundColor: "#292E33",
      color: "white"
    }

export default function App() {

  const value = useContext(ThemeContext)
  // const { theme, toggleMode } = value
  const { theme } = value


  const style = getStyle(theme)


  return (
    <div style={style} className="App">
      {/* <h2>Theme: {theme}</h2>
      <button onClick={toggleMode}>change</button> */}
      <LeftMenu style={getBlackStyle(theme)} />
      <Center style={getMiddleStyle(theme)} />
    </div>
  );
}
