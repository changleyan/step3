import React from "react";
import Select from "./Select";
import { useState, useEffect } from "react";
import { Data, colorMappingData } from "../data/data";
import ColorMapping from "./ColorMapping";

const ButtonBar = () => {
  const getCategorias = () => {
    let result = Data.map((c) => c.categoria);
    return result;
  };
  const getProductos = (categori) => {
    let prods = Data.find((c) => c.categoria === categori);
    let result = prods.productos.map((p) => p.producto);

    return result;
  };
  const getMarcas = (categori, product) => {
    let prods = Data.find((c) => c.categoria === categori);
    let marcs = prods.productos.find((p) => p.producto === product);
    return marcs === undefined ? [] : marcs.marcas;
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
  const [categoria, setcategoria] = useState(getCategorias());
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
    getDataMapping(categ, produc, marc);
  }, [produc]);

  useEffect(() => {
    setDataMaping(getDataMapping(categ, produc, marc));
  }, [marc]);

  return (
    <>
      <div className="flex justify-around  flex-wrap w-full items-center">
        <Select data={categoria} inputName="Categoria" callback={setCateg} />
        <Select data={productos} inputName="Producto" callback={setProduc} />
        <Select data={marcas} inputName="Marca" callback={setMarc} />
      </div>
      <br />
      <ColorMapping colorMappingData={dataMaping} />
    </>
  );
};

export default ButtonBar;
