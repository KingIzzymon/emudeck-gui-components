import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';
import { Alert } from 'getbasecore/Molecules';

import Notification from 'components/molecules/Notification/Notification.js';

import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
  Img,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';
import {
  iconSuccess,
  iconDanger,
  iconWarning,
} from 'components/utils/images/images.js';
const CheckBios = ({
  disabledNext,
  disabledBack,
  ps1Bios,
  ps2Bios,
  switchBios,
  segaCDBios,
  saturnBios,
  dreamcastBios,
  DSBios,
  next,
  back,
  nextText,
  showNotification,
  checkBiosAgain,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { sudoPass, Uninstall } = state;

  const biosText = (name) => {
    switch (name) {
      case true:
        return 'detected!';
        break;
      case false:
        return 'missing!';
        break;
      case null:
        return '...searching...';
        break;
      default:
        return '...searching...';
        break;
    }
  };

  const biosCSS = (name) => {
    console.log({ name });
    switch (name) {
      case true:
        return 'alert--success ';
        break;
      case false:
        return 'alert--danger ';
        break;
      case null:
        return ' ';
        break;
      default:
        return ' ';
        break;
    }
  };

  return (
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title="Bios files" bold="checker" />
        <Main>
          <p className="lead">
            Some games will not load properly without BIOS files in place. Place
            your BIOS in /Emulation/bios and use this BIOS Checker to ensure
            that you have the correct BIOS for your system.
          </p>
          <div className="container--grid">
            <div data-col-sm="6">
              <Alert css={'alert--mini ' + biosCSS(ps1Bios)}>
                {biosText(ps1Bios).includes('missing') ? (
                  <Img src={iconDanger} css="icon icon--xs" alt="OK" />
                ) : (
                  <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                )}{' '}
                Playstation 1 BIOS {biosText(ps1Bios)}
              </Alert>
              <Alert css={'alert--mini ' + biosCSS(ps2Bios)}>
                {biosText(ps2Bios).includes('missing') ? (
                  <Img src={iconDanger} css="icon icon--xs" alt="OK" />
                ) : (
                  <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                )}{' '}
                Playstation 2 BIOS {biosText(ps2Bios)}
              </Alert>
              <Alert css={'alert--mini ' + biosCSS(switchBios)}>
                {biosText(switchBios).includes('missing') ? (
                  <Img src={iconDanger} css="icon icon--xs" alt="OK" />
                ) : (
                  <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                )}{' '}
                Nintendo Switch Firmware {biosText(switchBios)}
              </Alert>
              <Alert css={'alert--mini ' + biosCSS(segaCDBios)}>
                {biosText(segaCDBios).includes('missing') ? (
                  <Img src={iconDanger} css="icon icon--xs" alt="OK" />
                ) : (
                  <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                )}{' '}
                Sega CD BIOS {biosText(segaCDBios)}
              </Alert>
              <Alert css={'alert--mini ' + biosCSS(saturnBios)}>
                {biosText(saturnBios).includes('missing') ? (
                  <Img src={iconDanger} css="icon icon--xs" alt="OK" />
                ) : (
                  <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                )}{' '}
                Saturn BIOS {biosText(saturnBios)}
              </Alert>
              <Alert css={'alert--mini ' + biosCSS(DSBios)}>
                {biosText(DSBios).includes('missing') ? (
                  <Img src={iconDanger} css="icon icon--xs" alt="OK" />
                ) : (
                  <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                )}{' '}
                Nintendo DS BIOS {biosText(DSBios)}
              </Alert>
              <Alert
                css={
                  'alert--mini ' +
                  (dreamcastBios ? 'alert--success' : 'alert--warning')
                }
              >
                {biosText(DSBios).includes('missing') ? (
                  <Img src={iconWarning} css="icon icon--xs" alt="OK" />
                ) : (
                  <Img src={iconSuccess} css="icon icon--xs" alt="OK" />
                )}{' '}
                Dreamcast BIOS{' '}
                {dreamcastBios
                  ? 'detected!'
                  : ' missing! It is not mandatory, but recommended'}
              </Alert>
            </div>

            <div data-col-sm="6">
              <Alert css="alert--info">
                <ul class="list">
                  <li>
                    Tip 1: Not all systems require additional BIOS files. Listed
                    here are the more common systems.
                  </li>
                  <li>
                    Tip 2: Make sure you have the correct BIOS for your ROM
                    region. Your ROMs may come from the United States, Japan,
                    Europe, etc.
                  </li>
                  <li>
                    Tip 3: Case matters. Even if your BIOS are detected, your
                    BIOS must be lowercase for Playstation 1 and Playstation 2.
                  </li>
                  <li>
                    Tip 4: Your BIOS files must be placed in /Emulation/bios. Do
                    not make sub-folders for your BIOS. For Switch, use our
                    pre-created folders.
                  </li>
                  <li>
                    You can use this link{' '}
                    <a
                      href="https://emulation.gametechwiki.com/index.php/File_hashes"
                      target="_blank"
                    >
                      here
                    </a>{' '}
                    as a handy guide for how your BIOS should be named.
                  </li>
                </ul>
              </Alert>
              <button
                className="btn-simple btn-simple--1"
                onClick={checkBiosAgain}
              >
                Check Again
              </button>
            </div>
          </div>
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

export default CheckBios;
