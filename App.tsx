import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native';
import { Button, Text } from './components/content';
import colorsStyles from './styles/colors.styles';


export default function App() {
  return (
    <View style={styled.container}>
      <Text type="title">Title Test</Text>
      <Text type="subtitle">SubTitle Test</Text>
      <Text type="caption">Caption Test</Text>
      <Text type="body">Body Test</Text>
      <Button type="active">Active Test</Button>
      <Button type="disable">Disable Test</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorsStyles.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});