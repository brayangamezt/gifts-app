import  { GiftItem } from './GiftItem';

import useFetchGifs from '../hooks/useFetchGifs';

export const GiftGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      
      { isLoading && <h1>Loading...</h1> }

      <div className='card-grid' >
        {
          images.map( (image)=>{
            return(
              <GiftItem key={image.id} title={image.title} url={image.url} />
            )
          } )
        }
      </div>
    </>
  )
}
