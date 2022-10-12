import React from "react";
import Select from "./Select";
import { useState, useEffect } from "react";
import { Data, colorMappingData } from "../data/data";
import ColorMapping from "./ColorMapping";

const ButtonBar = () => {
  const getProductos = (categori) => {
    // console.log("fff");
    let prods = Data.find((c) => c.categoria === categori);
    let result = prods.productos.map((p) => p.producto);
    return result;
  };
  const getMarcas = (categori, product) => {
    // console.log("555");
    // console.log(categori, product);
    let prods = Data.find((c) => c.categoria === categori);
    let marcs = prods.productos.find((p) => p.producto === product);
    // console.log(marcs);
    return marcs.marcas;
  };

  const getDataMapping = (categ, produc, marc) => {
    let data = colorMappingData[0].filter((e) => {
      return e.categoria === categ && e.producto === produc && e.marca === marc;
    });
    let result = [];
    result.push(data);
    result.push(colorMappingData[1]);
    result.push(colorMappingData[2]);
    result.push(colorMappingData[3]);
    return result;
  };

  const [produc, setProduc] = useState(Data[0].productos[0].producto);
  const [marc, setMarc] = useState(Data[0].productos[0].marcas[0]);
  const [categ, setCateg] = useState(Data[0].categoria);
  //
  const [categoria, setcategoria] = useState(Data.map((c) => c.categoria));
  const [productos, setProductos] = useState(getProductos(categ));
  const [marcas, setMarcas] = useState(getMarcas(categ, produc));

  const [dataMaping, setDataMaping] = useState(
    getDataMapping(categ, produc, marc)
  );

  useEffect(() => {
    setProductos(getProductos(categ));
  }, [categ]);

  useEffect(() => {
    setMarcas(getMarcas(categ, produc));
  }, [produc]);

  useEffect(() => {
    console.log("wey");
  }, [marc]);

  useEffect(() => {
    setDataMaping(getDataMapping(categ, produc, marc));
  }, []);

  return (
    <>
      <div className="flex justify-between gap-16">
        <Select data={categoria} inputName="Categorias" callback={setCateg} />
        <Select data={productos} inputName="Productos" callback={setProduc} />
        <Select data={marcas} inputName="Marcas" callback={setMarc} />
      </div>
      <br />
      <ColorMapping colorMappingData={dataMaping} />
    </>
  );
};

export default ButtonBar;
