import { FaCodepen, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between pb-6">
      <div className="flex flex-shrink-0 items-center font-bold text-5xl">
        S<span className="text-[#21D498]">E</span>
      </div>
      <div className="my-6 flex items-center justify-center gap-4 text-2xl">
        <a target="_blank" href="https://github.com/sohaib-essam">
          <FaGithub className="transition duration-300 hover:text-[#21D498]" />
        </a>
        <a target="_blank" href="https://codepen.io/sohaib-essam">
          <FaCodepen className="transition duration-300 hover:text-[#21D498]" />
        </a>
        <a target="_blank" href="https://x.com/sohaibessam1">
          <FaXTwitter className="transition duration-300 hover:text-[#21D498]" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
