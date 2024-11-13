import * as React from 'react';
import {memo} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const SvgComponent = (props: SvgProps) => {
  const {stroke = '#545B66', height = 24, width = 24} = props;

  return (
    <Svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      {...props}>
      <Path
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22.868 8.947 12 .747l-10.878 8.2c-.225.208-.36.495-.377.8V22.27c.002.54.439.976.978.978h6.522V18a3.75 3.75 0 1 1 7.5 0v5.25h6.521a.982.982 0 0 0 .98-.978V9.747a1.18 1.18 0 0 0-.378-.8Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const Memo = memo(SvgComponent);
export {Memo as House};
