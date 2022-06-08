import React from 'react';
import {Modal} from 'react-native';

const BottomModal = ({children, visible, onRequestClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => onRequestClose(false)}>
      {children}
    </Modal>
  );
};

export default BottomModal;
