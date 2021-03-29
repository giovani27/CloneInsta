import React, { useState } from "react";

import {
  Container,
  IconNext,
  Stats,
  BackIcon,
  NextIcon,
  IconBack,
} from "./styles";
import StatusPeople from "../StatusPeople/index";

import { Data } from "../../Data/index";


const Status: React.FC = () => {
  const [scroolx, setscroolx] = useState(0);

  const handleRightArrow = () => {
    let x = scroolx - Math.round(614);
    let listw = Data.length * 85;

    if (614 - listw > x) {
      x = 614 - listw;
    }
    setscroolx(x);
  };
  const handleLeftArrow = () => {
    let x = scroolx + Math.round(614 / 2);
    if (x > 0) {
      x = 0;
    }

    setscroolx(x);
  };

  return (
    <Container>
      <IconNext onClick={handleRightArrow}>
        <NextIcon />
      </IconNext>
      <Stats
        style={{
          marginLeft: scroolx,
          
        }}
      >
        {Data.map((item) => (
          <StatusPeople nome={item.name} avatar={item.avatar} />
        ))}
      </Stats>
      <IconBack onClick={handleLeftArrow}>
        <BackIcon />
      </IconBack>
    </Container>
  );
};

export default Status;
