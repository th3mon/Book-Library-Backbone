// site/js/models/book.js
/* global Backbone */
'use strict';

var app = app || {};
app.Book = Backbone.Model.extend({
  defaults: {
    coverImage: 'img/placeholder.png',
    title: 'No title',
    author: 'Unknow',
    releaseDate: 'Unknow',
    keywords: 'None'
  },

  parse: function( response ) {
    response.id = response._id;
    return response;
  }
});
