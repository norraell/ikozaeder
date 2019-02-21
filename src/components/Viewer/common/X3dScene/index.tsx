import React from 'react';
import X3dScene from './X3dScene';
import X3dPolyhedron from './X3dPolyhedron';

export default ({
  label,
  // used for setting selected or hovered vertex
  setVertex,
}: {
  label: string;
  // optional because async magic in background?
  setVertex?: Function;
}) => {
  return (
    <X3dScene label={label}>
      <X3dPolyhedron setVertex={setVertex ? setVertex : () => {}} />
    </X3dScene>
  );
};
