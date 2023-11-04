import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View>
        <View>
          <TextInput placeholder='Type Your Name?'/>
          <Button title='Add Goal' />
        </View>
      <View>
        <Text>List Of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
