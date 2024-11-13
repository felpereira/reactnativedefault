import * as React from 'react';
import { memo } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const SvgComponent = (props: SvgProps) => {
  const { height = 40, width = 103 } = props;

  return (
    <Svg
      fill="none"
      height={height}
      viewBox="0 0 103 40"
      width={width}
      {...props}>
      <Path
        d="M20 0C8.954 0 0 8.953 0 20.003 0 31.052 8.954 40 20 40s20-8.958 20-19.997C40 8.963 31.046 0 20 0Zm12.003 27.167a4.856 4.856 0 0 1-4.855 4.856H12.853a4.855 4.855 0 0 1-4.855-4.856v-3.145l8.002-4v4h16.003v3.145Zm0-11.146-8.002 4v-4H7.998v-3.146a4.855 4.855 0 0 1 4.855-4.855h14.295a4.857 4.857 0 0 1 4.855 4.855v3.146Z"
        fill="#24B5C8"
      />
      <Path
        d="M71.543 13.414h3.199l5.595 7.673v-7.673h3.199v12.983h-3.199l-5.595-7.672v7.672h-3.199V13.414Z"
        fill="#010101"
      />
      <Path
        d="M50.142 16.294v-2.919h7.813v2.919h3.22l-6.44 7.274H61.6v2.87H50v-2.44l6.865-7.704h-6.723Z"
        fill="#010101"
        stroke="#010101"
      />
      <Path
        d="M58.016 16.236v-2.861h11.411v2.432L62.59 23.53h6.932v2.909h-7.923v-2.956h-3.3l6.46-7.247h-6.743Z"
        fill="#24B5C8"
        stroke="#24B5C8"
      />
      <Path
        d="m92.671 23.203 1.871 1.91c-.86.887-2.526 1.512-3.967 1.512-2.994 0-5.202-2.136-5.202-5.141 0-2.967 2.133-5.084 5.052-5.084 3.07 0 4.866 2.268 4.866 5.991h-6.906c.3.983 1.066 1.644 2.096 1.644.749 0 1.61-.321 2.19-.832Zm-4.248-2.758h3.93c-.262-.889-.917-1.474-1.871-1.474-.955 0-1.724.567-2.059 1.474ZM102.999 25.698c-.58.548-1.534.926-2.357.926-1.816 0-3.088-1.304-3.088-3.137V19.18H96.28v-2.553h1.273v-2.684h3.031v2.684h2.003v2.551h-2.003v3.723c0 .624.373 1.058.88 1.058.355 0 .711-.132.898-.323l.636 2.062Z"
        fill="#010101"
      />
    </Svg>
  );
};
const Memo = memo(SvgComponent);
export { Memo as Logo };
