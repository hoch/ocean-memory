import halfmoon from 'halfmoon';

export const UPLOAD_FILE = 'UPLOAD_FILE';
export const ADD_TRACK = 'ADD_TRACK';
export const SET_SETTINGS = 'SET_SETTINGS';
export const SET_GLOBAL_SETTINGS = 'SET_GLOBAL_SETTINGS';
export const FOCUS_WINDOW = 'FOCUS_WINDOW';
export const DELETE_TRACK = 'DELETE_TRACK';
export const SET_DATA = 'SET_DATA';

export const INITIAL_STATE = {
  files: [],
  tracks: [],
  globalSettings: {
    bpm: 120,
    key: 'C',
    timesig: [4, 4],
    dark: ['dark-mode', 'not-set'].includes(halfmoon.getPreferredMode()),
    channels: []
  },
  windows: []
};

export const INITIAL_SETTINGS = {
  mute: false,
  volume: 100,
  pan: 0,
  continuous: false,
  channel: []
};

export const INITIAL_CHANNEL_SETTINGS = {
  continuous: false,
  tracks: [],
  features: [
    {
      name: 'Volume',
      controller: -1
    },
    {
      name: 'Pitch',
      controller: -1
    },
    {
      name: 'Pan',
      controller: -1
    },
    {
      name: 'Tempo',
      controller: -1
    }
  ]
};
