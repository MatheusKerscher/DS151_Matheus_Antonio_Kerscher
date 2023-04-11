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
    marginTop: 20,
  },

  flatListItem: {
    width: 80,
    height: 80,
    marginVertical: 4,
    flex: 1,
    marginRight: 4,
  },

  textInfo: {
    fontSize: 16,
    color: "#aaa",
    marginTop: 10,
    fontWeight: "500",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },

  textMsg:{
    fontSize: 20,
    fontWeight: "700",
    color: "#aaaaaa",
    marginTop: 80
  },

  btn: {
    width: "40%",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff0043",
    paddingTop: 14,
    paddingBottom: 14,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginTop: 20,
  },

  textBtn: {
    fontSize: 20,
    color: "#ffffff",
  },

  imagem: {
    marginTop: 30,
    width: 250,
    height: 250,
    borderRadius: 10,
    marginHorizontal: 10
  },
});

export default styles;
