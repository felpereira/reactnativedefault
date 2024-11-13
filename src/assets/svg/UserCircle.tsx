import * as React from 'react';
import { memo } from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';
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
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      width={width}
      {...props}
    >
      <G
        clipPath="url(#a)"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      >
        <Path d="M6.75 9.75a5.25 5.25 0 1 0 10.5 0 5.25 5.25 0 0 0-10.5 0v0ZM18.913 20.876a9.747 9.747 0 0 0-13.826 0" />
        <Path d="M.75 12a11.25 11.25 0 1 0 22.5 0 11.25 11.25 0 0 0-22.5 0v0Z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0h24v24H0z" fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
const Memo = memo(SvgComponent);
export { Memo as UserCircle };
