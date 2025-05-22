import { Stack } from 'expo-router';

import { YStack } from 'tamagui';
import { Container, Main, Title } from '../tamagui.config';

export default function NotFoundScreen() {
  return (
    <Container>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Main>
        <YStack>
          <Title>{"This screen doesn't exist."}</Title>
        </YStack>
      </Main>
    </Container>
  );
}
