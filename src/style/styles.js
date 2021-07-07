import { ImageBackgroundBase, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  hsbody: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  cbody: {
    flex: 1,
    justifyContent: "flex-start",
    textAlign: "center",
    paddingTop: 10,
    backgroundColor: "grey",
  },
  slide: {
    flex: 1,
    backgroundColor: "#9DD6EB",
    justifyContent: "flex-end",
  },
  sw: {
    height: 224,
    width: 430,
    resizeMode: "cover",
  },
  text: {
    color: "black",
    textAlign: "center",
    backgroundColor: "silver",
    padding: 5,
    width: 390,
  },
  textbi: {
    color: "black",
    textAlign: "center",
    backgroundColor: "silver",
    padding: 5,
    width: 430,
  },
  textdetay: {
    marginTop: 10,
    color: "black",
    fontSize: 30,
    textAlign: "center",
    padding: 5,
  },
  textdetay2: {
    marginTop: 50,
    color: "black",
    fontSize: 24,
    textAlign: "center",
    padding: 5,
  },
  detailimg: {
    margin: 10,
    height: 250,
    width: 430,
  },
});
