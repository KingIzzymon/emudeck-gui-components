import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
  Iframe,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';

import VideoGuideImg from 'assets/powertools.png';
const ipcChannel = window.electron.ipcRenderer;
const VideoGuide = ({
  disabledNext,
  disabledBack,
  onChange,
  onClick,
  next,
  back,
  minute,
}) => {
  return (
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title="Emulation Showcase" />
        <Main>
          <p className="lead">
            Learn how to set up EmuDeck with this wonderful guide from Russ at RetroGameCorps.
          </p>
          <div className="container--grid">
            <div data-col-sm="7">
              <Iframe
                src={`https://www.youtube-nocookie.com/embed/rs9jDHIDKkUstart=${minute}&autoplay=${
                  minute != 0 ? 1 : 0
                }&modestbranding=1&rel=0&showinfo=0`}
              />
            </div>
            <div data-col-sm="5">
              <span className="h4">Sections</span>
              <ol class="list">
                <li className="h6">
                  <a href="#" onClick={() => onClick(76)}>
                    Introduction
                  </a>
                </li>
                <li className="h6">
                  <a href="#" onClick={() => onClick(159)}>
                    Written Guide and Recommended Tools
                  </a>
                </li>
                <li className="h6">
                  <a href="#" onClick={() => onClick(229)}>
                    Installing EmuDeck
                  </a>{' '}
                </li>
                <li className="h6">
                  <a href="#" onClick={() => onClick(402)}>
                    Configuring Games and BIOS Files
                  </a>{' '}
                </li>
                <li className="h6">
                  <a href="#" onClick={() => onClick(553)}>
                    Configuring Steam ROM Manager
                  </a>{' '}
                </li>
                <li className="h6">
                  <a href="#" onClick={() => onClick(657)}>
                    EmuDeck Tools and New Features
                  </a>
                </li>
                <li className="h6">
                  <a href="#" onClick={() => onClick(810)}>
                    Quick Tips and Tricks
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </Main>
        <Footer
          next={false}
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </div>
    </div>
  );
};

export default VideoGuide;
