import { NavLink } from "react-router-dom";
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

  let problemOfTheDay = problems.find((problem: { date: string; }) => problem.date === new Date().toISOString().split("T")[0] || null)

  if (!problemOfTheDay) {
    setProblemOfTheDayFallback();
  }

  function setProblemOfTheDayFallback() {
  // Start date is May 1st, 2025 00:00:00 UTC
    if (problems.length) {
      const utcDate = Date.UTC(2025, 4, 1, 0, 0, 0, 0);

      // Get the current date in UTC
      const date = new Date();
      const utcToday = Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate()
      );

      // Calculate the difference in days
      const MS_PER_DAY = 24 * 60 * 60 * 1000;
      const differenceInDays = (utcToday - utcDate) / MS_PER_DAY;

      // Get the index of the problem of the day
      const index = Math.floor(differenceInDays) % problems.length;

      problemOfTheDay = problems[index];
    }
  }

  let completedProblems: Problem[] = [];
  const stored = localStorage.getItem("completedProblems");
  if (stored) {
    try {
      completedProblems = JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse completedProblems:", e);
    }
  } else {
    localStorage.setItem("completedProblems", JSON.stringify([]));
  }

  if (!problemOfTheDay) {
    return (
      <>
        <div className="flex items-center gap-2 mb-4">
          <NavLink to="/" aria-label="Back to Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 md:size-6 hover:text-white transition-all duration-200 cursor-pointer light:hover:text-black/50 rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </NavLink>
          <h1 className="text-center">LeetMonkey Archives</h1>
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
              Track your daily typing challenges and bananas earned - Brandon
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
        <NavLink to="/" aria-label="Back to Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5 md:size-6 hover:text-white transition-all duration-200 cursor-pointer light:hover:text-black/50 rotate-180"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </NavLink>
        <h1 className="text-center">LeetMonkey Archives</h1>
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
          <span role="tooltip" className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-max max-w-[200px] p-2 border-white/40 light:border-black/10 rounded glassy text-xs border hidden group-hover:block duration-200 z-10 whitespace-normal text-wrap break-words">
            Problems are updated every day and dates are displayed in UTC datetime. There will be more future updates to this page - Brandon
          </span>
        </button>
      </div>
      <ul className="flex flex-col">
        {problems.map((problem: Problem, index: number) => {
          const today = new Date();
          const problemDate = new Date(problem.date);
          const isCompleted = completedProblems.some(
            (completed) => completed.id === problem.id
          ) && problemDate < today; 
          const isProblemOfTheDay = problem.id === problemOfTheDay.id;
          const isMissedProblem = problemDate < today && !isCompleted;
          const isFutureProblem = problemDate > today;
          let statusIcon = null;

          if (isCompleted) {
            statusIcon = (<span className="h-3 w-3 bg-green-500 rounded-full" title="Completed"></span>)
          }
          else if (isProblemOfTheDay && !isCompleted) {
            statusIcon = (<span className="h-3 w-3 bg-yellow-500 rounded-full" title="In Progress"></span>)
          }
          else if (isFutureProblem) {
            statusIcon = (<span className="h-3 w-3 bg-gray-500 rounded-full" title="Upcoming"></span>)
          }
          else if (isMissedProblem) {
            statusIcon = (<span className="h-3 w-3 bg-red-500 rounded-full" title="Missed"></span>)
          }

          return (
            <li key={problem.id} className={`flex justify-between align-center p-4 rounded-lg ${index % 2 === 0 ? "bg-white/10 light:bg-black/5" : ""}`}>
              <div>
                <p className="font-bold mb-1">{problem.id + ". " + problem.title}</p>
                <p className="text-xs md:text-sm">{problem.date}</p>
              </div>
              <div className="flex items-center">
                {statusIcon}
              </div>
            </li>
          )
        })}
      </ul >
    </>
  );
}
