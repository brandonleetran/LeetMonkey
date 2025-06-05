import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Reference from "./pages/Reference";
import ProblemDetail from "./pages/ProblemDetail";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Reference />} />
          <Route path="/problems/:id" element={<ProblemDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
