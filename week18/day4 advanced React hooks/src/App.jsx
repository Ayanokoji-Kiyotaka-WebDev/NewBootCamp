
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./index.css";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switcher">
      <button className="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className={`App`}>
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />

      </div>
    </ThemeProvider>
  );
}

export default App;
