import { StyleSheet, View, StatusBar } from 'react-native';


//Desafio proposto na aula 04, Posicionar os elementos semelhante a uma imagem disponibilizada.

export default function Conjunto() {
  return (
    <>
     <View style={styles.barraStatus}/>
      <View style={styles.box1}>
      <View  style={styles.quadradoBox1} />
      <View style={styles.retangulo} />
      </View>
      <View style={styles.box2}>
          <View style={[styles.retangulosBox2, styles.retangulo1Box2]} />
          <View style={[styles.retangulosBox2, styles.retangulo2Box2]} />
          <View style={styles.linhaBox2} />
      </View>
      <View style={styles.box3}>
      <View  style={styles.quadradosBox3} />
      <View  style={styles.quadradosBox3} />
      <View  style={styles.quadradosBox3} />
      <View  style={styles.quadradosBox3} />
      <View  style={styles.quadradosBox3} />
      <View  style={styles.quadradosBox3} />
      </View>
      <View style={styles.retanguloFinal}/>
    </>
   
  );
}

const styles = StyleSheet.create({
  barraStatus:{
    backgroundColor: 'cyan',
    height: '5%',
    width: '100%'
  }
  ,
  box1:{
    backgroundColor: 'white',
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 10
  },
  quadradoBox1:{
    backgroundColor: 'orange',
    width: '25%',
    height: '45%',
  },
  retangulo:{
    backgroundColor: 'orange',
    width: '45%',
    height: '15%',
    },
  box2:{
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    marginTop: '5%',
    flexWrap: 'wrap'
  },
  retangulosBox2: {
    width: '50%',
    height: '80%'
  },
  retangulo1Box2: {
    backgroundColor: 'purple'
  },
  retangulo2Box2: {
    backgroundColor: 'blue'
  },
  linhaBox2:{
    width: '100%',
    height: '20%',
    backgroundColor: 'cyan'
  },
  box3:{
    width: '100%',
    height: '40%',
    flexDirection: 'row',
    rowGap: 50,
    columnGap: 30,
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignContent: 'center',
    marginBottom: '5%',
    marginTop: '5%'
  },
  quadradosBox3:{
    backgroundColor: 'orange',
    width: '25%',
    height: '30%',
  },
  retanguloFinal:{
    width: '100%',
     height: '15%',
     backgroundColor: 'blue',
  },

});
