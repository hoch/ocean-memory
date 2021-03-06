import { INITIAL_CHANNEL_SETTINGS } from './state';

export const TRACK_CONTROLS_WIDTH = 4;
export const TRACK_WIDTH = 12 - TRACK_CONTROLS_WIDTH;

export const FEATURES = INITIAL_CHANNEL_SETTINGS.features.map(f => f.name);

export const KEYS = {
  'C': 'C Major',
  'c': 'C Minor',
  'C#': 'C# Major',
  'c#': 'C# Minor',
  'D': 'D Major',
  'd': 'D Minor',
  'Eb': 'E&#9837; Major',
  'eb': 'E&#9837; Minor',
  'E': 'E Major',
  'e': 'E Minor',
  'F': 'F Major',
  'f': 'F Minor',
  'F#': 'F# Major',
  'f#': 'F# Minor',
  'G': 'G Major',
  'g': 'G Minor',
  'Ab': 'A&#9837; Major',
  'ab': 'A&#9837; Minor',
  'A': 'A Major',
  'a': 'A Minor',
  'Bb': 'B&#9837; Major',
  'bb': 'B&#9837; Minor',
  'B': 'B Major',
  'b': 'B Minor',
  'chromatic': 'Chromatic',
  'whole': 'Whole Tone',
  'penta': 'Pentatonic', // TODO: More keys
  'harmonic': 'Harmonic Minor', // TODO: More keys
  'none': 'None'
};

export const SCALES = {
  'C': ['c', 'd', 'e', 'f', 'g', 'a', 'b'],
  'c': ['c', 'd', 'eb', 'f', 'g', 'ab', 'bb'],
  'C#': ['c#', 'd#', 'e#', 'f#', 'g#', 'a#', 'b#'],
  'c#': ['c#', 'd#', 'e', 'f#', 'g#', 'a', 'b'],
  'D': ['d', 'e', 'f#', 'g', 'a', 'b', 'c#'],
  'd': ['d', 'e', 'f', 'g', 'a', 'bb', 'c'],
  'Eb': ['eb', 'f', 'g', 'ab', 'bb', 'c', 'd'],
  'eb': ['eb', 'f', 'gb', 'ab', 'bb', 'cb', 'db'],
  'E': ['e', 'f#', 'g#', 'a', 'b', 'c#', 'd#'],
  'e': ['e', 'f#', 'g', 'a', 'b', 'c', 'd'],
  'F': ['f', 'g', 'a', 'bb', 'c', 'd', 'e'],
  'f': ['f', 'g', 'ab', 'bb', 'c', 'db', 'eb'],
  'F#': ['f#', 'g#', 'a#', 'b', 'c#', 'd#', 'e'],
  'f#': ['f#', 'g#', 'a', 'b', 'c#', 'd', 'e'],
  'G': ['g', 'a', 'b', 'c', 'd', 'e', 'f#'],
  'g': ['g', 'a', 'bb', 'c', 'd', 'eb', 'f'],
  'Ab': ['ab', 'bb', 'c', 'db', 'eb', 'f', 'g'],
  'ab': ['ab', 'bb', 'cb', 'db', 'eb', 'fb', 'gb'],
  'A': ['a', 'b', 'c#', 'd', 'e', 'f#', 'g#'],
  'a': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  'Bb': ['bb', 'c', 'd', 'eb', 'f', 'g', 'a'],
  'bb': ['bb', 'c', 'db', 'eb', 'f', 'gb', 'ab'],
  'B': ['b', 'c#', 'd#', 'e', 'f#', 'g#', 'a#'],
  'b': ['b', 'c#', 'd', 'e', 'f#', 'g', 'a'],
  'chromatic': ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'],
  'whole': ['c', 'd', 'e', 'f#', 'g#', 'a#'],
  'penta': ['c', 'd', 'e', 'g', 'a'], // TODO: More keys
  'harmonic': ['a', 'b', 'c', 'd', 'e', 'f', 'g#'], // TODO: More keys
  'none': [],
}
