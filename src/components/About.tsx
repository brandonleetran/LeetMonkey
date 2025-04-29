function About() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 px-6">
      <div className="glassy border border-white rounded-2xl p-8 max-w-2xl w-full z-50">
        <div className="mb-10 flex">
          <div className="rounded-full h-50 w-50">
            <img
              src="brandon-avatar-2.png"
              className="rounded-full h-50 w-50 object-cover"
              alt="Brandon Avatar"
            ></img>
          </div>
          <div>item</div>
        </div>
        <blockquote className="mb-10 text-sm leading-7 border-l-2 pl-8 my-8 py-6 border-amber-300 italic">
          Welcome to <strong>LeetMonkey</strong>! LeetMonkey is a daily practice
          platform designed to help you code faster and more efficiently. Each
          day, you're given one hand-picked challenge — and the full solution is
          provided. It's all about building speed, accuracy, and muscle memory
          through focused daily practice. More features are on the way, and I'm
          excited to keep making LeetMonkey even better. LeetMonkey is inspired
          by LeetCode, NeetCode, and Leetle. Thanks for stopping by and being
          part of the journey! - <strong>Brandon Lee Tran 🐒</strong>
        </blockquote>
        <p>
          Like LeetMonkey?{" "}
          <a
            href="https://buymeacoffee.com/brandonleetran"
            className="underline underline-offset-3 hover:text-white"
          >
            Support me
          </a>
        </p>
        <p>
          Love to say hi? Leave me a{" "}
          <a
            href="https://www.brandonleetran.com/drops"
            className="underline underline-offset-3 hover:text-white"
          >
            note
          </a>
        </p>
        <p className="mb-10">
          Want to contribute? Shoot me an{" "}
          <a
            href="mailto:brandonleetran@icloud.com"
            className="underline underline-offset-3 hover:text-white"
          >
            email
          </a>
        </p>
        <small className="italic inline-block">
          Note: LeetMonkey is not affiliated with LeetCode, NeetCode, or Leetle.
        </small>
      </div>
    </div>
  );
}

export default About;
