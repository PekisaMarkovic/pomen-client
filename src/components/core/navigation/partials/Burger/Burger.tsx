"use client";

import BurgerIcon from "@/app/icons/navigation/Burger";
import { useCallback, useState } from "react";
import MobileLeftSideMenu from "@/components/core/navigation/partials/MobileLeftSideMenu/MobileLeftSideMenu";

const Burger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);

  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <div>
      <BurgerIcon className="cursor-pointer" onClick={handleOpen} />

      {isOpen && <MobileLeftSideMenu handleClose={handleClose} />}
    </div>
  );
};

export default Burger;
