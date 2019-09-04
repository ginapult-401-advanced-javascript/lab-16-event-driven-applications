'use strict';

const events = require('./events.js');

events.on('save', handleSave);

function handleSave(payload) {
    console.log(`Record ${payload.id} was saved`);
    // go to cache and delete/refresh
    events.emit('cache-update', {id:payload.id});
}
