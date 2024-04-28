import { Poliza } from "./poliza";

export interface companiaAseguradora {
    nombre: String;
    direccion: String;
    telefono: Number;
    polizas: Poliza[];
}