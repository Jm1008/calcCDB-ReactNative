import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    text: {
      color: '#fff'
    },
    div: {
      backgroundColor: "#303062",
      width: "100vw",
      height: "100%",
      flex: 1,
      alignItems: 'Center'
      
    },
    input: {
      backgroundColor: "transparent",
      borderColor: "#fff",
      borderWidth: "3px",
      fontFamily: "Helvetica",
      fontSize: "15px",
      fontHeight: "700",
      padding: "10px",
      borderRadius: "5px",
      margin: "20px",
      height: "40px",
      width: "200px",
      color: '#fff'
    },
    
    select: {
      backgroundColor: "transparent",
      fontFamily: "Helvetica",
      fontSize: "15px",
      fontHeight: "700",
      borderRadius: "5px",
      height: "40px",
      width:'200px',
      margin:'20px'
    },
    text: {
      fontFamily: "Helvetica",
      fontSize: "15px",
      fontHeight: "700",
      color: '#fff'
    },
  }
});

export default styles;
