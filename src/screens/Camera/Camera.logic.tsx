import {useNavigation} from '@react-navigation/native';

const CameraLogic = () => {
  const {navigate} = useNavigation();

  function handleNavigation(screen: any, param?: {}) {
    if (param) {
      navigate(screen, param);
    }
    navigate(screen);
  }

  const takePicture = async function (camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    // setPreview(data.uri);
    console.log(data.uri);
    handleNavigation('signUp', {uri: data.uri});
  };

  return {
    handleNavigation,
    takePicture,
  };
};

export default CameraLogic;
