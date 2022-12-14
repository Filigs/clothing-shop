import Socials from "./socials";

export default function Footer() {
  return (
    <footer className="relative lg:relative min-w-full max-w-full inset-x-0 bottom-0 p-4 lg:p-8 bg-slate-800 shadow md:flex md:items-center dark:bg-slate-800 border-t-2 border-x-0 border-b-0 border-slate-700 transition-transform duration-300">
      <div className="flex flex-row flex-wrap lg:flex-col w-full items-center mt-3 text-sm lg:text-md text-slate-200 font-normal font-sans sm:mt-0 transition-transform duration-300 tracking-wider gap-4 lg:gap-8 justify-center lg:justify-center px-4 py-4">
        <div className="inline-flex gap-2 text-center lg:text-center items-center transition-transform duration-300 justify-evenly">
          <p className="text-sm lg:text-lg xl:text-xl text-start lg:text-md text-slate-400 dark:text-slate-400 transition-transform duration-300 tracking-wide font-normal font-serif ">
            {"© 2022 "}
            <a
              href="https://crypto-mockup.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {"Filipe Martins™"}
            </a>
          </p>
          <p className="text-sm lg:text-lg xl:text-xl text-start lg:text-md text-slate-400 dark:text-slate-400 transition-transform duration-300 tracking-wide font-serif font-thin italic">
            {"  " + "All Rights Reserved"}
          </p>
        </div>

        <div className="items-center order-2  transition-transform duration-300 ">
          <Socials />
        </div>
      </div>
    </footer>
  );
}
