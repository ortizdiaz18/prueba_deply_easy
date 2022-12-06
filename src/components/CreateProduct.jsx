import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { useSelector } from "react-redux";
import { getCategories } from "../redux/categories/actions";
import { useState } from "react";
import styleForm from "../styles/Form.module.css";
import tableroFood from "../images/tablero_food.jpg";
import { selectStyle } from "../styles/StyleSelectForm";
import {NavBar} from '../components'
export const CreateProduct = () => {

 
  const dispatch = useDispatch();

  const [options, setOptions] = useState([]);
  let categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      let options = categories.map((category) => {
        return {
          value: category.name_c,
          label: category.name_c,
        };
      });
      setOptions(options);
    }
  }, [categories]);

  return (
   
    <div id={styleForm.containerGlobalForm}>
       <div>
      <NavBar/>
    </div>
      <div className={styleForm.containerForm}>
        <form className={styleForm.form}>
          <div className={styleForm.containerImage}>
            <img className={styleForm.img} src={tableroFood} alt="" />
          </div>
          <div className={styleForm.containerInfo}>
            <div className={styleForm.containerLabel}>
              <label className={styleForm.labels}>Nombre</label>
              <input type="text"></input>
            </div>
            <div className={styleForm.containerLabel }>
              <label className={styleForm.labels}>Descripcion</label>
              <input className={styleForm.inputDescription} type="text"></input>
            </div>
            <div className={styleForm.containerLabel}>
              <label className={styleForm.labels}>Precio</label>
              <input type="text"></input>
            </div>
            <div className={styleForm.containerLabel}>
              <label className={styleForm.labels}>Imagen</label>
              <input type="text"></input>
            </div>
            <div className={styleForm.containerLabel}>
              <label className={styleForm.labels}>Disponible</label>
              <input type="text"></input>
            </div>
            <div className={styleForm.containerLabel}>
              <label className={styleForm.labels}>Tiempo de preparación</label>
              <input type="text"></input>
            </div>
            <div className={styleForm.containerLabel}>
              <label className={styleForm.labels}>Categorias</label>
              <Select styles={selectStyle} isMulti options={options} />
            </div>
            <div className={styleForm.containerButton}>
              <button>Crear</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
