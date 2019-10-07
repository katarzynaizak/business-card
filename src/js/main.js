"use strict";

import browserUpdate from 'browser-update';

browserUpdate({
  required: {e:11,f:-6,o:-6,s:10,c:-6},
  insecure:true,
  unsupported:true,
  reminder:0,
  reminderClosed: 1
});