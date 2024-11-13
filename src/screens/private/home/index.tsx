import * as React from 'react';
import { ReactNode } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { LineChart, lineDataItem } from 'react-native-gifted-charts';

import { Pointer } from '../../../assets/svg/Pointer';
import { BottomTabStackScreenProps } from '../../../routes';

const Home = (props: BottomTabStackScreenProps<'Home'>): ReactNode => {
  const pointer = React.useCallback(() => {
    return <Pointer style={styles.pointer} />;
  }, []);

  const pointerLabelComponent = React.useCallback((value: lineDataItem[]) => {
    return (
      <View style={[styles.pointerContent, { left: value[0].textShiftX }]}>
        <Text style={styles.texto}>{value[0].dataPointText}</Text>
      </View>
    );
  }, []);

  function formatToBRL(value: number | string): string {
    return value.toLocaleString('pt-BR', {
      currency: 'BRL',
      style: 'currency',
    });
  }

  const { navigation } = props;

  const lineData: lineDataItem[] = [
    {
      dataPointText: formatToBRL(12672215),
      label: '1',
      textShiftX: 35,
      value: 12672215,
    },
    {
      dataPointText: formatToBRL(8676848),
      label: '2',
      textShiftX: 25,
      value: 8676848,
    },
    { dataPointText: formatToBRL(4805721), label: '3', value: 4805721 },
    { dataPointText: formatToBRL(10357496), label: '4', value: 10357496 },
    { dataPointText: formatToBRL(11241054), label: '5', value: 11241054 },
    { dataPointText: formatToBRL(10515052), label: '6', value: 10515052 },
    { dataPointText: formatToBRL(11370653), label: '7', value: 11370653 },
    { dataPointText: formatToBRL(12899290), label: '8', value: 12899290 },
    { dataPointText: formatToBRL(14492792), label: '9', value: 14492792 },
    {
      dataPointText: formatToBRL(5383433),
      label: '10',
      textShiftX: -25,
      value: 5383433,
    },
    {
      dataPointText: formatToBRL(11571269),
      label: '11',
      textShiftX: -45,
      value: 11571269,
    },
    {
      dataPointText: formatToBRL(12761446),
      label: '12',
      textShiftX: -70,
      value: 12761446,
    },
  ];
  const lineData2: lineDataItem[] = [
    {
      dataPointText: formatToBRL(12169727),
      label: '1',
      textShiftX: 35,
      value: 12169727,
    },
    {
      dataPointText: formatToBRL(11648729),
      label: '2',
      textShiftX: 25,
      value: 11648729,
    },
    { dataPointText: formatToBRL(6065202), label: '3', value: 6065202 },
    { dataPointText: formatToBRL(9743339), label: '4', value: 9743339 },
    { dataPointText: formatToBRL(11221293), label: '5', value: 11221293 },
    { dataPointText: formatToBRL(11949365), label: '6', value: 11949365 },
    { dataPointText: formatToBRL(12259971), label: '7', value: 12259971 },
    { dataPointText: formatToBRL(13866466), label: '8', value: 13866466 },
    { dataPointText: formatToBRL(16246322), label: '9', value: 16246322 },
    {
      dataPointText: formatToBRL(657570),
      label: '10',
      textShiftX: -25,
      value: 657570,
    },
    {
      dataPointText: formatToBRL(11835224),
      label: '11',
      textShiftX: -45,
      value: 11835224,
    },
    {
      dataPointText: formatToBRL(11593024),
      label: '12',
      textShiftX: -70,
      value: 11593024,
    },
  ];

  const maxValue = Math.max(...lineData.map(x => x.value));

  const formatNumber = (num: number) => {
    if (num >= 1_000_000_000) {
      return `${Math.floor(num / 1_000_000_000)}B`;
    }
    if (num >= 1_000_000) {
      return `${Math.floor(num / 1_000_000)}M`;
    }
    if (num >= 1_000) {
      return `${Math.floor(num / 1_000)}K`;
    }
    return num.toString();
  };

  return (
    <View style={styles.content}>
      <LineChart
        adjustToWidth={true}
        color="#2DA3C3"
        data={lineData}
        data2={lineData2}
        endSpacing={25}
        height={140}
        maxValue={maxValue * 1.3}
        noOfSections={4}
        thickness={3}
        verticalLinesColor={'#E0EBEE'}
        width={280}
        xAxisColor="#ECECEC"
        xAxisLabelTextStyle={styles.yAxisTextStyle}
        yAxisColor="#ECECEC"
        yAxisOffset={600}
        yAxisTextStyle={styles.yAxisTextStyle}
        yAxisThickness={1}
        hideDataPoints
        hideOrigin
        hideRules
        showVerticalLines
        formatYLabel={value => {
          console.log(value);
          return formatNumber(Number(value));
        }}
        lineSegments2={[
          {
            color: '#D2D8DF',
            endIndex: 99,
            startIndex: 0,
            strokeDashArray: [4, 1],
          },
        ]}
        pointerConfig={{
          // pointerStripColor: '#545B66',
          // pointerStripWidth: 2,
          pointerComponent: pointer,
          // activatePointersOnLongPress: true,

          pointerLabelComponent: pointerLabelComponent,
          // barTouchable: true,
          // horizontalStripConfig: {
          //   color: 'red',
          //   strokeDashArray: [5, 55],
          // },
        }}
      />

      <Button
        title="Privado"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    padding: 1,
  },
  pointer: { marginLeft: -7, marginTop: -5 },
  pointerContent: {
    alignItems: 'center',
    backgroundColor: '#065A71',
    borderRadius: 40,
    flex: 1,
    height: 34,
    justifyContent: 'center',
    marginLeft: -40,
    width: 120,
  },
  texto: { color: '#FFFFFF', fontSize: 12 },

  yAxisTextStyle: { color: '#9C9C9C', fontWeight: '500' },
});

export default Home;
