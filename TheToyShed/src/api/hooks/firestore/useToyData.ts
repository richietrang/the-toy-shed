import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

export type Toy = {
  toy_name: string;
  short_description: string;
  toy_icon: string;
  youtube_video_id: string;
  gallery_primary_color: string;
  gallery_secondary_color: string;
  required_materials: Array<{
    image_url: string;
    name: string;
  }>
  required_tools: Array<{
    image_url: string;
    name: string;
  }>
}

export default () => {
  const [toys, setToys] = useState<Array<Toy>>([]);
  const [errorMessage, setErrorMessage] = useState('');
  
  const toysFromFirestore = () => {
      let toys: Array<Toy> = [];
      firestore()
      .collection('toys')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          toys.push({
            toy_name: documentSnapshot.data().toy_name,
            short_description: documentSnapshot.data().short_description,
            toy_icon: documentSnapshot.data().toy_icon,
            youtube_video_id: documentSnapshot.data().youtube_video_id,
            gallery_primary_color: documentSnapshot.data().gallery_primary_color,
            gallery_secondary_color: documentSnapshot.data().gallery_secondary_color,
            required_materials: documentSnapshot.data().required_materials,
            required_tools: documentSnapshot.data().required_tools,
          });
        });
        setToys(toys);
      })
      .catch(error => {
        setErrorMessage(error.message);
      })
  };

  useEffect(() => {
    toysFromFirestore();
  }, []);

  return {toys: toys, firestoreErrrorMessage: errorMessage};
}
