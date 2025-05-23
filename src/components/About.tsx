import { AboutProps } from "../types";

function About({ isOpen, onClose }: AboutProps) {
  if (isOpen === false) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 px-6">
      <div className="glassy border border-white rounded-2xl p-5 max-w-lg w-full z-50">
        <h2 className="text-center mb-4 text-white font-bold">
          About LeetMonkey
        </h2>
        <p>
          LeetMonkey is a speed-typing playground for coding problems inspired
          by{" "}
          <a
            className="underline underline-offset-3 hover:text-white transition-all duration-200 cursor-pointer"
            href="https://leetcode.com/"
          >
            LeetCode
          </a>{" "}
          and{" "}
          <a
            className="underline underline-offset-3 hover:text-white transition-all duration-200 cursor-pointer"
            href="https://monkeytype.com"
          >
            MonkeyType
          </a>
          . Every solution is personally written and solved by me.
        </p>
        <div className="my-5 flex flex-col gap-1">
          <small>
            Want to say hi?{" "}
            <a
              href="https://www.brandonleetran.com/drops"
              className="underline underline-offset-3 hover:text-white transition-all duration-200 cursor-pointer"
            >
              Leave me a note
            </a>
          </small>
          <small>
            Want to contribute?{" "}
            <a
              href="mailto:brandonleetran@icloud.com"
              className="underline underline-offset-3 hover:text-white transition-all duration-200 cursor-pointer"
            >
              Shoot me an email
            </a>
          </small>
          <small>
            Want to support LeetMonkey?{" "}
            <a
              href="https://buymeacoffee.com/brandonleetran"
              className="underline underline-offset-3 hover:text-white transition-all duration-200 cursor-pointer"
            >
              Buy me a coffee
            </a>
          </small>
        </div>
        <small className="italic inline-block">
          Note: LeetMonkey is not affiliated with LeetCode or MonkeyType.
        </small>
        <button
          className="absolute right-0 top-0 mt-4 mr-4 cursor-pointer"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5 md:size-7 hover:text-white transition-all duration-200 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default About;
