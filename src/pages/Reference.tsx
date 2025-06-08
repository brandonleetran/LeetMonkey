import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Problem } from "../lib/types/global.ts";
import { useProblemContext } from "../lib/hooks/global.ts";

function Reference() {
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

  if (!problems.length) {
    return (
      <>
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-center">LeetSharp Reference</h1>
          <button
            className="block relative group"
            aria-label="More Information"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 hover:text-white light:hover:text-black/50 transition-all duration-200 cursor-pointer ease-in-out"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-max max-w-[200px] p-2 border-white/40 light:border-black/10 rounded glassy text-xs border hidden group-hover:block duration-200 z-10 whitespace-normal text-wrap break-words">
              A catalog of LeetCode problems solved in C# by me. - Brandon
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <div className="h-20 w-full bg-gray-700 light:bg-black/10 rounded animate-pulse" />
          <div className="h-20 w-full bg-gray-700 light:bg-black/10 rounded animate-pulse" />
          <div className="h-20 w-full bg-gray-700 light:bg-black/10 rounded animate-pulse" />
          <div className="h-20 w-full bg-gray-700 light:bg-black/10 rounded animate-pulse" />
          <div className="h-20 w-full bg-gray-700 light:bg-black/10 rounded animate-pulse" />
          <div className="h-20 w-full bg-gray-700 light:bg-black/10 rounded animate-pulse" />
          <div className="h-20 w-full bg-gray-700 light:bg-black/10 rounded animate-pulse" />
          <div className="h-20 w-full bg-gray-700 light:bg-black/10 rounded animate-pulse" />
          <div className="h-20 w-full bg-gray-700 light:bg-black/10 rounded animate-pulse" />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-center">LeetSharp Reference</h1>
        <button className="block relative group" aria-label="More Information">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5 hover:text-white light:hover:text-black/50 transition-all duration-200 cursor-pointer ease-in-out"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clipRule="evenodd"
            />
          </svg>
          <span
            role="tooltip"
            className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-max max-w-[200px] p-2 border-white/40 light:border-black/10 rounded glassy text-xs border hidden group-hover:block duration-200 z-10 whitespace-normal text-wrap break-words"
          >
            A catalog of LeetCode problems solved in C# by me. - Brandon
          </span>
        </button>
      </div>
      <ul className="flex flex-col">
        {problems.map((problem: Problem, index: number) => {
          let difficultyIcon = null;

          if (problem.difficulty === "Easy") {
            difficultyIcon = (
              <span
                className="h-3 w-3 bg-green-500/80 rounded-full"
                title="Easy"
              ></span>
            );
          } else if (problem.difficulty === "Medium") {
            difficultyIcon = (
              <span
                className="h-3 w-3 bg-orange-500/80 rounded-full"
                title="Medium"
              ></span>
            );
          } else if (problem.difficulty === "Hard") {
            difficultyIcon = (
              <span
                className="h-3 w-3 bg-red-500/80 rounded-full"
                title="Hard"
              ></span>
            );
          }

          return (
            <li
              key={problem.id}
              className={`flex justify-between align-center p-4 rounded-lg ${index % 2 === 0 ? "bg-white/10 light:bg-black/5" : ""
                }`}
            >
              <div>
                <Link to={`/problems/${problem.id}`}>
                  <p className="font-bold mb-1 hover:underline">
                    {problem.id + ". " + problem.title}
                  </p>
                </Link>
                <p className="italic text-xs md:text-sm">Not completed</p>
              </div>
              <div className="flex items-center">{difficultyIcon}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Reference;
