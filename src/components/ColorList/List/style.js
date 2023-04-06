import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flatList: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#ffffff",
    alignItems: "center",
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  flatListContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    marginTop: 30,
  },

  flatListItem: {
    width: 195,
    height: 220,
    marginVertical: 4,
    flex: 1,
    marginRight: 10,
  },

  textInfo:{
    fontSize: 16,
    color: "#aaa",
    marginTop: 20,
    fontWeight: "500"
  },

  btn: {
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    backgroundColor: "#ff0043",
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: 30,
  },

  textBtn: {
    fontSize: 20,
    color: "#ffffff",
  },

  textMsg:{
    fontSize: 20,
    fontWeight: "700",
    color: "#aaaaaa",
    marginTop: 80
  },

  nomeCor: {
    fontWeight: "600",
    color: "#aaa",
    textAlign: "center"
  },
});

export default styles;
