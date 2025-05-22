import { View ,Text} from 'react-native';
import Drawers from '~/app/navigations/(drawer)/drawer';
import OpenTabs from '~/app/navigations/(tabs)/tabs';

const dashboard = () => {
  return (
    <>
      <View>
        <Text>TESTST</Text>
        <Drawers />
        <OpenTabs />
      </View>
    </>
  );
};

export default dashboard;
