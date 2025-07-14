import React, {
  ReactNode,
  ReactElement,
  cloneElement,
  isValidElement,
} from "react";
import { Linking, Pressable } from "react-native";
import type { CommonProps } from "types";

interface LinkProps extends CommonProps {
  url: string;
  children: ReactNode;
}

export default function Link(props: LinkProps) {
  const openLink = async () => {
    try {
      const supported = await Linking.canOpenURL(props.url);
      if (supported) {
        await Linking.openURL(props.url);
      } else {
        console.log("This Link isn't supported");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const styleToApply = "text-info underline"; // tailwind/nativewind className

  const applyStyleToChildren = (children: ReactNode): ReactNode => {
  return React.Children.map(children, (child) => {
    if (isValidElement(child)) {
      const element = child as ReactElement<any>; // 👈 Cast to unlock props
      const existingClass = element.props.className || "";

      return cloneElement(element, {
        ...element.props,
        className: `${existingClass} ${styleToApply}`.trim(),
        children: applyStyleToChildren(element.props.children),
      });
    }

    return child; // Leave primitives (string, number, etc.) untouched
  });
};


  return (
    <Pressable className={`${props.className}`} onPress={openLink}>
      {applyStyleToChildren(props.children)}
    </Pressable>
  );
}
