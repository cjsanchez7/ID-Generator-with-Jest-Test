/**
 * @jest-environment jsdom
 */

import { Download } from './main.js';
import expect from 'expect';
import { jest } from '@jest/globals';
const html2canvas = require ( 'html2canvas');

jest.mock('html2canvas');

describe("Download", () => {
  it("should download the canvas", async () => {
    document.body.innerHTML = `
      <div id="card">
        <table id="opt">
          <div id="opt"></div>
          <div id="but"></div>
          <div id="aa"></div>
          <div id="bb"></div>
          <div id="cc"></div>
          <div id="dd"></div>
          <img id="image">
          <div id="ff"></div>
          <div id="gg"></div>
          <div id="ee"></div>
        </table>
      </div>
      <button id="download"></button>
    `;

    const canvas = document.createElement('canvas');
    const mockHtml2Canvas = jest.fn().mockResolvedValue(canvas);
    html2canvas.mockImplementation(mockHtml2Canvas);

    const spy = jest.spyOn(document, 'getElementById');
    const logMessage = jest.spyOn(global.console, 'log');

    await Download();

    expect(spy).toHaveBeenCalledWith('card');
    expect(mockHtml2Canvas).toHaveBeenCalledWith(card);
    expect(logMessage).toHaveBeenCalledWith('Download Successful');

    spy.mockRestore();
    mockHtml2Canvas.mockRestore();
    logMessage.mockRestore();
  });
});
