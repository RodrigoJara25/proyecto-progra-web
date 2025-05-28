const lista_inicial = [
    {
        id: "8123",
        nombre: "Uvas",
        presentacion: "0,8kg",
        descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aperiam obcaecati tempore iure, iste odio maxime repellendus earum eius? Repellat molestias totam earum, corporis cumque corrupti praesentium sit maxime neque?",
        categoria: "Frutas y verduras",
        stock: 10,  
        img: "./public/assets/uvas.png"
    },
    {
        id: "4343",
        nombre: "Peras",
        presentacion: "1kg",
        descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aperiam obcaecati tempore iure, iste odio maxime repellendus earum eius? Repellat molestias totam earum, corporis cumque corrupti praesentium sit maxime neque?",
        categoria: "Frutas y verduras",
        stock: 23,
        img: "./public/assets/peras.png"
    },
    {
        id: "9223",
        nombre: "Manzanas Rojas",
        presentacion: "0,3kg",
        descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aperiam obcaecati tempore iure, iste odio maxime repellendus earum eius? Repellat molestias totam earum, corporis cumque corrupti praesentium sit maxime neque?",
        categoria: "Frutas y verduras",
        stock: 21,
        img: "./public/assets/manzanas.png"
    },
    {
        id: "4344",
        nombre: "Sandía",
        presentacion: "1kg",
        descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aperiam obcaecati tempore iure, iste odio maxime repellendus earum eius? Repellat molestias totam earum, corporis cumque corrupti praesentium sit maxime neque?",
        categoria: "Frutas y verduras",
        stock: 10,
        img: "./public/assets/Sandía.png"
    },
    {
        id: "6425",
        nombre: "Leche gloria",
        presentacion: "8 unidades",
        descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aperiam obcaecati tempore iure, iste odio maxime repellendus earum eius? Repellat molestias totam earum, corporis cumque corrupti praesentium sit maxime neque?",
        categoria: "Lacteos y huevos",
        stock: 30,
        img: "./public/assets/leche_gloria.png"
    },
    {
        id: "5454",
        nombre: "Pollo entero fresco con menudencia",
        presentacion: "2,2kg",
        descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aperiam obcaecati tempore iure, iste odio maxime repellendus earum eius? Repellat molestias totam earum, corporis cumque corrupti praesentium sit maxime neque?",
        categoria: "Carnes, aves y pescados",
        stock: 3,
        img: "./public/assets/Pollo.png"
    },
    {
        id: "2344",
        nombre: "Papaya",
        presentacion: "0,8kg",
        descripcion: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aperiam obcaecati tempore iure, iste odio maxime repellendus earum eius? Repellat molestias totam earum, corporis cumque corrupti praesentium sit maxime neque?",
        categoria: "Frutas y verduras",
        stock: 15,
        img: "./public/assets/papaya.png"
    }
];


const productoApi = {
    obtenerProductos: () => {
    const productosLS = localStorage.getItem("productos");
    if (productosLS) {
        try {
            const parsed = JSON.parse(productosLS);
            // Si parsed está vacío, carga lista_inicial
            if (parsed.length === 0) {
                return lista_inicial;
            }
            return parsed;
        } catch {
        return lista_inicial;
        }
    }
    return lista_inicial;
    },

    guardarProductos: (productos) => {
        localStorage.setItem("productos", JSON.stringify(productos));
    }
};

export default productoApi;