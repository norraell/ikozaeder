import _ from 'lodash';
import React from 'react';
import { makeStyles } from 'styles';

import { unescapeName } from 'math/polyhedra/names';
import { media, fonts } from 'styles';

// added (RG): changed styles
const styles = makeStyles({
  title: {
    fontFamily: fonts.andaleMono,
    fontSize: '1.8em',
    textAlign: 'center',
    color: '#000',
    margin: 'auto',

    [media.mobile]: {
      fontFamily: fonts.andaleMono,
      fontSize: '1.8em',
      textAlign: 'center',
      color: '#000',
      margin: 'auto',
    },
  },
});

// added (RG): hard-coded title
const Title = ({ name }: { name: string }) => {
  return (
    <h1 className={styles('title')}>i:kozaeder</h1>
  );
};

export default Title;
