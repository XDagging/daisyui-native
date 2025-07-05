import React, { useRef, useState, useEffect } from "react";
import type { CommonProps } from "types";
import { View, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { parseViewport } from "styles/Universal";

interface CarouselProps extends CommonProps {
  height: number; // Viewport height
  focusAmount: number; // Number of items shown on screen at once
}

export default function Carousel(props: CarouselProps) {
  const scrollRef = useRef<ScrollView>(null);

  const itemWidth = parseViewport("x", 100 / props.focusAmount); // width of each item
  const [totalContentWidth, setTotalContentWidth] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);

  const maxIndex = Math.max(Math.floor(totalContentWidth / itemWidth) - 1, 0);
  const currentIndex = Math.round(currentOffset / itemWidth);

  const scrollToIndex = (index: number) => {
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    const newOffset = clampedIndex * itemWidth;

    scrollRef.current?.scrollTo({
      x: newOffset,
      animated: true,
    });

    setCurrentOffset(newOffset);
  };

  const handleManualScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    setCurrentOffset(offsetX);
    setTotalContentWidth(e.nativeEvent.contentSize.width);
  };

//   const handleScrollCommand = (direction: "left" | "right") => {
//     const newIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;
//     scrollToIndex(newIndex);
//   };

  return (
    <View className={`${props.className} p-2 overflow-visible flex-row items-center`}>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemWidth}
        decelerationRate="fast"
        snapToAlignment="start"
        scrollEventThrottle={16}
        onScroll={handleManualScroll}
        style={{
          height: parseViewport("y", props.height),
        }}
        contentContainerStyle={{
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center"
        }}
      >
        {React.Children.map(props.children, (child) =>
          React.isValidElement(child) ? (
            <View style={{  width: itemWidth,
        height: parseViewport("y", props.height),
        justifyContent: "center",
        alignItems: "center"}}>{child}</View>
          ) : (
            child
          )
        )}
      </ScrollView>

      {/* Scroll buttons or programmatic triggers for debugging (optional) */}
      {/* 
      <View className="flex-row justify-between mt-2">
        <Button onPress={() => handleScrollCommand("left")}>←</Button>
        <Button onPress={() => handleScrollCommand("right")}>→</Button>
      </View>
      */}
    </View>
  );
}
