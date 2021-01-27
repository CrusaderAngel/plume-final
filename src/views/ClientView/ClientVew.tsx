import React, { useState } from 'react';
import About from '../../components/About';
import Activities from '../../components/Activities';
import Contacts from '../../components/Contacts';
import Cost from '../../components/Cost';
import FAQ from '../../components/FAQ';
import Feedback from '../../components/Feedback';
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
  let blurredClass: string;

  const switchBlurred = () => {
    setBlurred(!blurred)
  }

  if (blurred) {
    blurredClass = "blurred";
  } else {
    blurredClass = '';
  }

  return (
    <>
      {/*SVG GROUP START*/}
      {/* <BackSVG />
      <FirstLineSVG />
      <SpineSVG />
      <HandsSVG />
      <SecondLineSVG />
      <LegsSVG />
      <ThirdLineSVG /> */}
      {/*SVG GROUP END*/}

      {/*MAIN GROUP START*/}
      <Navbar switchBlurred={switchBlurred} />
      <div id="main-wrapper" className={`${blurredClass}`}>;
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