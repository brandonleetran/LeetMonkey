import { useState, useEffect } from "react";
import { useParams } from "react-router"
import { Problem } from "../types";
import ReactMarkdown from "react-markdown";

function ProblemDetail() {

  const [problems, setProblems] = useState(() => {
    const cached = localStorage.getItem("problems");
    try {
      return cached ? JSON.parse(cached) : [];
    }
    catch (error) {
      console.error("Error parsing cached problems:", error);
      return [];
    }
  });

  useEffect(() => {
    if (problems.length) return;
    const getProblems = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch("/problems.json");
      const data = await response.json();
      setProblems(data);
      localStorage.setItem("problems", JSON.stringify(data));
    }

    getProblems();
  }, []);

  const params = useParams();

  if (!params.id) {
    return <div>Error: Problem ID is missing.</div>;
  }

  const problemId = parseInt(params.id);
  const problem = problems.find((problem: Problem) => problem.id === problemId);
  console.log("Problem:", problem);


  let problemSolution = (<p>No solution available for this problem.</p>);

  if (problems && problems.length && problem && problem.solution) {
    problemSolution = problem.solution
      .split("\n")
      .map((line: string, lineIndex: number) => {
        return (
          <div
            key={lineIndex}
            id={`line ${lineIndex}`}
            className="flex"
          >
            {line.length === 0 ? (
              <span>&nbsp;</span>
            ) : (
              line
                .split("")
                .map((char, charIndex) => (
                  <span key={charIndex}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))
            )}
          </div>
        );
      })
  }

  if (!problems.length || !problems) {
    return (
      <>
        <div className="space-y-4 mb-4">
          <div className="h-7 w-1/5 bg-gray-700 light:bg-black/10 rounded animate-pulse" />
          <div className="h-7 w-full bg-gray-700 light:bg-black/10 rounded animate-pulse" />
          <div className="h-7 w-full bg-gray-700  light:bg-black/10 rounded animate-pulse" />
          <div className="h-7 w-full bg-gray-700  light:bg-black/10 rounded animate-pulse" />
          <div className="h-7 w-1/3 bg-gray-700 light:bg-black/10 rounded animate-pulse" />
          <div className="h-7 w-1/3 bg-gray-700  light:bg-black/10 rounded animate-pulse" />
          <div className="h-7 w-1/3 bg-gray-700  light:bg-black/10 rounded animate-pulse" />
          <div className="h-7 w-full bg-gray-700  light:bg-black/10 rounded animate-pulse" />
          <div className="h-7 w-full bg-gray-700  light:bg-black/10 rounded animate-pulse" />
          <div className="h-7 w-full bg-gray-700 light:bg-black/10 rounded animate-pulse" />
          <div className="h-7 w-full bg-gray-700 light:bg-black/10 rounded animate-pulse" />
          <div className="h-7 w-full bg-gray-700 light:bg-black/10 rounded animate-pulse" />
          <div className="h-7 w-full bg-gray-700 light:bg-black/10 rounded animate-pulse" />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-8 md:gap:4 md:flex-row">
        <div className="md:max-w-[40%]">
          <h1 className="mb-4">
            <a
              href={problem.link}
              aria-label={problem.title}
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {problem.id + ". " + problem.title}
            </a>
          </h1>
          <ReactMarkdown>{problem.description}</ReactMarkdown>
          <h2 className="mb-2 mt-4">Example</h2>
          <p className="mb-2">
            Input: <code>{problem.examples.input}</code>
          </p>
          <p>
            Output: <code>{problem.examples.output}</code>
          </p>
        </div>
        <div className="md:w-full rounded-xl border border-white/10 light:border-black/10 bg-white/5 light:bg-black/5 backdrop-blur-sm p-4 overflow-auto">
          <div className="flex items-center gap-2 text-xs mb-8 text-gray-400">
            <span className="w-2 h-2 bg-red-400/80 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-400/80 rounded-full"></span>
            <span className="w-2 h-2 bg-green-400/80 rounded-full"></span>
            <span className="ml-2 text-gray-500">
              {problem.title.split(" ")}.cs
            </span>
          </div>
          <div className="font-mono leading-snug whitespace-pre tabular-nums text-sm md:text-base">
            {problemSolution}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProblemDetail;
