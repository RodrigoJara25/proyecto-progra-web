import TablaProductos from "../TablaProductos/TablaProductos";

const Productos = () => {
     const lista_productos = [
        {
            id: 1,
            nombre: "Uvas",
            presentacion: "0,8kg",
            descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aperiam obcaecati tempore iure, iste odio maxime repellendus earum eius? Repellat molestias totam earum, corporis cumque corrupti praesentium sit maxime neque?",
            categoria: "Frutas y verduras",
            stock: 10,
        },
        {
            id: 2,
            nombre: "Manzanas",
            presentacion: "1kg",
            descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aperiam obcaecati tempore iure, iste odio maxime repellendus earum eius? Repellat molestias totam earum, corporis cumque corrupti praesentium sit maxime neque?",
            categoria: "Frutas y verduras",
            stock: 20,
        },
        {
            id: 3,
            nombre: "Peras",
            presentacion: "1kg",
            descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aperiam obcaecati tempore iure, iste odio maxime repellendus earum eius? Repellat molestias totam earum, corporis cumque corrupti praesentium sit maxime neque?",
            categoria: "Frutas y verduras",
            stock: 15,
        }
    ]  
    return (
        <TablaProductos productos={lista_productos} />
    )
}

export default Productos;
