import { createContext } from 'react';
import { ProblemContextType } from '../types/global';
import { useState } from 'react';

export const ProblemContext = createContext<ProblemContextType | null>(null);

function ProblemContextProvider({ children }: { children: React.ReactNode }) {
    const [problems, setProblems] = useState(() => {
        try {
        const cached = localStorage.getItem("problems");
        return cached ? JSON.parse(cached) : [];
        }
        catch (error) {
        console.error("Error parsing cached problems:", error);
        return [];
        }
    });

    return (<ProblemContext.Provider value={{ problems, setProblems }}>
        {children}
    </ProblemContext.Provider>);
}

export default ProblemContextProvider;