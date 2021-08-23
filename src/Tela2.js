import React from "react";
import { View, Text, Image } from "react-native";

import { useRoute } from "@react-navigation/native";

const Tela2 = () => {
  const route = useRoute();

  const data = route.params.data;

  return (
    <View>
      <Image
        source={{ uri: "https://image.tmdb.org/t/p/w500" + data.backdrop_path }}
        style={{ width: 150, height: 300 }}
      />
      <Text>FILME: {data.title}</Text>
      <Text>ANO: {data.release_date}</Text>
      <Text>DESCRIÇÃO: {data.overview}</Text>
    </View>
  );
};

export default Tela2;
