/**
 * @jest-environment jsdom
 */
import { Fill } from './main.js';


describe('Fill', () => {
  it('should reload the page', () => {
    document.body.innerHTML = `
      <form id="frm">
      <input type="text" id="nme">
      <input type="text" id="dob">
      <input type="text" id="scn">
      <input type="text" id="dep">
      <input type="text" id="url">
      <input type="text" id="con">
      <input type="text" id="ea">
      </form>
      <div id="opt"></div>
      <div id="but"></div>
      <div id="aa"></div>
      <div id="bb"></div>
      <div id="cc"></div>
      <div id="dd"></div>
      <img id="image">
      <div id="ff"></div>
      <div id="gg"></div>
      <div id="ee"></div>`;

    document.getElementById('nme').value = 'Samuel Cj Sanchez Jr.';
    document.getElementById('dob').value = '11/10/2000';
    document.getElementById('scn').value = 'San Carlos City, Pangasinan';
    document.getElementById('dep').value = 'Quality Assurance Analyst Intern';
    document.getElementById('url').value = 'https://example.com/image.png';
    document.getElementById('con').value = '7777777';
    document.getElementById('ea').value = 'zerosanchezsamuel@gmail.com';

    document.getElementById('aa').innerHTML = 'Samuel Cj Sanchez Jr.';
    document.getElementById('bb').innerHTML = '11/10/2000';
    document.getElementById('cc').innerHTML = 'San Carlos City, Pangasinan';
    document.getElementById('dd').innerHTML = 'Quality Assurance Analyst Intern';
    document.getElementById('image').src = 'https://example.com/image.png';
    document.getElementById('ff').innerHTML = '7777777';
    document.getElementById('gg').innerHTML = 'zerosanchezsamuel@gmail.com';

    Fill();

    expect(document.getElementById('nme').innerHTML).toBe('');
    expect(document.getElementById('dob').innerHTML).toBe('');
    expect(document.getElementById('scn').innerHTML).toBe('');
    expect(document.getElementById('dep').innerHTML).toBe('');
    expect(document.getElementById('url').src).toBe('');
    expect(document.getElementById('con').innerHTML).toBe('');
    expect(document.getElementById('ea').innerHTML).toBe('');
  });
});