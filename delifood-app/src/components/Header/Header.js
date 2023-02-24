import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Button, Input, Title } from "@mantine/core";

import "./Header.css";

const Header = () => {
  return (
    <div className="header flex-center">
      <div className="left-section flex-center">
        <Title className="logo">DeliFood</Title>
        <button className="styless-btn location-btn flex-center">
          <span className="location-icon">
            <GoLocation color={"var(--red)"} size={"1.8em"} />
          </span>
          <span className="location-delivery-to">
            <p>Delivery to</p>
            <p className="location-address">Tel Aviv</p>
          </span>
          <MdKeyboardArrowDown size={"2em"} color={"var(--red)"} />
        </button>
      </div>
      <div className="search-section ">
        <Input
          icon={<AiOutlineSearch color="black" size={"1.5em"} />}
          placeholder="Serch in DeliFood..."
          variant="filled"
          radius="lg"
          size="md"
        />
      </div>
      <div className="login-section">
        <button className="styless-btn log-in-btn">Log in</button>
        <Button className="styless-btn sign-up-btn">Sign up</Button>
      </div>
    </div>
  );
};

export default Header;
