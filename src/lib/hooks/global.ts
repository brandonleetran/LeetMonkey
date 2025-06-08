import { useContext } from "react";
import { ProblemContext } from "../contexts/ProblemContext";

export function useProblemContext() {
  const context = useContext(ProblemContext);
  if (!context) {
    throw new Error("ProblemContext is not provided");
  }
  return context;
}