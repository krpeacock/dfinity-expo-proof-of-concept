import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { idlFactory as counter_idl, canisterId as counter_id } from './.dfx/local/canisters/counter/counter.js';
import {Actor, HttpAgent} from '@dfinity/agent'


const agent = new HttpAgent({host: "http://localhost:8000"});
agent.fetchRootKey();
const counter = Actor.createActor(counter_idl, { agent, canisterId: counter_id });

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <StatusBar style="auto" />
      <Button title="Counter" onPress={async()=>{
        const newCount = await counter.incr();
        setCount(Number(newCount));
      }}><Text>Click Me</Text></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
