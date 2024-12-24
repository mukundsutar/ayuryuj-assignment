import { createBox } from "@shopify/restyle";
import * as React from "react";
import { forwardRef } from "react";
import type { GestureResponderEvent } from "react-native";
import { Pressable } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import type { THEME } from "./config";

export const Box = createBox<THEME>();
export type BoxProps = React.ComponentProps<typeof Box>;

export const AnimatedBox = Animated.createAnimatedComponent(Box);
export type AnimatedBoxProps = React.ComponentProps<typeof AnimatedBox>;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const PressableBoxPrimitive = createBox<
  THEME,
  React.ComponentProps<typeof AnimatedPressable>
>(AnimatedPressable);

export type PressableBoxProps = React.ComponentPropsWithoutRef<
  typeof PressableBoxPrimitive
>;

export const PressableBox = forwardRef<unknown, PressableBoxProps>(
  ({ style, onPressIn, onPressOut, disabled, ...props }, ref) => {
    const pressed = useSharedValue(false);
    const animStyle = useAnimatedStyle(() => {
      return {
        opacity: disabled
          ? 0.5
          : withTiming(pressed.value ? 0.75 : 1, {
              easing: Easing.inOut(Easing.quad),
              duration: 100,
            }),
      };
    });

    function handlePressIn(e: GestureResponderEvent) {
      pressed.value = true;
      if (typeof onPressIn === "function") {
        onPressIn(e);
      }
    }

    function handlePressOut(e: GestureResponderEvent) {
      pressed.value = false;
      if (typeof onPressOut === "function") {
        onPressOut(e);
      }
    }

    return (
      <PressableBoxPrimitive
        {...props}
        ref={ref}
        disabled={disabled}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[style, animStyle]}
      />
    );
  },
);

PressableBox.displayName = "PressableBox";
