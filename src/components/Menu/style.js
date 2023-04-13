import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    bottom: 0,
    marginTop: 30,
  },

  col: {
    width: "50%",
  },

  btn: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 60,
    backgroundColor: "#ff0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 10,
    marginTop: 30,
  },

  textBtn: {
    fontSize: 20,
    color: "#ffffff",
  },
});

export default styles;
