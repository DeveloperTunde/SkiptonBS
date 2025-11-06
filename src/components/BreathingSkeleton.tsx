import React, { useEffect } from "react";
import { Animated } from "react-native";

interface BreathingSkeletonProps {
  children: React.ReactNode;
  duration?: number;
}

const BreathingSkeleton: React.FC<BreathingSkeletonProps> = ({
  children,
  duration = 1500,
}) => {
  const opacity = new Animated.Value(0.3);

  useEffect(() => {
    const breathingAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.7,
          duration: duration,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: duration,
          useNativeDriver: true,
        }),
      ])
    );

    breathingAnimation.start();

    return () => {
      breathingAnimation.stop();
    };
  }, [opacity, duration]);

  return <Animated.View style={{ opacity }}>{children}</Animated.View>;
};

export default BreathingSkeleton;
