import "./css/themeToggle.css";
import { useTheme } from "../../providers/themeProvider";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLightTheme = theme === "light";

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <div className="theme">
      <div className="theme_toggle_container">
        <span className="theme_label">🌙</span>

        <div
          className={`theme_toggle_wrapper ${isLightTheme ? "active" : ""}`}
          onClick={handleToggle}
        >
          <div
            className={`theme_toggle_circle ${isLightTheme ? "active" : ""}`}
          />
        </div>
        <span className="theme_label">☀️</span>
      </div>
    </div>
  );
}

export default ThemeToggle;
