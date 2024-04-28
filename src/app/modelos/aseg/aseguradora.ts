import { Poliza } from "../polizas/poliza";
export interface aseguradora {
    compania_aseguradora: {
        nombre: String;
        direccion: String;
        telefono: Number;
        polizas: Poliza[];
    }
}






