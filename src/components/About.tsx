import { AboutProps } from "../types";

function About({ isOpen, onClose }: AboutProps) {
  if (isOpen === false) {
    return null;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 px-6">
      <div className="glassy border border-white light:border-black/20 rounded-2xl p-5 max-w-lg w-full z-50">
        <h2 className="text-center mb-4 font-bold">About LeetSharp</h2>
        <p>
          LeetSharp's purpose is to serve as a go-to, C#-centric library of{" "}
          <a
            className="underline underline-offset-3 hover:text-white transition-all duration-200 cursor-pointer light:hover:text-black/50"
            href="https://leetcode.com/"
          >
            LeetCode
          </a>{" "}
          solutions and explanations—both for your own reference and for any
          .NET developer seeking clear, idiomatic C# examples. Every solution is
          personally written and solved by me.
        </p>
        <div className="my-5 flex flex-col gap-1">
          <small>
            Want to say hi?{" "}
            <a
              href="https://www.brandonleetran.com/drops"
              className="underline underline-offset-3 hover:text-white transition-all duration-200 cursor-pointer light:hover:text-black/50"
            >
              Leave me a note
            </a>
          </small>
          <small>
            Want to contribute?{" "}
            <a
              href="mailto:brandonleetran@icloud.com"
              className="underline underline-offset-3 hover:text-white transition-all duration-200 cursor-pointer light:hover:text-black/50"
            >
              Shoot me an email
            </a>
          </small>
          <small>
            Want to support LeetSharp?{" "}
            <a
              href="https://buymeacoffee.com/brandonleetran"
              className="underline underline-offset-3 hover:text-white transition-all duration-200 cursor-pointer light:hover:text-black/50"
            >
              Buy me a coffee
            </a>
          </small>
        </div>
        <small className="italic inline-block">
          Note: LeetSharp is not affiliated with LeetCode.
        </small>
        <button
          className="absolute right-0 top-0 mt-4 mr-4"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5 md:size-7 hover:text-white transition-all duration-200 cursor-pointer light:hover:text-black/50"
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
