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
import { NavBar } from "../components";
export const CreateProduct = () => {
  const dispatch = useDispatch();
  const [localCategories, setLocalCategories] = useState([]);
  const [options, setOptions] = useState([]);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: 0,
    image: "",
    stock: "",
    prep_time: "",
    categories: "",
  });

  useEffect(() => {
    if (localCategories.length > 0) {
      setData({
        ...data,
        ["categories"]: localCategories.map((category) => category.value),
      });
    } else {
      setData({
        ...data,
        ["categories"]: [],
      });
    }
  }, [localCategories]);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "EasyOrder_BD");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dypjcpbis/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const url = await res.json();
    console.log(url.secure_url);
    setData({
      ...data,
      image: url.secure_url,
    });
  };

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
        <NavBar />
      </div>
      <div className={styleForm.containerForm}>
        <form className={styleForm.form}>
          <div className={styleForm.containerImage}>
            <img
              className={styleForm.img}
              src={data.image ? data.image : tableroFood}
              alt=""
            />
          </div>

          <div className={styleForm.containerInfo}>
            <div className={styleForm.containerName_price}>
              <div className={styleForm.containerLabel}>
                <label className={styleForm.labels}>Nombre</label>
                <input
                  className={styleForm.inputName}
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={(e) => handleInputChange(e)}
                ></input>
              </div>

              <div className={styleForm.containerLabel}>
                <div className={styleForm.containerPrice}>
                  <label
                    className={styleForm.labels + " " + styleForm.labelPrecio}
                  >
                    Precio
                  </label>
                  <input
                    className={styleForm.inputPrice}
                    type="number"
                    name="price"
                    value={data.price}
                  ></input>
                </div>
              </div>
            </div>

            <div className={styleForm.containerLabel}>
              <label className={styleForm.labels}>Descripcion</label>
              <textarea
                className={styleForm.inputDescription}
                type="text"
                name="description"
                value={data.description}
              ></textarea>
            </div>
            <div className={styleForm.containerLabel}>
              <label className={styleForm.labels}>Categorias</label>
              <Select
                styles={selectStyle}
                isMulti
                options={options}
                onChange={(e) => setLocalCategories(e)}
              />
            </div>

            <div className={styleForm.containerName_price}>
              <div className={styleForm.containerLabel}>
                <label className={styleForm.labels}>
                  Tiempo de preparación
                </label>
                <div>
                  <input className={styleForm.inputTime} type="text"></input>
                  <label
                    className={styleForm.labels + " " + styleForm.labelMin}
                  >
                    min
                  </label>
                </div>
              </div>

              <div
                className={
                  styleForm.containerLabel + " " + styleForm.containerDisponible
                }
              >
                <label className={styleForm.labels}>Disponible</label>
                <select name="Disponible" id={styleForm.selectDisponible}>
                  <option value="true">Si</option>
                  <option value="false" selected>
                    No
                  </option>
                </select>
              </div>
            </div>

            <div className={styleForm.containerLabel}>
              <label className={styleForm.labels}>Imagen</label>
              <input
                className={styleForm.inputFile}
                type="file"
                accept="image/png , image/jpeg"
                onChange={uploadImage}
              ></input>
            </div>

            <div className={styleForm.containerButton}>
              <button className={styleForm.buttonCrear}>Crear Producto</button>
            </div>
            <div className={styleForm.containerButton}>
              <button className={styleForm.buttonCancelar}>Cancelar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
