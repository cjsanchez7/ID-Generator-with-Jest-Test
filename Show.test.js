/**
 * @jest-environment jsdom
 */
import { Show } from './main.js';

test('Show() function sets innerHTML of elements correctly', () => {
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
    <div id="ee"></div>
    `;

  document.getElementById('nme').value = 'Samuel Cj Sanchez Jr.';
  document.getElementById('dob').value = '11/10/2000';
  document.getElementById('scn').value = 'San Carlos City, Pangasinan';
  document.getElementById('dep').value = 'Quality Assurance Analyst Intern';
  document.getElementById('url').value = 'https://example.com/image.png';
  document.getElementById('con').value = '7777777';
  document.getElementById('ea').value = 'zerosanchezsamuel@gmail.com';

  Show();

  expect(document.getElementById('aa').innerHTML).toBe('Samuel Cj Sanchez Jr.');
  expect(document.getElementById('bb').innerHTML).toBe('11/10/2000');
  expect(document.getElementById('cc').innerHTML).toBe('San Carlos City, Pangasinan');
  expect(document.getElementById('dd').innerHTML).toBe('Quality Assurance Analyst Intern');
  expect(document.getElementById('image').src).toBe('https://example.com/image.png');
  expect(document.getElementById('ff').innerHTML).toBe('7777777');
  expect(document.getElementById('gg').innerHTML).toBe('zerosanchezsamuel@gmail.com');
});