import SynthJS from 'synth-javascript';

export default function reducer(state={
  detune: 0,
  gain: 500,
  distortion: 0,
  reverb: 0.01,
  frequencyData: [],
  pressKeyCount: 0,
  currentOctave: 4,
  SynthJS: new SynthJS({}),
  waveformInterval: null,
  keyboardInput: []
}, action) {

  switch (action.type) {
    case 'SET_DISTORTION':
      return {
        ...state,
        distortion: action.payload
      }

    case 'SET_GAIN':
      return {
        ...state,
        gain: action.payload
      }
    case 'SET_DETUNE':
      return {
        ...state,
        detune: action.payload
      }

    case 'SET_REVERB':
      return {
        ...state,
        detune: action.payload
      }

    case 'SET_FREQUENCY_DATA':
      return {
        ...state,
        frequencyData: action.payload
      }

    case 'SET_OCTAVE':
      return {
        ...state,
        octave: action.payload
      }

    case 'KEYBOARD_NOTE_DOWN':
      return {
        ...state,
        pressKeyCount: action.payload.pressKeyCount,
        SynthJS: action.payload.SynthJS,
        waveformInterval: action.payload.waveformInterval,
        keyboardInput: action.payload.keyboardInput
      }

    case 'KEYBOARD_NOTE_UP':
      return {
        ...state,
        pressKeyCount: action.payload.pressKeyCount,
        SynthJS: action.payload.SynthJS,
        waveformInterval: action.payload.waveformInterval,
        keyboardInput: action.payload.keyboardInput
      }

    default:
  }
}