import React, { useEffect, useState } from 'react';
import About from '../../components/About';
import Activities from '../../components/Activities/Activities';
import Contacts from '../../components/Contacts';
import Cost from '../../components/Cost/Cost';
import FAQ from '../../components/FAQ';
import Feedback from '../../components/Feedback/Feedback';
import HomePage from '../../components/HomePage';
import Hook from '../../components/Hook';
import Navbar from '../../components/Navbar';
import Quote from '../../components/Quote';
import BackSVG from '../../components/SVGComponents/BackSVG';
import FirstLineSVG from '../../components/SVGComponents/FirstLineSVG';
import HandsSVG from '../../components/SVGComponents/HandsSVG';
import LegsSVG from '../../components/SVGComponents/LegsSVG';
import SecondLineSVG from '../../components/SVGComponents/SecondLineSVG';
import SpineSVG from '../../components/SVGComponents/SpineSVG';
import ThirdLineSVG from '../../components/SVGComponents/ThirdLineSVG';
import Use from '../../components/Use';
import Workflow from '../../components/Workflow';


export const ClientView: React.FC = () => {
  const [blurred, setBlurred] = useState(false);
  const [desktopSidebarToggle, setDesktopSidebarToggle] = useState("");

  const switchBlurred = () => {
    const wrapper = document.getElementById('main-wrapper');
    setBlurred(!blurred)
    if (blurred) {
      wrapper.className = ''
    } else {
      wrapper.className = "blurred";
    }
  }

  const sidebarSwitcher = () => {
    const navbar = document.getElementById('navbar');
    const rect = navbar?.getBoundingClientRect();
    if (desktopSidebarToggle === "" && (Math.abs(rect?.y) > rect?.height)) {
      setDesktopSidebarToggle('toggled-visible-sidebar');
    }
    else if (desktopSidebarToggle === "toggled-visible-sidebar" && (Math.abs(rect?.y) <= rect?.height)) {
      setDesktopSidebarToggle("");
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', sidebarSwitcher)
    return () => window.removeEventListener('scroll', sidebarSwitcher);
  });

  return (
    <>

      {/*MAIN GROUP START*/}
      <Navbar switchBlurred={switchBlurred} desktopSidebarToggle={desktopSidebarToggle} />
      {/* SIDEBAR */}
      <div id="main-wrapper" className={''}>
        {/*SVG GROUP START*/}
        <BackSVG />
        <FirstLineSVG />
        <SpineSVG />
        <HandsSVG />
        <SecondLineSVG />
        <LegsSVG />
        <ThirdLineSVG />
        {/*SVG GROUP END*/}
        <HomePage />
        <About />
        <Use />
        <Quote />
        <Hook />
        <Activities editable={false} />
        <Workflow />
        <Cost />
        <FAQ />
        <Contacts />
        <Feedback />
        {/*MAIN GROUP END*/}
      </div>
    </>
  );
};