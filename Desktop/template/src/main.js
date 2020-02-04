import './styles.css';
import { pingPong } from './ping-pong';

$(document).ready(function () {
  $('#ping-pong-form').submit(function (event) {
    event.preventDefault();

  });