import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';

import colors from './src/utils/colors';
import Form from './src/components/Form';
import Response from './src/components/Response';
import Buttons from './src/components/Buttons';

export default function App() {
  const [tamanio, setTamanio] = useState({});
  const [tipo, setTipo] = useState({});
  const [pago, setPago] = useState({});
  const [cantidad, setCantidad] = useState(null);
  const [total, setTotal] = useState(null);

  const [errorMessage, setErrorMessage] = useState('');

  /*   useEffect(() => {
    if (tamanio && interest && months) calculate();
    else reset();
  }, [capital, interest, months]); */
  const calculate = () => {
    /* Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    ); */
    reset();

    if (!tamanio.value) {
      setErrorMessage('Seleccione un tamaño para su café');
    } else if (!tipo.value) {
      setErrorMessage('Seleccione un tipo de café');
    } else if (!pago.value) {
      setErrorMessage('Seleccione un tipo de pago');
    } else if (!cantidad) {
      setErrorMessage('Ingrese una cantidad');
    } else if (cantidad <= 0) {
      setErrorMessage('Ingrese una cantidad valida');
    } else {
      setTotal((tamanio.value + tipo.value) * cantidad);
    }
  };
  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.Header}>
        <Text style={styles.HeadApp}> Cafeteria "Los Marcos" </Text>
        <Form
          setTamanio={setTamanio}
          setTipo={setTipo}
          setPago={setPago}
          setCantidad={setCantidad}
        />
      </SafeAreaView>
      <Response
        tamanio={tamanio}
        tipo={tipo}
        pago={pago}
        cantidad={cantidad}
        total={total}
        errorMessage={errorMessage}
      />
      <Buttons calculate={calculate}></Buttons>
    </>
  );
}
const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#4e342e',
    height: 260,
    alignItems: 'center',
  },
  HeadApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
});
