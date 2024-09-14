import React from "react";
import Omnifood from "./Omnifood.js";
import Colors from "./Colors.js";
import Pizza from "./Pizza.js";
import Watch from "./Watch.js";
import Clock from "./Clock.js";
import MusicPlayer from "./MusicPlayer.js";
import StopWatch from "./StopWatch.js";
import Calculator from "./Calculator.js";
export default function ProjectsDemo() {
  return (
    <div>
      <Omnifood></Omnifood>
      <Colors></Colors>
      <Pizza></Pizza>
      <div className="project-2 container" id="clock-nav">
        <Watch></Watch>
        <Clock></Clock>
      </div>
      <div className="project-3 container">
        <MusicPlayer></MusicPlayer>
        <StopWatch></StopWatch>
        <Calculator></Calculator>
      </div>
    </div>
  );
}
