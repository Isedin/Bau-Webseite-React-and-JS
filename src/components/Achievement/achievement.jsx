import React, { useState, useEffect, useRef } from "react";
// import "./Achievement.css";
import { FaAward, FaDiagramProject, FaUsersLine } from "react-icons/fa6";
import ReactOdometer from "react-odometerjs";
import { GiExtraTime } from "react-icons/gi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Achievement = () => {
  const [clients, setClients] = React.useState(0);
  const [projects, setProjects] = React.useState(0);
  const [teams, setTeams] = React.useState(0);
  const [awards, setAwards] = React.useState(0);
  const container = useRef(null);
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setClients(100);
      setProjects(50);
      setTeams(10);
      setAwards(10);
    }, 1000);

    return () => clearTimeout(timeOutId);
  }, []);

  useGSAP(
    () => {
      const timeline = gsap.timeline();
      timeline.from(".achievement", {
        delay: 1.5,
        x: 100,
        opacity: 0,
        stagger: 0.5,
      });
    },
    { scope: container }
  );

  return (
    <div className="achievement_container" ref={container}>
      <div className="achievement">
        <div className="icon_container">
          <FaUsersLine />
        </div>
        <div className="details">
          <div className="count_row">
            <ReactOdometer value={clients} className="title" />
            <h1 className="g-text title">+</h1>
          </div>
          <small className="text_muted">Zufriedene Kunden</small>
        </div>
      </div>

      <div className="achievement">
        <div className="icon_container">
          <FaDiagramProject />
        </div>
        <div className="details">
          <div className="count_row">
            <ReactOdometer value={projects} className="title" />
            <h1 className="g-text title">+</h1>
          </div>
          <small className="text_muted">Kompletierte Projekte</small>
        </div>
      </div>

      <div className="achievement">
        <div className="icon_container">
          <GiExtraTime />
        </div>
        <div className="details">
          <div className="count_row">
            <ReactOdometer value={teams} className="title" />
            <h1 className="g-text title">+</h1>
          </div>
          <small className="text_muted">Jahre Erfahrung</small>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
