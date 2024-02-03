import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Loader = ({loading}) => {
  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      style={{zIndex: 1100}}
      onRequestClose={() => {}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator animating={loading} color="black" />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  activityIndicatorWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
