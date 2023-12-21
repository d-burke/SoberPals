import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const EventList = ({ events }) => {
  return (
    <FlatList
      data={events}
      keyExtractor={(item) => item.event_name}
      renderItem={({ item }) => (
        <View style={styles.eventItem}>
          <Text style={styles.eventName}>{item.event_name}</Text>
          <Text>{item.time}</Text>
          <Text>{item.address}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  eventItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EventList;