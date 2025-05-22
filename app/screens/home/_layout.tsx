import { Stack } from 'expo-router';
import React from 'react';

const _layout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="dashboard" options={{ headerTitle: 'Dashboard' }} />
      </Stack>
    </>
  );
};

export default _layout;
