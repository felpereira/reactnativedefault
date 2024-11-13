import * as React from 'react';
import Svg, { Circle, Defs, G, SvgProps } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" height={24} width={24} {...props}>
    <G filter="url(#a)">
      <Circle cx={12} cy={10} fill="#2DA3C3" r={8} />
      <Circle cx={12} cy={10} r={6.5} stroke="#fff" strokeWidth={3} />
    </G>
    <Defs />
  </Svg>
);
const Memo = memo(SvgComponent);
export { Memo as Pointer };
