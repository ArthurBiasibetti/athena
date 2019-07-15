  
import { StyleSheet, Platform, Dimensions } from "react-native";
import { black } from "ansi-colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#271B3D',
    paddingTop: Platform.OS === "ios" ? getStatusBarHeight() : 0,
    flex: 1
  },

  boxTitle: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#333"
  },

  list: {
    marginVertical: 30,
    color: 'white',
    },

  file: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20
  },

  separator: {
    height:25
  },

  fileInfo: {
    width: Dimensions.get('window').width*0.95,
    height: 120,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#3A2046',
    alignSelf:"center",
  
  },

  fileTitle: {
    fontSize: 16,
    color: "white",
    marginLeft: 10
  },

  fileDate: {
    fontSize: 14,
    color: "#666"
  },

  topo: {
    backgroundColor:'#110C28',
    width:Dimensions.get('window').width,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
},
});

export default styles;