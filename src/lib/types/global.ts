export type Theme = "dark" | "light" | "system";

export type Problem = {
  id: number;
  title: string;
  link: string;
  description: string;
  examples: {
    input: string;
    output: string;
  };
  date: string;
  solution: string;
  difficulty: "Easy" | "Medium" | "Hard";
};

export type ProblemContextType = {
  problems: Problem[];
  setProblems: React.Dispatch<React.SetStateAction<Problem[]>>;
}

export type AboutProps = {
    isOpen: boolean;
    onClose: () => void;
  };

export type LayoutProps = {
    children: React.ReactNode;
}

export type HeaderProps = {
    onOpen: () => void;
    theme: Theme;
    isDark: boolean;
    setTheme: (theme: Theme) => void;
};