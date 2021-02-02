import React from "react";
import { Text, View, FlatList } from "react-native";

export default function HistoryScreen({ route }) {
  const { history } = route.params;

  return (
    <View
      style={{
        alignItems: "center",
        height: 100,
      }}
    >
      <FlatList data={history} renderItem={({ item }) => <Text>{item}</Text>} />
    </View>
  );
}
