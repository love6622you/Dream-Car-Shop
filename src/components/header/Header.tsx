import { Image } from "@chakra-ui/react";
import React from "react";

import logoSrc from "/img/logo.png";

const Header = () => {
  return (
    <header>
      <Image src={logoSrc} />
    </header>
  );
};

export default Header;
