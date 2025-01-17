import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import Card from 'components/molecules/Card/Card.js';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu.js';

import ar43 from 'assets/ar433d.png';
import ar32 from 'assets/ar323d.png';
import ar169 from 'assets/ar1693d.png';

const AspectRatio3D = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
  data,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { ar } = state;

  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <div className="wrapper">
          <Header title="Configure Aspect Ratio for" bold="Classic 3D Games" />
          <Main>
            <p className="lead">
              Select the aspect ratio for the Dreamcast and Nintendo 64 Systems. 
            </p>
            <SelectorMenu>
              <div className="selector-menu__img">
                <img
                  src={ar169}
                  className={ar.classic3d != '169' && 'is-hidden'}
                  alt="Background"
                />
                <img
                  src={ar43}
                  className={ar.classic3d != '43' && 'is-hidden'}
                  alt="Background"
                />
              </div>
              <div className="selector-menu__options selector-menu__options--full">
                <ul>
                  <li onClick={() => onClick('43')}>
                    <Card css={ar.classic3d == 43 && 'is-selected'}>
                      <span className="h4">4:3</span>
                      <p>Original Aspect Ratio</p>
                    </Card>
                  </li>
                  <li onClick={() => onClick('169')}>
                    <Card css={ar.classic3d == 169 && 'is-selected'}>
                      <span className="h4">16:9</span>
                      <p>Widescreen using Widescreen hacks</p>
                    </Card>
                  </li>
                </ul>
              </div>
              <div className="selector-menu__details">
                <p className="lead">Systems</p>
                <ul>
                  <li>Dreamcast</li>
                  <li>Nintendo 64</li>
                </ul>
              </div>
            </SelectorMenu>
          </Main>
          <Footer
            next="aspect-ratio-dolphin"
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default AspectRatio3D;
