import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#ffffff",
    alignItems: "center",
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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

  textInfo: {
    fontSize: 26,
    color: "#aaa",
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center"
  },
});

export default styles;
