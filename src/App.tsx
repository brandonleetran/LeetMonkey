import Layout from "./components/Layout";
import { useState, useEffect } from "react";

function App() {
  const [problems, setProblems] = useState(() => {
    const cached = localStorage.getItem("problems");
    return cached ? JSON.parse(cached) : [];
  });

  const [problemOfTheDay, setProblemOfTheDay] = useState(() => {
    const cached = localStorage.getItem("problemOfTheDay");
    return cached ? JSON.parse(cached) : null;
  });

  useEffect(() => {
    const getProblems = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const response = await fetch("/problems.json");
      const data = await response.json();
      setProblems(data);
      localStorage.setItem("problems", JSON.stringify(data));
    }
    
    // if problems is not empty, then that means it's from the cache
    if (!problems.length) {
      getProblems();
    }
  },[])

  useEffect(() => {
    const getProblemOfTheDay = () => {
      setProblemOfTheDay(problems[1]);
      localStorage.setItem("problemOfTheDay", JSON.stringify(problems[1]));
    }

    // if problem is not null, then that means it's from the cache
    if (problems.length && !problemOfTheDay) {
      getProblemOfTheDay();
    }
  }, [problems])

  if (!problemOfTheDay) {
    return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold mb-4">
          <div className="h-7 w-1/5 bg-gray-700 rounded animate-pulse" />
        </h1>
        <p className="mb-4">
          <div className="space-y-4">
          <div className="h-6 w-full bg-gray-700 rounded animate-pulse" />
          <div className="h-6 w-full bg-gray-700 rounded animate-pulse" />
          <div className="h-6 w-full bg-gray-700 rounded animate-pulse" />
      </div>
        </p>
        <p className="font-bold space-y-4">Example</p>
        <p className="flex items-center gap-2 mb-2">Input: <span className="h-5 w-1/3 bg-gray-700 rounded animate-pulse inline-block" /></p>
        <p className="flex items-center gap-2">Output: <span className="h-5 w-1/3 bg-gray-700 rounded animate-pulse inline-block" /></p>
      </div>
      <div className="p-10 bg-slate-800 rounded text-black my-10 h-[500px]"></div>
    </Layout>
  )}

  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold mb-4">{problemOfTheDay.title}</h1>
        <p className="mb-4">
          Given an array of integers <code>nums</code> and an integer{" "}
          <code>target</code>, return indices of the two numbers such that they
          add up to <code>target</code>. You may assume that each input would
          have exactly one solution, and you may not use the same element twice.
          You can return the answer in any order.
        </p>
        <p className="font-bold mb-2">Example</p>
        <p className="mb-2">Input: <code>{problemOfTheDay.examples.input}</code></p>
        <p>Output: <code>{problemOfTheDay.examples.output}</code></p>
        <br />
      </div>
    </Layout>
  );
}

export default App;
