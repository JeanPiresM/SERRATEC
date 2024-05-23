import { BackHandler, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:'notoserif',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3'
  },
  textoNome:{
    color: 'black',
  },
  textoCargo:{
    color: 'red'
  },
  botao:{
    textDecorationLine:"underline",
    color: '#fff',
    backgroundColor:'#0ef',
    marginTop: 20,
    borderRadius: 20,
    padding:20
  },
  imagem:{
    marginTop: 20,
    width: 290,
    height: 260,
  }
});
