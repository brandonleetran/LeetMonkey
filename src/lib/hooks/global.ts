import { useContext, useEffect } from "react";
import { ProblemContext } from "../contexts/ProblemContext";

function useProblemContext() {
    const context = useContext(ProblemContext);
    if (!context) {
        throw new Error("ProblemContext is not provided");
    }
    return context;
}

export function useProblems() {
    const { problems, setProblems } = useProblemContext();

    useEffect(() => {
        if (problems.length) return;

        async function fetchProblems() {
            await new Promise((resolve) => setTimeout(resolve, 1000));

            try {
                const response = await fetch("/problems.json");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setProblems(data);
                localStorage.setItem("problems", JSON.stringify(data));
            } catch (error) {
                console.error("Failed to fetch problems:", error);
            }
        }

        fetchProblems();
    }, [])

    return problems;
}