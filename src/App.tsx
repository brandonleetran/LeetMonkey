import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <div>
        <h1 className="text-2xl font-bold mb-4">1. Two Sum</h1>
        <p className="mb-4">
          Given an array of integers <code>nums</code> and an integer{" "}
          <code>target</code>, return indices of the two numbers such that they
          add up to <code>target</code>. You may assume that each input would
          have exactly one solution, and you may not use the same element twice.
          You can return the answer in any order.
        </p>
        <p className="font-bold mb-2">Example</p>
        <code className="mb-3 inline-block">
          Input: nums = [2,7,11,15], target = 9
        </code>
        <br />
        <code className="inline-block">Output: [0,1]</code>
        <br />
      </div>
      <div className="p-10 bg-slate-800 rounded text-black my-10 h-[500px]"></div>
    </Layout>
  );
}

export default App;
