import { StatusBar, View } from 'react-native';
import Calculator from './components/Calculator';
import { globalStyles } from './styles';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle='light-content'/>
      <Calculator />
    </View>
  );
}
