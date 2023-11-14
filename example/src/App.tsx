import * as React from 'react';
import * as reactNative from 'react-native';
import { scanQR } from 'react-native-barcode-reader';

export default function App() {
  //const [result, setResult] = React.useState<number | undefined>();

  // React.useEffect(() => {
  //   scanQR(3, 7).then(setResult);
  // }, []);

  // eslint-disable-next-line prettier/prettier
  return (
    <reactNative.View style={styles.container}>
      <reactNative.TouchableOpacity
        style={styles.button}
        onPress={() =>
          scanQR().then((r) => {
            console.log(r);
          })
        }
      >
        <reactNative.Text>Scan</reactNative.Text>
      </reactNative.TouchableOpacity>
    </reactNative.View>
  );
}

const styles = reactNative.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  button:{
    width:20,
    length:50,
    flex:1,
    alignSelf:'center'
  }
});
