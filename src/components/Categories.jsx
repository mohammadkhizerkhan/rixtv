import axios from "axios";
import {React,useEffect,useState} from "react";
import { ACTION_TYPE } from "../Action";
import {useData} from '../context'

function Categories() {
  const [categories, setCategories] = useState([])
  const {filterState,filterDispatach}=useData();

  useEffect(() => {
    (
      async ()=>{
        try {
          const res = await axios.get("/api/categories");
          setCategories(res.data.categories);
      } catch (error) {
          console.error("error in get categories",error);
      }
      }
    )();
  }, [])
  return (
    <div class="main-categories">
      {
        categories.map(item=>{
          return (
            <div
            className="input-wrapper color-white btn-category"
        >
            <label htmlFor={item._id} key={item._id}>
              <input id={item._id} className="btn-tab-input" name="category" type="radio" key={item._id} onChange={()=>filterDispatach({type:ACTION_TYPE.CATEGORIES,payload:item.categoryName})} />
              <span class="category">
              {item.categoryName}
              </span>
            </label>
        </div>
          )
        })
      }
    </div>
  );
}

export default Categories;
