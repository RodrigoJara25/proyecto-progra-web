import TablaProductos from "../TablaProductos/TablaProductos";
import { useEffect } from "react";
import productoApi from "../../api/ProductosApi";

const Productos = ({ lista_productos, setLista_Productos }) => {
    useEffect(() => {
        productoApi.guardarProductos(lista_productos);
    }, [lista_productos]);

    return (
        <>
        <TablaProductos productos={lista_productos} />
        </>
    );
};

export default Productos;
