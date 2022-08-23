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
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';


const ChangeLog = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onChange,
  onClick,
  next,
  back,
  hasSudo,
  nextText,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { sudoPass, ChangeLog } = state;

  return (
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title="Latest" bold="changes" />
        <Main>
          <p className="lead">
            See all the news and fixes on the latest version.
          </p>
          <ul className="list-two-cols">
            <li>- NEW: Brand New UI</li>
            <li>- IMPROVEMENT: Better Dolphin Performance on Anbernic Win600</li>
          </ul>
        </Main>
        <Footer
          next={false}
          nextText={nextText}
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </div>
    </div>
  );
};

export default ChangeLog;