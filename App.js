import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigation/rootNavigator';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './src/domain/context/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RootNavigator/>
      </AuthProvider>
      <StatusBar style='light'/>
    </NavigationContainer>
  );
}
