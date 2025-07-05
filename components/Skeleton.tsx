import { useEffect, useState } from "react";
import { View, LayoutChangeEvent, StyleSheet } from "react-native";
import type { CommonProps } from "types";
import Animated, {
  withRepeat,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { LightTheme } from "themes";

type Dimens = {
  width: number;
  height: number;
};

export default function Skeleton(props: CommonProps) {
  const placement = useSharedValue<number>(0);
  const duration = 1800;
  const [componentDimensions, setComponentDimensions] = useState<Dimens>({
    width: 0,
    height: 0,
  });

  

    useEffect(() => {
    if (componentDimensions.width !== 0) {
      placement.value = withRepeat(
        withTiming(componentDimensions.width, { duration }),
        -1
      );
    }
  }, [componentDimensions]);

  const shimmerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: placement.value }],
  }));

  const onLayout = (event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setComponentDimensions({ width, height });
  };

  return (
    <View
      onLayout={onLayout}
      className={`${props.className} bg-base-300 rounded-box relative overflow-hidden`}
    >
      {componentDimensions.width > 0 && componentDimensions.height > 0 && (
        <Animated.View
          style={[
            shimmerStyle,
            StyleSheet.absoluteFill,
            {
              width: componentDimensions.width * 1.5,
              height: componentDimensions.height *1.5,
            },
          ]}
        >
          <LinearGradient
            colors={[
              "transparent",
              LightTheme["base-100"],
              "transparent",
            ]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{
              flex: 1,
              transform: [{ rotate: "20deg" }],
            }}
          />
        </Animated.View>
      )}

      {props.children}
    </View>
  );
}
