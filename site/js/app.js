// site/js/app.js
/* jshint scripturl: true */
/* global $ */
'use strict';

var app = app || {};

$(function() {
  $( '#releaseDate' ).datepicker();
  new app.LibraryView();
});
