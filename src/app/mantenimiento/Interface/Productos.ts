export interface Productos {
    idproducto: number;
    codigo_barra: string;
    nombre: string;
    precio_venta: number;
    stock: number;
    descripcion: string;
    imagen: string;
    activo: boolean;
    categoria: Categoria; // Asegúrate de importar y definir la interfaz de Categoria aquí
  }

  export interface Categoria {
    idcategoria: number;
    nombre: string;
    activo: boolean;
  }