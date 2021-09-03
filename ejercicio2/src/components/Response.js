import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default function Response(props) {
  const {tamanio, tipo, pago, cantidad, total, errorMessage} = props;
  return (
    <View style={styles.content}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>RESUMEN</Text>
          <DataResult title="Tamaño del cafe:" value={`${tamanio.label}`} />
          <DataResult title="Tipo de cafe:" value={`${tipo.label}`} />
          <DataResult title="Tipo de pago:" value={`${pago.label}`} />
          <DataResult title="Cantidad:" value={`${cantidad}`} />
          <DataResult
            title="Descuento:"
            value={` ${((1 - pago.value) * 100).toFixed(0)}% - $${(
              total *
              (1 - pago.value)
            ).toFixed(2)}`}
          />
          <DataResult
            title="Total a pagar:"
            value={`$${(total * pago.value).toFixed(2)}`}
          />
        </View>
      )}
      <View>
        <Text style={styles.error}>¡Cuidado!... {errorMessage}</Text>
      </View>
    </View>
  );
}
function DataResult(props) {
  const {title, value} = props;
  return (
    <View style={styles.value}>
      <Text>{title}</Text>
      <Text>{value}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    marginHorizontal: 40,
  },
  boxResult: {
    padding: 30,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  error: {
    width: '100%',
    backgroundColor: '#f05545',
    marginVertical: '50%',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 20
  },
});
