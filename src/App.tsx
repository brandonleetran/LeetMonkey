import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Reference from "./pages/Reference";
import ProblemDetail from "./pages/ProblemDetail";
import ProblemContext from "./lib/contexts/ProblemContext";

function App() {
  return (
    <ProblemContext>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Reference />} />
            <Route path="/problems/:id" element={<ProblemDetail />} />
          </Routes>
        </Layout>
      </Router>
    </ProblemContext>
  );
}

export default App;
