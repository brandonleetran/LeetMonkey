function BuyMeACoffee() {
  return (
    <div className="fixed bottom-10 right-10">
      <a href="https://www.buymeacoffee.com/brandonleetran" target="_blank">
        <img
          src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=brandonleetran&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
          alt="Buy me a coffee"
          className="max-w-[250px] sm:block hidden rounded-lg"
        />
      </a>
      <a
        href="https://www.buymeacoffee.com/brandonleetran"
        aria-label="Buy me a coffee"
      >
        <img
          src="/bmc-logo-yellow.png"
          className="rounded-xl block sm:hidden h-15 w-15"
          alt="Buy me a coffee"
        ></img>
      </a>
    </div>
  );
}

export default BuyMeACoffee;
