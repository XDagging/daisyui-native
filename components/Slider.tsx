import SliderComponent from '@react-native-community/slider';
import type { CommonProps } from 'types';


interface SliderProps extends CommonProps {
    value: number;
    minValue?: number;
    maxValue?: number;

    onChange: (e: number) => void;
}


export default function Slider(props: SliderProps) {
  return (
    <SliderComponent
      className={`${props.className} bg-primary`}
      minimumValue={props?.minValue}
      maximumValue={props?.maxValue}
      onValueChange={(e: number) => {props.onChange(e)}}
      value={props.value}
    />
  );
}