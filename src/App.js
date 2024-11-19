import ScrollToTop from "./ScrollTop";
import WebRoutes from "./webRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <WebRoutes />
    </Router>
  );
}

export default App;
