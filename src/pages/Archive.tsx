import { NavLink } from "react-router-dom";

export default function Archives() {
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
      <div className="flex flex-col">
        <div className="p-4 rounded-lg bg-white/10 light:bg-black/5">
          <p className="font-bold mb-1">1. Two Sum</p>
          <p className="text-xs md:text-sm">2025-05-01</p>
        </div>
        <div className="p-4 rounded-lg">
          <p className="font-bold mb-1">2. Valid Palindrome</p>
          <p className="text-xs md:text-sm">2025-05-02</p>
        </div>
        <div className="p-4 rounded-lg bg-white/10 light:bg-black/5">
          <p className="font-bold mb-1">3. Valid Parenthesis</p>
          <p className="text-xs md:text-sm">2025-05-03</p>
        </div>
        <div className="p-4 rounded-lg">
          <p className="font-bold mb-1">4. Merge Two Sorted Lists</p>
          <p className="text-xs md:text-sm">2025-05-04</p>
        </div>
        <div className="p-4 rounded-lg bg-white/10 light:bg-black/5">
          <p className="font-bold mb-1">5. Remove Duplicates from Sorted Array</p>
          <p className="text-xs md:text-sm">2025-05-05</p>
        </div>
        <div className="p-4 rounded-lg">
          <p className="font-bold mb-1">6. Best Time to Buy and Sell Stock</p>
          <p className="text-xs md:text-sm">2025-05-06</p>
        </div>
        <div className="p-4 rounded-lg bg-white/10 light:bg-black/5">
          <p className="font-bold mb-1">7. Valid Anagram</p>
          <p className="text-xs md:text-sm">2025-05-07</p>
        </div>
        <div className="p-4 rounded-lg">
          <p className="font-bold mb-1">8. Binary Search</p>
          <p className="text-xs md:text-sm">2025-05-08</p>
        </div>
        <div className="p-4 rounded-lg bg-white/10 light:bg-black/5">
          <p className="font-bold mb-1">9. Contains Duplicate</p>
          <p className="text-xs md:text-sm">2025-05-09</p>
        </div>
        <div className="p-4 rounded-lg">
          <p className="font-bold mb-1">10. Maximum Subarray</p>
          <p className="text-xs md:text-sm">2025-05-10</p>
        </div>
      </div>
    </>
  );
}
