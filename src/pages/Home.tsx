import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Problem } from "../lib/types/global";

function Home() {
  const [problems, setProblems] = useState(() => {
    const cached = localStorage.getItem("problems");
    try {
      return cached ? JSON.parse(cached) : [];
    } catch (error) {
      console.error("Error parsing cached problems:", error);
      return [];
    }
  });

  useEffect(() => {
    // if problems is not empty, then that means it's from the cache
    if (problems.length) return;

    const getProblems = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch("/problems.json");
      const data = await response.json();
      setProblems(data);
      localStorage.setItem("problems", JSON.stringify(data));
    };

    getProblems();
  }, []);

  const now = new Date();
  const utcDate = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );
  const todayStr = utcDate.toISOString().split("T")[0];
  let problemOfTheDay =
    problems.find((problem: Problem) => problem.date === todayStr) ||
    problems[0];

  if (!problemOfTheDay) {
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
              href={problemOfTheDay.link}
              aria-label={problemOfTheDay.title}
              className="hover:underline"
            >
              {problemOfTheDay.id + ". " + problemOfTheDay.title}
            </a>
          </h1>
          <ReactMarkdown>{problemOfTheDay.description}</ReactMarkdown>
          <h2 className="mb-2 mt-4">Example</h2>
          <p className="mb-2">
            Input: <code>{problemOfTheDay.examples.input}</code>
          </p>
          <p>
            Output: <code>{problemOfTheDay.examples.output}</code>
          </p>
        </div>
        <div className="md:w-full rounded-xl border border-white/10 light:border-black/10 bg-white/5 light:bg-black/5 backdrop-blur-sm p-4 overflow-auto">
          <div className="flex items-center gap-2 text-xs mb-8 text-gray-400">
            <span className="w-2 h-2 bg-red-400/80 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-400/80 rounded-full"></span>
            <span className="w-2 h-2 bg-green-400/80 rounded-full"></span>
            <span className="ml-2 text-gray-500">
              {problemOfTheDay.title.split(" ")}.cs
            </span>
          </div>
          <div className="font-mono text-sm leading-snug whitespace-pre tabular-nums text-sm md:text-base">
            {problemOfTheDay.solution
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
