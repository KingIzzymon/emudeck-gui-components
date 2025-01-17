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
  BtnSwitch,
  LinkSimple,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';

import raLogo from 'assets/RetroAchievements.png';

const RAAchievements = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onChange,
  onToggle,
  next,
  back,
  data,
  nextText,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { achievements, second } = state;
  const ipcChannel = window.electron.ipcRenderer;
  const fetchToken = () => {
    //dragoonDorise
    //4049retro

    ipcChannel.sendMessage('bash', [
      `getToken|||curl --location --request POST 'https://retroachievements.org/dorequest.php?r=login&u=${achievements.user}&p=${achievements.pass}'`,
    ]);

    ipcChannel.once('getToken', (message) => {
      const messageJson = JSON.parse(message);

      if (messageJson.Success) {
        //Second time? We can set everything from here - Used in the settings page
        if (second) {
          ipcChannel.sendMessage('emudeck', [
            `setTokens|||echo ${messageJson.Token} > "$HOME/.config/EmuDeck/.rat" && RetroArch_retroAchievementsSetLogin && DuckStation_retroAchievementsSetLogin && PCSX2_retroAchievementsSetLogin && echo true`,
          ]);
          ipcChannel.once('setTokens', (message) => {
            console.log(message);
          });
        }

        setState({
          ...state,
          achievements: { ...achievements, token: messageJson.Token },
        });
      } else {
        alert('Wrong username or password');
      }
    });
  };

  const resetToken = () => {
    setState({
      ...state,
      achievements: { ...achievements, token: '' },
    });
  };

  return (
    <div className="app">
      <div className="wrapper">
        <Header title="Configure" bold="RetroAchievements" />
        <Main>
          <p className="lead">
            RetroAchievements.org is a community led effort to collaborate and
            create custom-made achievements in emulated classic games. Log in to
            set up Retroachievements for Retroarch.
          </p>
          <br />
          <div className="container--grid">
            <div data-col-sm="6">
              <Form>
                {achievements.token == '' && (
                  <>
                    <p>
                      If you do not have an account, register now on
                      RetroAchievements.org by clicking{' '}
                      <LinkSimple
                        css="link-simple--1"
                        target="_blank"
                        href="https://www.retroAchievements.org"
                      >
                        here
                      </LinkSimple>
                    </p>
                    <div
                      style={{
                        width: '40%',
                        display: 'inline-block',
                        marginRight: '10px',
                      }}
                    >
                      <FormInputSimple
                        label="Username"
                        type="text"
                        name="user"
                        id="user"
                        value={achievements.user}
                        onChange={onChange}
                      />
                    </div>
                    <div style={{ width: '50%', display: 'inline-block' }}>
                      <FormInputSimple
                        label="Password"
                        type="password"
                        name="pass"
                        id="pass"
                        value={achievements.pass}
                        onChange={onChange}
                      />
                    </div>
                    <BtnSimple
                      css="btn-simple--1"
                      type="button"
                      onClick={fetchToken}
                    >
                      Login
                    </BtnSimple>
                  </>
                )}
                {achievements.token != '' && (
                  <>
                    <p>
                      <span className="h4">
                        You are successfully logged to RetroAchivements!
                      </span>
                      <BtnSimple
                        css="btn-simple--1"
                        type="button"
                        onClick={resetToken}
                      >
                        Reset Login
                      </BtnSimple>
                    </p>

                    <div>
                      HardCore mode
                      <BtnSwitch
                        label="hardcore"
                        name="hardcore"
                        id="hardcore"
                        value={achievements.hardcore}
                        onChange={onToggle}
                      />
                    </div>
                  </>
                )}
              </Form>
            </div>
            <div data-col-sm="1"></div>
            <div data-col-sm="5">
              <img src={raLogo} alt="RetroAchievements" />
            </div>
          </div>
        </Main>
        <Footer
          next={next}
          nextText={achievements.token != '' ? 'Continue' : 'Skip'}
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </div>
    </div>
  );
};

export default RAAchievements;
