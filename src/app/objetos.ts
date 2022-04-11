export interface Categoria {
  titulo: string;
  descripcion: string;
  url: string;
  alt: string;
  actividades: Actividad;
}
export interface Actividad {
  name: string;
  url: string;
  description: string;
  empresas: Empresa;
}
export interface Empresa {
  name: string;
  place: string;
  price: number;
  number: string;
  web: string;
}
export interface SobreNosotrosGeneral{
  logo: string;
  alt: string;
  descripcion: string;
}
export interface Carrusel {
  url: string;
  alt: string;
}
