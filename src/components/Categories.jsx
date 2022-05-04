import axios from "axios";
import {React,useEffect,useState} from "react";

function Categories() {
  const [categories, setCategories] = useState([])
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
  console.log(categories)
  return (
    <div class="main-categories">
      {
        categories.map(item=>{
          return (
            <div
            className="input-wrapper color-white btn-category"
        >
            <label htmlFor={item._id} key={item._id}>
              <input id={item._id} className="btn-tab-input" type="checkbox" key={item._id}/>
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
