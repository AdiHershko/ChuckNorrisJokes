import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';

const BottomModal = ({children, visible, onRequestClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => onRequestClose(false)}>
      <View style={styles.modalContainer}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: '30%',
    marginTop: 'auto',
    backgroundColor: '#ffffff',
  },
});

export default BottomModal;
