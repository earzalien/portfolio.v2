import { Link } from "react-router-dom";
import React from "react";
import { sideBarRightText } from "../assets/lib/data";
import { useLanguage } from "../context/language-context";

const SiteBarRight: React.FC = () => {
  const { language } = useLanguage();

  const text =
    language === "FR"
      ? sideBarRightText.fr
      : language === "ES"
      ? sideBarRightText.es
      : sideBarRightText.en;

  return (
<div className="absolute flex items-center flex-col bottom-0 right-0 mr-8 h-[50vh] max-lg:hidden">
  <div className="h-[90%] flex items-center justify-center">
    <Link
      to="#contact"
      className="text-[--orange] hover:text-[--lightblue] transition-all duration-200
                 [writing-mode:vertical-rl]"
    >
      {text}
    </Link>
  </div>
  <div className="flex items-center justify-center flex-col h-[35%]">
    <div className="w-[0.25rem] h-[100%] bg-[--lightblue]" />
  </div>
</div>

  );
};

export default SiteBarRight;
