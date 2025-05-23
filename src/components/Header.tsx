import { HeaderProps } from "../types.ts";

function Header({ onOpen, theme, setTheme, isDark }: HeaderProps) {
  const themes = ["system", "light", "dark"] as const;
  const icons = {
    system: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6 hover:text-white light:hover:text-black/50 transition-all duration-200 cursor-pointer ease-in-out"
      >
        <path
          fillRule="evenodd"
          d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
    light: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6 hover:text-black/50 cursor-pointer transition-all duration-200 ease-in-out"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
    ),
    dark: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-6 hover:text-white transition-all duration-200 ease-in-out cursor-pointer"
      >
        <path
          fillRule="evenodd"
          d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  } as const;

  const handleTheme = () => {
    const index = themes.indexOf(theme);
    const nextTheme = themes[(index + 1) % themes.length];
    setTheme(nextTheme);
    console.log("handleTheme", nextTheme);
  };

  return (
    <header>
      <div className="max-w-5xl my-0 mx-auto flex justify-between py-5 md:py-8 items-center flex-wrap gap-8">
        <div className="flex gap-2 md:gap-4 flex-wrap items-center">
          <div>
            <a href="/" aria-label="Home">
              <img
                src={
                  isDark
                    ? "/leetmonkey-dark-cropped.svg"
                    : "/leetmonkey-light-cropped.svg"
                }
                alt="LeetMonkey"
                width="150"
                height="20"
                className="w-[125px] md:w-[150px] h-auto"
                loading="lazy"
              />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/brandonleetran/LeetMonkey/blob/master/CHANGELOG.md"
              aria-label="v0.0.3"
              title="v0.0.3"
            >
              <span className="backdrop-blur-xl hover:bg-white/10 light:hover:bg-black/10 bg-white/5 light:bg-black/5 light:text-[#0d1117] light:border-black/15 light:hover:border-black/50 hover:border-white/50 text-white cursor-pointer border border-white/15 text-xs px-3 py-1 rounded-full transition-all duration-300 ease-in-out">
                v0.0.3
              </span>
            </a>
          </div>
        </div>
        <nav>
          <ul className="flex gap-4 md:gap-6 items-center">
            <li>
              <a
                href="/archive"
                aria-label="Open Archives"
                title="Open Archives"
                className="hover:text-white light:hover:text-black/50 light:text-[#0d1117] transition-all duration-200 cursor-pointer hidden md:block ease-in-out"
              >
                archive
              </a>
              <a
                href="/archive"
                aria-label="Open Archives"
                className="hover:text-white light:hover:text-black/50 transition-all duration-200 cursor-pointer md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                  <path
                    fillRule="evenodd"
                    d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <button
                className="block"
                onClick={onOpen}
                aria-label="More Information"
                title="More Information"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 hover:text-white light:hover:text-black/50 transition-all duration-200 cursor-pointer ease-in-out"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                className="block"
                onClick={handleTheme}
                aria-label="Toggle Theme"
                title="Toggle Theme"
              >
                {icons[theme]}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
