import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';


const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.modalOff}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
          
        <View style={styles.modalOn}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is modal...</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onLongPress={() => setModalVisible(true)}
        delayLongPress={1000}>
        <Text style={styles.textStyle}>Hold 1 second to show modal</Text>
      </Pressable>
    </View>
    
  );
};

const styles = StyleSheet.create({
  modalOff: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
    modalOn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },
  modalView: {
    margin: 20,
    width: '80%',
    backgroundColor: '#1D8A46',
    borderRadius: 30,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#E35D14',
  },
  buttonClose: {
    backgroundColor: '#61381E',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'white',
    marginBottom: 15,
    textAlign: 'center'
  },

});

export default App;