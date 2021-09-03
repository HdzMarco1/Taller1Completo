import React, {useState} from 'react';
import {StyleSheet, TextInput, View, Alert} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

export default function Form(props) {
  const [tamanios, setTamanios] = useState([
    {label: 'Short 8oz.', value: 1},
    {label: 'Tall 12oz.', value: 1.5},
    {label: 'Grande 16oz.', value: 2},
  ]);

  const [tipos, setTipos] = useState([
    {label: 'Americano', value: 1.5},
    {label: 'Mocha', value: 2},
    {label: 'Te chai', value: 2.5},
    {label: 'Frapper', value: 3},
  ]);

  const [pagos, setPagos] = useState([
    {label: 'Efectivo', value: 0.85},
    {label: 'Credito', value: 0.95},
  ]);

  const {setTamanio, setTipo, setPago, setCantidad} = props;
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <RNPickerSelect
          style={picketSelectStyles}
          onValueChange={(value, index) => {
            if (value == null) {
                Alert.alert('Cuidado', 'Seleccione un tamaño para su café', [
                    {
                      text: 'OK',
                      onPress: () => {
                          setTamanio({
                              label: null,
                              value: null
                          })
                      }
                    }
                  ]);
            } else {
              setTamanio({
                label: tamanios[index - 1]['label'],
                value: value,
              });
            }
          }}
          placeholder={{
            label: 'Seleccione el tamaño...',
            value: null,
          }}
          items={tamanios}
        />

        <RNPickerSelect
          style={picketSelectStyles}
          onValueChange={(value, index) => {
            if (value == null) {
                Alert.alert('Cuidado', 'Seleccione un tipo de café', [
                    {
                      text: 'OK',
                      onPress: () => {
                          setTipo({
                              label: null,
                              value: null
                          })
                      }
                    }
                  ]);
            } else {
              setTipo({
                label: tipos[index - 1]['label'],
                value: value,
              });
            }
          }}
          placeholder={{
            label: 'Seleccione el tipo...',
            value: null,
          }}
          items={tipos}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '60%',
          }}>
          <RNPickerSelect
            style={picketSelectStyles}
            onValueChange={(value, index) => {
              if (value == null) {
                Alert.alert('Cuidado', 'Seleccione un tipo de pago', [
                  {
                    text: 'OK',
                    onPress: () => {
                        setPago({
                            label: null,
                            value: null
                        })
                    }
                  }
                ]);
              } else {
                setPago({
                  label: pagos[index - 1]['label'],
                  value: value,
                });
              }
            }}
            placeholder={{
              label: 'Tipo de pago',
              value: null,
            }}
            items={pagos}
          />
        </View>
        <View
          style={{
            width: '39%',
            marginLeft: 10,
            marginTop: 5,
          }}>
          <TextInput
            placeholder="Cantidad"
            keyboardType="numeric"
            style={styles.input}
            onChange={e => setCantidad(e.nativeEvent.text)}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 0,
    marginTop: 20,
    width: '100%',
    padding: 30,
    backgroundColor: '#40241a',
    height: 200,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'column',
  },
  input: {
    height: 55,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0)',
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
});
const picketSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 55,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginLeft: -5,
    marginRight: -5,
    marginTop: 5,
  },
  inputAndroid: {
    height: 55,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginLeft: -5,
    marginRight: -5,
    marginTop: 5,
  },
});
