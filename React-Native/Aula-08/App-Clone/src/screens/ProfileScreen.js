import { Image, View, StyleSheet } from "react-native";
import React from "react";

export default ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerCapa}>
        <Image
          style={styles.image}
          source={require("../../assets/usuario.png")}
        />
      </View>
      <View style={styles.containerImg}>
        <Image
          style={styles.image}
          source={require("../../assets/usuario.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerImg: {
    width: 120,
    height: 120,
    borderWidth: 5,
    borderRadius: 100,
    overflow: "hidden",
  },
  containerCapa: {
    width: "100%",
    height: "30%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
