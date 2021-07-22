import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-elements";
import { rgb, TYPES_COLORS } from "../tools/colors";

const CardDetails = ({ details, types }) => {
  return (
    <>
      <Card containerStyle={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>DETAILS</Card.Title>
        {Object.keys(details).map((item) => {
          return (
            <View style={styles.textDetails}>
              <Text
                style={{
                  flex: 1,
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                {item}
              </Text>
              <Text style={{ flex: 1 }}>{details[item]}</Text>
            </View>
          );
        })}
        <View style={styles.typesDetails}>
          {types.map((type) => {
            const textType =
              TYPES_COLORS[type.type.name] || TYPES_COLORS["normal"];
            const typeBackgroundColor = rgb(
              textType.r + 10,
              textType.g + 10,
              textType.b + 10
            );
            return (
              <View
                style={[
                  styles.typesContainer,
                  { backgroundColor: typeBackgroundColor },
                ]}
              >
                <Text style={styles.text}>{type.type.name}</Text>
              </View>
            );
          })}
        </View>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "80%",
    height: 250,
    justifyContent: "flex-start",
  },
  cardTitle:{
    fontSize: 18
  },
  textDetails: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 2,
  },
  typesDetails: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 30,
  },
  typesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 10,
  },
  text:{
    fontSize: 16,
    fontWeight: '400'
  }
});

export default CardDetails;
