import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BtnSimple, FormSelectSimple, BtnGroup } from 'getbasecore/Atoms';
import { Table, Alert, BtnGroup } from 'getbasecore/Molecules';
import './emutable.scss';
const EmuTable = ({
  back,
  next,
  third,
  fourth,
  fourthText,
  disabledNext,
  disabledBack,
  nextText,
  backText,
  thirdText,
  img,
  bios,
  emuData,
  onChange,
  onClick,
  onClickInstall,
  onClickUninstall,
  installEmus,
  disableInstallButton,
  disableResetButton,
  mode,
}) => {
  console.log({ disableInstallButton });
  return (
    <div class="emutable">
      <div className="container--grid">
        <div data-col-sm="2">
          <img src={img} alt="logo" />
          <div class="form">
            {emuData && (
              <FormSelectSimple
                name="formu-input"
                label="Select Emulator"
                onChange={onChange}
              >
                <option value="citra">Citra</option>
                <option value="cemu">Cemu</option>
                <option value="dolphin">Dolphin</option>
                <option value="duckstation">Duckstation</option>
                <option value="mame">MAME</option>
                <option value="pcsx2">PCSX2</option>
                <option value="primehacks">PrimeHack</option>
                <option value="ppsspp">PPSSPP</option>
                <option value="ra">RetroArch</option>
                <option value="melonds">melonDS</option>
                <option value="rpcs3">RPCS3</option>
                <option value="scummvm">ScummVM</option>
                <option value="xemu">Xemu</option>
                <option value="yuzu">Yuzu</option>
                <option value="vita3k">Vita3K</option>
                <option value="srm">Steam Rom Manager</option>
                {mode !== 'easy' && (
                  <>
                    <option value="rmg">Rosalie's Mupen Gui</option>
                    <option value="ryujinx">Ryujinx</option>
                    <option value="xenia">Xenia</option>
                  </>
                )}
              </FormSelectSimple>
            )}
          </div>
        </div>

        <div data-col-sm="7">
          {emuData.description && (
            <>
              <p className="h5">Description</p>
              <p>{emuData.description}</p>
            </>
          )}
          {emuData.systems && (
            <>
              <p className="h5">Emulated Systems</p>
              <p>{emuData.systems}</p>
            </>
          )}
          {emuData.special_configuration && (
            <>
              <p className="h5">Special Configuration</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: `${emuData.special_configuration} <br/>You can learn more about this emulator in <strong><a class="link" href="${emuData.wiki}" target="_blank">our Wiki</a></strong>`,
                }}
              ></p>
            </>
          )}

          {emuData.bios.length > 0 && (
            <>
              <p className="h5">Bios needed</p>
              {bios}
            </>
          )}
          <BtnGroup>
            <BtnSimple
              css="btn-simple--1"
              type="button"
              aria="Go Back"
              onClick={() => onClick(emuData.id, emuData.code)}
              disabled={disableResetButton}
            >
              Reset configuration
            </BtnSimple>

            {!disableInstallButton && (
              <BtnSimple
                css="btn-simple--3"
                type="button"
                aria="Go Back"
                disabled={disableInstallButton}
                onClick={() => onClickInstall(emuData.id, emuData.code)}
              >
                Install
              </BtnSimple>
            )}
            {disableInstallButton && (
              <BtnSimple
                css="btn-simple--3"
                type="button"
                aria="Go Back"
                disabled={false}
                onClick={() => onClickUninstall(emuData.id, emuData.code)}
              >
                Uninstall
              </BtnSimple>
            )}
          </BtnGroup>
        </div>
        <div data-col-sm="3">
          {emuData.hotkeys && (
            <>
              <Table
                css="table-reflow"
                description="Table description"
                items={emuData.hotkeys}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmuTable;
