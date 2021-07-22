import React, { useState, useEffect } from "react";
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

const DetailsScreen = ({ navigation }) => {
  const [details, setDetails] = useState(null);
  const name = navigation.getParam("name");
  const types = navigation.getParam("types");

  const mainType = types[0].type.name;
  const colorType = TYPES_COLORS[mainType] || TYPES_COLORS["normal"];
  const backgroundColor = rgb(colorType.r, colorType.g, colorType.b);

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
                uri: `https://pokeres.bastionbot.org/images/pokemon/${details.id}.png`,
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
              types={types}
              style={{ flex: 2 }}
            />
            <CardStats stats={details.stats}/>
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
    paddingTop: 20
  },
  scrollViewView: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: {
    height: 200,
    width: 200,
  },
});

export default DetailsScreen;
