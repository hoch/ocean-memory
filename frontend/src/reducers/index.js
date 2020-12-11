import {
  UPLOAD_FILE,
  ADD_TRACK,
  ADJUST_SETTINGS,
  ADJUST_GLOBAL_SETTINGS, FOCUS_WINDOW, DELETE_TRACK
} from '../constants/action-types';

const initialState = {
  files: [],
  tracks: [],
  settings: [],
  globalSettings: {
    bpm: 120,
    key: 'C',
    timesig: [4, 4]
  },
  windows: []
};

const initialSettings = {
  mute: false,
  volume: 100,
  pan: 0,
  pitch: 0,
  rhythm: {
    size: 4,
    type: 0
  },
  chords: -100,
  dynamics: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_FILE:
      return Object.assign({}, state, {
        files: [...state.files, action.payload]
      });
    case ADD_TRACK:
      return Object.assign({}, state, {
        tracks: [...state.tracks, action.payload],
        settings: [...state.settings, { i: state.settings.length, settings: { ...initialSettings } }]
      });
    case ADJUST_SETTINGS:
      return Object.assign({}, state, {
        settings: state.settings.map(({ i, settings }) => {
          if (action.payload.i === i) {
            return ({
              i,
              settings: action.payload.settings
            });
          }
          return ({ i, settings });
        })
      });
    case ADJUST_GLOBAL_SETTINGS:
      return Object.assign({}, state, {
        globalSettings: action.payload
      });
    case FOCUS_WINDOW:
      const index = state.windows.indexOf(action.payload);
      if (index >= 0) {
        return Object.assign({}, state, {
          windows: [action.payload, ...state.windows.slice(0, index), ...state.windows.slice(index + 1, state.windows.length)]
        });
      }
      return Object.assign({}, state, {
        windows: [action.payload, ...state.windows]
      });
    case DELETE_TRACK:
      let i = 0;
      for (const t of state.tracks) {
        if (action.payload.file === t.file && action.payload.name === t.name) {
          break;
        }
        i++;
      }
      return Object.assign({}, state, {
        tracks: [...state.tracks.slice(0, i), ...state.tracks.slice(i + 1, state.tracks.length)],
        settings: [...state.settings.slice(0, i), ...state.settings.slice(i + 1, state.settings.length)]
      });
    default:
      return state;
  }
};

export default rootReducer;