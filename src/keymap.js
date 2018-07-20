export const keyMap = {
  keys: {
    notes: {
      'a#Down': { sequence: 'q', action: 'keydown'},
      'b#Down': { sequence: 'w', action: 'keydown'},
      'c#Down': { sequence: 'e', action: 'keydown'},
      'd#Down': { sequence: 'r', action: 'keydown'},
      'e#Down': { sequence: 't', action: 'keydown'},
      'f#Down': { sequence: 'y', action: 'keydown'},
      'g#Down': { sequence: 'u', action: 'keydown'},

      'aDown': { sequence: 'a', action: 'keydown'},
      'bDown': { sequence: 's', action: 'keydown'},
      'cDown': { sequence: 'd', action: 'keydown'},
      'dDown': { sequence: 'f', action: 'keydown'},
      'eDown': { sequence: 'g', action: 'keydown'},
      'fDown': { sequence: 'h', action: 'keydown'},
      'gDown': { sequence: 'j', action: 'keydown'},
      
      'a_Down': { sequence: 'z', action: 'keydown'},
      'b_Down': { sequence: 'x', action: 'keydown'},
      'c_Down': { sequence: 'c', action: 'keydown'},
      'd_Down': { sequence: 'v', action: 'keydown'},
      'e_Down': { sequence: 'b', action: 'keydown'},
      'f_Down': { sequence: 'n', action: 'keydown'},
      'g_Down': { sequence: 'm', action: 'keydown'},

      'a#Up': { sequence: 'q', action: 'keyup'},
      'b#Up': { sequence: 'w', action: 'keyup'},
      'c#Up': { sequence: 'e', action: 'keyup'},
      'd#Up': { sequence: 'r', action: 'keyup'},
      'e#Up': { sequence: 't', action: 'keyup'},
      'f#Up': { sequence: 'y', action: 'keyup'},
      'g#Up': { sequence: 'u', action: 'keyup'},

      'aUp': { sequence: 'a', action: 'keyup'},
      'bUp': { sequence: 's', action: 'keyup'},
      'cUp': { sequence: 'd', action: 'keyup'},
      'dUp': { sequence: 'f', action: 'keyup'},
      'eUp': { sequence: 'g', action: 'keyup'},
      'fUp': { sequence: 'h', action: 'keyup'},
      'gUp': { sequence: 'j', action: 'keyup'},
      
      'a_Up': { sequence: 'z', action: 'keyup'},
      'b_Up': { sequence: 'x', action: 'keyup'},
      'c_Up': { sequence: 'c', action: 'keyup'},
      'd_Up': { sequence: 'v', action: 'keyup'},
      'e_Up': { sequence: 'b', action: 'keyup'},
      'f_Up': { sequence: 'n', action: 'keyup'},
      'g_Up': { sequence: 'm', action: 'keyup'}
    },
    octaves: {
      '1': { sequence: '1', action: 'keypress'},
      '2': { sequence: '2', action: 'keypress'},
      '3': { sequence: '3', action: 'keypress'},
      '4': { sequence: '4', action: 'keypress'},
      '5': { sequence: '5', action: 'keypress'},
      '6': { sequence: '6', action: 'keypress'},
      '7': { sequence: '7', action: 'keypress'}
    }
  },
  handlers: {
    notes: {
      'a#Down': (event) => this.onKeyDown(event),
      'b#Down': (event) => this.onKeyDown(event),
      'c#Down': (event) => this.onKeyDown(event),
      'd#Down': (event) => this.onKeyDown(event),
      'e#Down': (event) => this.onKeyDown(event),
      'f#Down': (event) => this.onKeyDown(event),
      'g#Down': (event) => this.onKeyDown(event),

      'aDown': (event) => this.onKeyDown(event),
      'bDown': (event) => this.onKeyDown(event),
      'cDown': (event) => this.onKeyDown(event),
      'dDown': (event) => this.onKeyDown(event),
      'eDown': (event) => this.onKeyDown(event),
      'fDown': (event) => this.onKeyDown(event),
      'gDown': (event) => this.onKeyDown(event),
      
      'a_Down': (event) => this.onKeyDown(event),
      'b_Down': (event) => this.onKeyDown(event),
      'c_Down': (event) => this.onKeyDown(event),
      'd_Down': (event) => this.onKeyDown(event),
      'e_Down': (event) => this.onKeyDown(event),
      'f_Down': (event) => this.onKeyDown(event),
      'g_Down': (event) => this.onKeyDown(event),

      'a#Up': (event) => this.onKeyUp(event),
      'b#Up': (event) => this.onKeyUp(event),
      'c#Up': (event) => this.onKeyUp(event),
      'd#Up': (event) => this.onKeyUp(event),
      'e#Up': (event) => this.onKeyUp(event),
      'f#Up': (event) => this.onKeyUp(event),
      'g#Up': (event) => this.onKeyUp(event),

      'aUp': (event) => this.onKeyUp(event),
      'bUp': (event) => this.onKeyUp(event),
      'cUp': (event) => this.onKeyUp(event),
      'dUp': (event) => this.onKeyUp(event),
      'eUp': (event) => this.onKeyUp(event),
      'fUp': (event) => this.onKeyUp(event),
      'gUp': (event) => this.onKeyUp(event),
      
      'a_Up': (event) => this.onKeyUp(event),
      'b_Up': (event) => this.onKeyUp(event),
      'c_Up': (event) => this.onKeyUp(event),
      'd_Up': (event) => this.onKeyUp(event),
      'e_Up': (event) => this.onKeyUp(event),
      'f_Up': (event) => this.onKeyUp(event),
      'g_Up': (event) => this.onKeyUp(event),
    },
    octaves: {
      '1': (event) => this.onKeyDown(event),
      '2': (event) => this.onKeyDown(event),
      '3': (event) => this.onKeyDown(event),
      '4': (event) => this.onKeyDown(event),
      '5': (event) => this.onKeyDown(event),
      '6': (event) => this.onKeyDown(event),
      '7': (event) => this.onKeyDown(event)
    }
  }
}
