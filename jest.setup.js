/* eslint-disable no-undef */
jest.mock('react-native-vector-icons/FontAwesome', () => 'icon');
jest.mock('react-native-vector-icons/Ionicons', () => 'icon');
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'icon');
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
}));
