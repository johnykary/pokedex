import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card  } from "react-native-elements";
import { color } from "react-native-elements/dist/helpers";
import { rgb, TYPES_COLORS } from "../tools/colors";

const PokemonCard = ({ name, types, image, index }) => {
  const mainType = types[0].type.name;
  const colorType = TYPES_COLORS[mainType] || TYPES_COLORS["normal"]
  const backgroundColor = rgb(colorType.r, colorType.g, colorType.b)
  return (
    <>
      <Card containerStyle={[styles.cardContainer ,{backgroundColor}]}  >
        <Card.Title style={styles.title}>{name}</Card.Title>
        <View style={styles.card}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{
              uri: image,
            }}
          />
          <View style={styles.textTypeContainer}>
            {types.map((type) => {
              const textType = TYPES_COLORS[type.type.name] || TYPES_COLORS["normal"];
              const typeBackgroundColor =  rgb(textType.r + 10, textType.g + 10, textType.b + 10);
              return <Text style={[styles.textType, {backgroundColor: typeBackgroundColor}]}>{type.type.name}</Text>;
            })}
          </View>
        </View>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 100,
    width: 120,
  },
  image: {
    flex: 2,
    height: 100,
    width: 80,
  },
  textTypeContainer: {
    padding: 5,
    flexDirection: "column",
    justifyContent: 'space-between'
  },
  textType: {
    textAlign: "center",
    width: "100%",
    fontSize: 14,
    borderRadius: 5,
    paddingBottom: 5,
  },
  title:{
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    textTransform: 'capitalize',
    color: 'black',
    fontWeight: "bold"
  },

});
export default PokemonCard;
