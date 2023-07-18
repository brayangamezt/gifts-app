import { useState } from "react";
import { AddCategory, GiftGrid } from './components';

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['One punch', 'Dragon ball']);

  {/* Function to send to the child component */}
  const onAddCategory = (newCategory) =>{
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }


  return (
    <>
      <h1>Gift Expert App</h1>

      {/*El componente manda la categoria*/}
      <AddCategory onNewCategory = { event => onAddCategory(event) }/>
      
      {
        categories.map( (category, index)=>{
          return(
            <GiftGrid key={category} category={category} />
          )
        } )
      }
      
    </>
  )
}

export default GiftExpertApp
