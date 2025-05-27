import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Problem } from "../types";

function Home() {
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
  const utcDate = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const todayStr = utcDate.toISOString().split("T")[0];
  let problemOfTheDay = problems.find((problem : Problem) => problem.date === todayStr) || null;
  
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
      <p className="mb-6">
        Output: <code>{problemOfTheDay.examples.output}</code>
      </p>
    </>
  );
}

export default Home;
