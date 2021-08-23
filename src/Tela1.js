import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";

import axios from "axios";

import FlatComponent from "./components/FlatComponent";

function Tela1() {
  const [data, setData] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    getDataUsingSimpleGetCall();
  });

  function getDataUsingSimpleGetCall() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=356162b99ca6e8301a3b71b9d28beea8&language=pt-BR&page=1"
      )
      .then(function (response) {
        // handle success
        setData(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error.message);
      });
  }

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <FlatComponent data={item} />}
      />
    </View>
  );
}

export default Tela1;
