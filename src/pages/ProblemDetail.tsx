import { useParams } from "react-router"
import ReactMarkdown from "react-markdown";
import { useProblems } from "../lib/hooks/global";

function ProblemDetail() {
  const problems = useProblems();
  const { id } = useParams();
  const problemId = Number(id);
  const problem = problems.find((p) => p.id === problemId);

  let problemSolution = (<p>No solution available for this problem.</p>)

  if (problem && problem.solution) {
    problemSolution = (
      <>
        {problem.solution
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
          })}
      </>
    )
  }

  if (!problem) {
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
