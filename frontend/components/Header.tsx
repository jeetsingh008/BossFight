import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Header = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  return (
    <header className="absolute top-0 left-0 z-50 w-full pt-10 text-white">
      <nav className="container">
        <div className="flex justify-between">
          {/* logo section */}
          <h1 className="uppercase text-2xl font-semibold ">
            <span className="text-primary">Boss</span> Fight
          </h1>
          {/* Hamburger menu section */}
          <div className="flex gap-2 justify-center no-select">
            {sidebar && (
              <motion.div
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut", reverse: "reverse" as const }}
                className="rounded-sm flex flex-col gap-1 text-black font-semibold py-2 px-1 text-sm bg-primary"
              >
                <h2>Sign In</h2>
                <div className="h-[1px] w-full mx-auto bg-black tracking-tighter leading-none"></div>
                <h2>Register</h2>
              </motion.div>
            )}
            <GiHamburgerMenu
              onClick={() => {
                setSidebar((prev) => !prev);
              }}
              className="text-3xl cursor-pointer"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
