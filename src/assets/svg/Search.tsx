import * as React from 'react';
import { memo } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => {
  const { height = 25, stroke = '#545B66', width = 25 } = props;

  return (
    <Svg
      fill="none"
      height={height}
      viewBox="0 0 25 25"
      width={width}
      {...props}>
      <Path
        clipRule="evenodd"
        d="M14.837 18.98c4.13-1.74 6.056-6.471 4.3-10.566C17.383 4.32 12.61 2.411 8.48 4.151c-4.13 1.74-6.056 6.47-4.3 10.565 1.755 4.095 6.527 6.004 10.658 4.263Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <Path
        d="m17.404 17.261 6.303 6.249"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Svg>
  );
};
const Memo = memo(SvgComponent);
export { Memo as Search };
