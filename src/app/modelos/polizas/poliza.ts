import { Objetosasegurado } from "./objetosAseguradora";

export class Poliza {
    id!: string;
    fecha!: string;
    objetos_asegurados: Objetosasegurado[] = []
}