import _ from 'lodash';
import polygons, { polygonNames, PolygonMap } from 'math/polygons';

// Colors from d3-scale-chromatic:
// https://github.com/d3/d3-scale-chromatic#schemeCategory10
const defaultColors: PolygonMap<string> = {
  3: '#fff',
  4: '#fff',
  5: '#fff',
  6: '#fff',
  8: '#fff',
  10: '#fff',
};

export interface ConfigInput<T = any> {
  key: string;
  type: string;
  default: T;
  display: string;
}

const colorOptionsList = polygons.map(n => {
  return {
    key: `colors[${n}]`,
    display: `${_.startCase(polygonNames.get(n))} Color`,
    type: 'color',
    default: defaultColors[n],
  };
});

export const configInputs: ConfigInput[] = [
  {
    key: 'showEdges',
    type: 'checkbox',
    default: true,
  },
  {
    key: 'showFaces',
    type: 'checkbox',
    default: true,
  },
  {
    key: 'showInnerFaces',
    type: 'checkbox',
    default: true,
  },
  {
    key: 'opacity',
    type: 'range',
    default: 0.1,
    min: 0,
    max: 1,
    step: 0.01,
  },
  {
    key: 'enableAnimation',
    type: 'checkbox',
    default: true,
  },
  {
    key: 'animationSpeed',
    type: 'select',
    options: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2],
    default: 1,
  },
  ...colorOptionsList,
].map(input => ({
  ...input,
  display: _.get(input, 'display', _.startCase(input.key)),
}));

export const defaultConfig: Record<string, any> = _.reduce(
  configInputs,
  (obj, option) => {
    _.set(obj, option.key, option.default);
    return obj;
  },
  {},
);
