import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "./config/particle-config";
import "./particleStyles/particles.css";

export default function ParticleBackground() {
  return <Particles id="pjs" params={ParticleConfig}></Particles>;
}
