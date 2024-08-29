import React from "react";
import SliderHome from "./component/Slider-banner/SliderHome";
import Home from "./Home";

export default function Homepage() {
  return (
    <>
      <section>
        <SliderHome />
      </section>
      <Home />
    </>
  );
}
