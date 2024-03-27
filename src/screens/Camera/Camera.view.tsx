import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './Camera.styles';
import {RNCamera} from 'react-native-camera';
import CameraLogic from './Camera.logic';
import {colors, fonts} from '@helpers/fonts';

export function Camera() {
  const {takePicture} = CameraLogic();

  const PendingView = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Waiting</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          {({camera, status, recordAudioPermissionStatus}) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => takePicture(camera)}
                  style={styles.capture}>
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors.Primary,
                      fontFamily: fonts.PrimaryRegular,
                    }}>
                    {' '}
                    SNAP{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      </View>
    </View>
  );
}
