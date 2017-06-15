/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      id: {
        unique: true,
        autoIncrement: true,
        primaryKey: true
      },
      name: 'string',
      age: 'string',
      gender: 'string',
      id_game: 'string'
  }
};

