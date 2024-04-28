import { Component, OnInit } from '@angular/core';
import { aseguradora } from 'src/app/modelos/aseg/aseguradora';
import { CompaniaService } from '../compania.service';


@Component({
  selector: 'app-objetos-asegurados',
  templateUrl: './objetos-asegurados.component.html',
  styleUrls: ['./objetos-asegurados.component.css']

})
export class ObjetosAseguradosComponent implements OnInit {

  compania_aseguradora: aseguradora | undefined;

  constructor(private companiaService: CompaniaService) { }
  ngOnInit(): void {
    this.companiaService.obtenerAseguradora().subscribe((data: any) => {
      this.compania_aseguradora = data;
      console.log(this.compania_aseguradora)
    })
  }

}
