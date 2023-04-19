import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInfo: {
    fontSize: 15,
    marginVertical: 10,
    textAlign: "center",
  },

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

  movies: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  imagem: {
    marginTop: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    resizeMode: "stretch",
  },

  movieBanner: {
    width: "40%",
  },

  movieInfos: {
    width: "60%",
  },

  movieTitle: {
    fontSize: 20,
    fontWeight: "600",
    paddingLeft: 5,
  },

  movieAvaliacao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  textMovieAvaliacao: {
    marginTop: 5,
    fontSize: 16,
    marginLeft: 5,
  },

  moreInfos: {
    alignItems: "flex-end",
    paddingRight: 20,
  },

  btnMoreInfos: {
    backgroundColor: "#ff0043",
    padding: 5,
    borderRadius: 10,
  },

  contentModal: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 10,
  },

  closeButton: {
    position: "absolute",
    top: 10,
    right: 2,
    margin: 10,
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },

  modalData: {
    fontSize: 14,
    textAlign: "center",
  },

  modalOverview: {
    fontSize: 16,
    textAlign: "justify",
  },
});

export default styles;
