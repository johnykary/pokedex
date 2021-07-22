import React from "react";
import ProgressBar from "react-native-progress/Bar";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-elements";

const CardStats = ({ stats }) => {
  const setColor = (baseStat) => {
    if (baseStat < 20) {
      return "rgb(255,0,0)";
    } else if (baseStat < 50) {
      return "rgb(245, 227, 66)";
    } else {
      return "rgb(22, 245, 26)";
    }
  };
  console.log(stats);
  return (
    <Card containerStyle={styles.cardContainer}>
      <Card.Title style={styles.cardTitle}>STATS</Card.Title>
      {stats.map((item) => {
        item.stat.name =
          item.stat.name === "special-attack" ? "Sp.Attack" : item.stat.name;
        item.stat.name =
          item.stat.name === "special-defense" ? "Sp.Defense" : item.stat.name;
        return (
          <View style={styles.textDetails}>
            <Text
              style={{
                flex: 1,
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
            >
              {item.stat.name}:
            </Text>
            <ProgressBar
              progress={item.base_stat / 100}
              width={200}
              animated={false}
              color={setColor(item.base_stat)}
            />
          </View>
        );
      })}
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "80%",
    height: 250,
    justifyContent: "flex-start",
  },
  cardTitle: {
    fontSize: 18,
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
  text: {
    fontSize: 16,
    fontWeight: "400",
  },
});

export default CardStats;
