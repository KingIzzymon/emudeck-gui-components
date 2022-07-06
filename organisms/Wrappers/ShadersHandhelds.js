import React, { useEffect, useState, useContext } from 'react';

import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import Card from 'components/molecules/Card/Card.js';
import SelectorMenu from 'components/molecules/SelectorMenu/SelectorMenu.js';

import lcdon from 'assets/lcdon.png';
import lcdoff from 'assets/lcdoff.png';

const ShadersHandhelds = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onClick,
  next,
  back,
  data,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { shaders } = state;

  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <div className="wrapper">
          <Header title="Configure LCD Shader for" bold="Handhelds" />
          <Main>
            <p className="lead">
              The LCD Shader gives the handheld systems like GameBoy, Gameboy
              Advance, GameGear, etc a cool old style.
            </p>
            <SelectorMenu>
              <div className="selector-menu__img">
                <img
                  src={lcdoff}
                  className={shaders.handhelds == true && 'is-hidden'}
                  alt="Background"
                />
                <img
                  src={lcdon}
                  className={shaders.handhelds == false && 'is-hidden'}
                  alt="Background"
                />
              </div>
              <div className="selector-menu__options selector-menu__options--full">
                <ul>
                  <li onClick={() => onClick(false)}>
                    <Card css={shaders.handhelds == false && 'is-selected'}>
                      <span className="h3">Off</span>
                    </Card>
                  </li>
                  <li onClick={() => onClick(true)}>
                    <Card css={shaders.handhelds == true && 'is-selected'}>
                      <span className="h3">On</span>
                    </Card>
                  </li>
                </ul>
              </div>
            </SelectorMenu>
          </Main>
          <Footer
            next="shaders-classic"
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default ShadersHandhelds;
