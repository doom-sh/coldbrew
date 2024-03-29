/* eslint-disable @next/next/no-img-element */
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import cx from "classnames";
import { useCallback, useEffect, useState } from "react";
import { useIsFetching } from "react-query";
import AboutButton from "./AboutButton";
import Cart from "./Cart";
import Search from "./Search";

const Navbar = () => {
  const isFetching = useIsFetching();

  const onNavbarScroll = useCallback(() => {
    const amountScrolled = document.scrollingElement?.scrollTop ?? 0;
    if (amountScrolled > 5) {
      setShowNavbarBorder(true);
    } else {
      setShowNavbarBorder(false);
    }
  }, []);

  const [showNavbarBorder, setShowNavbarBorder] = useState<boolean>(false);
  useEffect(() => {
    document.addEventListener("scroll", onNavbarScroll);
    return () => {
      document.removeEventListener("scroll", onNavbarScroll);
    };
  }, [onNavbarScroll]);

  return (
    <div
      className={cx(
        "sticky top-0 backdrop-blur-md p-4 flex justify-between items-center flex-wrap gap-4 z-10 transition-all duration-75 edges !border-x-0 !border-t-0 border-b !shadow-none",
        {
          "border-solid": showNavbarBorder,
          "border-none": !showNavbarBorder,
        }
      )}
    >
      {/* left */}
      <div className="flex flex-col flex-1 gap-4">
        {/* text */}
        <div className="flex items-center gap-4">
          <img src="/favicon.png" alt="Coldbrew" className="w-8 h-8" />
          <div className="">
            <div className="flex justify-between">
              <h1 className="font-bold">Coldbrew</h1>
            </div>
            <h2>
              A visual interface to quickly install your favorite macOS apps
              from Homebrew Cask
            </h2>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div className="flex flex-wrap items-center gap-4">
            <Search />
            <AboutButton />
            {/* <ToggleSelected /> */}
            {isFetching > 0 ? (
              <ArrowPathIcon className="h-4 opacity-50 animate-spin" />
            ) : (
              <div className="w-4 h-4" />
            )}
          </div>
          <Cart />
        </div>
      </div>
      {/* right */}
      <div></div>
    </div>
  );
};

export default Navbar;
