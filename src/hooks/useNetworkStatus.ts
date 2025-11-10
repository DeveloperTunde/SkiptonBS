import { useState, useEffect } from "react";
import NetInfo from "@react-native-community/netinfo";
import { useFocusEffect } from "@react-navigation/native";

export const useNetworkStatus = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(true);

  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    // Get initial network state
    NetInfo.fetch().then((state) => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  // Refresh network status when screen comes into focus
  useFocusEffect(() => {
    NetInfo.fetch().then((state) => {
      setIsConnected(state.isConnected);
    });
  });

  return isConnected;
};
