import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import axios from "axios";
import { rgb, TYPES_COLORS } from "../tools/colors";
import CardDetails from "../components/CardDetails";
import CardStats from "../components/CardStats";

const screenWidth = Dimensions.get("window").width;

const DetailsScreen = ({ name}) => {
  const [details, setDetails] = useState(null);
  // const name = route.params.name;

  const getDetails = async () => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      //Need to fetch evolution chain
      setDetails({
        id: res.data.id,
        stats: res.data.stats,
        name: res.data.name,
        species: res.data.species,
        evolution_chain: res.data.evolution_chain,
        height: res.data.height,
        weight: res.data.weight,
        types: res.data.types,
        image: res.data.sprites.other["official-artwork"].front_default,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  if (!details) {
    return (
      <ActivityIndicator
        style={styles.indicator}
        size="large"
        color="#00ff00"
      />
    );
  }

  const mainType = details.types[0].type.name;
  const colorType = TYPES_COLORS[mainType] || TYPES_COLORS["normal"];
  const backgroundColor = rgb(colorType.r, colorType.g, colorType.b);

  return (
    <>
      <View style={styles.scrollViewContainer}>
        <ScrollView
          contentContainerStyle={[styles.contentContainer, { backgroundColor }]}
        >
          <View style={styles.scrollViewView}>
            <Image
              style={styles.image}
              source={{
                uri: details.image,
              }}
            />
            <CardDetails
              key={details.id}
              details={{
                iD: details.id,
                name: details.name,
                height: details.height,
                weight: details.weight,
              }}
              types={details.types}
              style={{ flex: 2 }}
            />
            <CardStats key={details.id + 1} stats={details.stats} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  scrollViewView: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: {
    height: 200,
    width: 200,
  },
});

export default DetailsScreen;
