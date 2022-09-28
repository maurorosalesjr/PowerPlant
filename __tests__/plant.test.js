import { stateControl, blueFood }  from './../src/js/plant.js';

describe('Plant', () => {

  test('should corrently add soil value of 5 to a plant', () => {
    const newState = stateControl(blueFood);
    expect(newState.soil).toEqual(5)/*what i want to pass*/});
  });

  

