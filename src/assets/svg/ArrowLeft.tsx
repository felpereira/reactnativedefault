import * as React from 'react';
import { memo } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => {
  const {
    height = 24,
    stroke = '#171C26',
    strokeWidth = 1.5,
    width = 24,
  } = props;

  return (
    <Svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      {...props}>
      <Path
        d="M16.25 23.25 5.53 12.53a.75.75 0 0 1 0-1.06L16.25.75"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};
const Memo = memo(SvgComponent);
export { Memo as ArrowLeft };
