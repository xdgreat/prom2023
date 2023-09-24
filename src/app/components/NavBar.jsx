"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.getElementById("blur").classList.add("blurred");
    } else {
      document.body.style.overflow = "scroll";
      document.getElementById("blur").classList.remove("blurred");
    }
  }, [isOpen]);

  const navLinks = [
    {
      element: "Home",
      href: "/",
    },
    {
      element: "Buy Tickets",
      href: "/checkout",
    },
    {
      element: "Activity Hub",
      href: "/activity",
    },
    {
      element: "Gallery",
      href: "/gallery",
    },
    {
      element: "Terms and Conditions",
      href: "/terms-of-service",
    },
  ];

  function HamburgerMenu() {
    const handleClick = () => {
      return setIsOpen(!isOpen);
    };

    return (
      <button onClick={handleClick}>
        <Image
          src={isOpen ? "/imgs/menuopen.png" : "/imgs/menuclose.png"}
          alt="Hamburger Menu"
          className="w-14 pl-2 md:w-16"
        />
      </button>
    );
  }

  return (
    <nav className="flex max-w-7xl mx-auto flex-row items-center justify-between h-[10vh] sticky top-0 bg-inherit z-50 px-4 isolate filter-none">
      <div>
        <HamburgerMenu />
      </div>
      <Link
        className="font-semibold border-b-2 border-accent text-2xl"
        href={"/"}>
        Prom 2023
      </Link>
      <Link
        href={"/checkout"}
        className="uppercase px-3 py-1.5 bg-accent rounded-md md:text-xl">
        Buy Now
      </Link>
      <div
        className={`${
          isOpen ? "in" : "out"
        } absolute top-[10vh] rounded-md max-w-xl flex-col border border-accent mx-auto left-1/2 border-solid w-[70vw] px-4 flex pt-4 z-50 isolate bg-black text-lg font-semibold text-white/90 gap-4`}>
        <h4 className="text-center  text-xl mb-4 border-accent border-b-2 w-fit mx-auto">
          Navigation
        </h4>
        {navLinks.map((el, key) => {
          return (
            <div key={key} onClick={() => setIsOpen(false)}>
              <Link key={key} href={el.href} className="text-white/60">
                <span className={path === el.href ? "text-white" : ""}>
                  {el.element}
                </span>
              </Link>
              <hr className="text-white bg-white w-11/12 mt-4" />
            </div>
          );
        })}
        <div>
          <Footer />
        </div>
      </div>
    </nav>
  );
}
