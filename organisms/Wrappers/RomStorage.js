import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';
import { useNavigate } from 'react-router-dom';
import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';
import Card from 'components/molecules/Card/Card.js';
import imgSD from 'assets/sdcard.png';
import imgInternal from 'assets/internal.png';

const RomStorage = ({
  onClick,
  disabledNext,
  disabledBack,
  downloadComplete,
  next,
  back,
  data,
  sdCardValid,
  sdCardName,
  reloadSDcard,
  customPath,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { storage, SDID, mode, system, storagePath } = state;
  const navigate = useNavigate();
  const goTo = (href) => {
    history.push('/same-route');
  };
  return (
    <>
      {/*  <ExploreContainer name="Tab 1 page" /> */}
      <div className="app">
        <Aside />

        <div className="wrapper">
          <Header
            title="Select your ROM Directory"
            bold=""
          />
          <Main>
            <p className="lead">
            Your ROM directory will be squared away 
            within an Emulation folder 
            in your selected directory. 
            If you do not see your SD Card,
            format it first in Game Mode.
            </p>
            <div className="cards">
              <Card
                css={storage == 'SD-Card' && 'is-selected'}
                onClick={() =>
                  sdCardValid == true ? onClick('SD-Card') : reloadSDcard()
                }
              >
                <img src={imgSD} width="100" alt="Background" />
                <span className="h5">SD Card</span>
                {sdCardName != null && <span className="h6">{sdCardName}</span>}
                {sdCardName == null ||
                  (sdCardValid == false && (
                    <span className="h6">
                      Not detected
                      <br />
                      Click here to try again
                    </span>
                  ))}
              </Card>

              <Card
                css={storage == 'Internal Storage' && 'is-selected'}
                onClick={() => onClick('Internal Storage')}
              >
                <img src={imgInternal} width="100" alt="Background" />
                <span className="h5">Internal Storage</span>
              </Card>

              <Card
                css={storage == 'Custom' && 'is-selected'}
                onClick={() => onClick('Custom')}
              >
                <img src={imgInternal} width="100" alt="Background" />
                <span className="h5">Custom Directory</span>
                {customPath && storage == 'Custom' && (
                  <span className="h6">{customPath}</span>
                )}
              </Card>
            </div>
          </Main>

          <Footer
            next={next}
            disabledNext={disabledNext}
            disabledBack={disabledBack}
          />
        </div>
      </div>
    </>
  );
};

export default RomStorage;
