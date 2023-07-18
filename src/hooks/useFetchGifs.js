import React, {useState, useEffect} from 'react';
import { getGifst } from '../helpers/getGifts';

const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() =>{
      const newImages = await getGifst(category); // Esperando la respuesta de la api
      setImages(newImages);
      setIsLoading(false);
    }

    useEffect( ()=>{

        getImages()

    }, [] );

  return ({
    images:images,
    isLoading:isLoading
  })
}

export default useFetchGifs
