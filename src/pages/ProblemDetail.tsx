import { useEffect } from "react";
import { useParams } from "react-router"
import { Problem } from "../lib/types/global";
import ReactMarkdown from "react-markdown";
import { useProblemContext } from "../lib/hooks/global";

function ProblemDetail() {
  const { problems, setProblems } = useProblemContext();

  useEffect(() => {
    // if problems is not empty, then that means it's from the cache
    if (problems.length) return;

    async function getProblems() {
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
        // TODO: set an error state here to display an error message
      };
    }

      getProblems();
    }, []);

  const params = useParams();

  if (!params.id) {
    return <div>Error: Problem ID is missing.</div>;
  }

  const problemId = parseInt(params.id);
  const problem = problems.find((problem: Problem) => problem.id === problemId);

  // TODO: Handle case where problem is not found
  if (!problem) {
    return <div>404: Problem not found.</div>;
  }

  let problemSolution;

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
          <div className="h-5 w-1/4 bg-gray-700 light:bg-black/10 rounded animate-pulse" />
          <div className="h-5 w-full bg-gray-700 light:bg-black/10 rounded animate-pulse" />
          <div className="h-5 w-full bg-gray-700  light:bg-black/10 rounded animate-pulse" />
          <div className="h-5 w-full bg-gray-700  light:bg-black/10 rounded animate-pulse" />
          <div className="h-5 w-1/4 bg-gray-700 light:bg-black/10 rounded animate-pulse" />
          <div className="h-5 w-1/4 bg-gray-700  light:bg-black/10 rounded animate-pulse" />
          <div className="h-5 w-1/4 bg-gray-700  light:bg-black/10 rounded animate-pulse" />
          <div className="h-100 w-full bg-gray-700  light:bg-black/10 rounded animate-pulse" />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-8 md:gap:4 md:flex-row">
        <div className="md:max-w-[40%]">
          <div className="flex justify-between items-center">
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
            <div>
              <button>
                Mark as Reviewed
              </button>
            </div>
          </div>
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
