import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Problem } from "../types.ts";

export default function Archives() {
  const [problems, setProblems] = useState(() => {
    const cached = localStorage.getItem("problems");
    return cached ? JSON.parse(cached) : [];
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

  // let completedProblems: Problem[] = [];
  // const stored = localStorage.getItem("completedProblems");
  // if (stored) {
  //   try {
  //     completedProblems = JSON.parse(stored);
  //   } catch (e) {
  //     console.error("Failed to parse completedProblems:", e);
  //   }
  // } else {
  //   localStorage.setItem("completedProblems", JSON.stringify([]));
  // }

  if (problems.length) {
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
          let problemStatus = null;
          let difficultyIcon = null;

          if (problem.date === null) {
            problemStatus = <p className="italic text-sm">Not completed</p>;
          } else {
            problemStatus = problem.date;
          }

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
              className={`flex justify-between align-center p-4 rounded-lg ${
                index % 2 === 0 ? "bg-white/10 light:bg-black/5" : ""
              }`}
            >
              <div>
                <Link to={`/problems/${problem.id}`}>
                  <p className="font-bold mb-1 hover:underline">
                    {problem.id + ". " + problem.title}
                  </p>
                </Link>
                <p className="text-xs md:text-sm">{problemStatus}</p>
              </div>
              <div className="flex items-center">{difficultyIcon}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
