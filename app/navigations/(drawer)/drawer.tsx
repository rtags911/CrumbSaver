import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const Drawers = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="Profile" options={{ title: 'Profile' }} />
        <Drawer.Screen name="Settings" options={{ title: 'Settings' }} />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default Drawers;
