import { Component, OnInit } from '@angular/core';
import { companiaAseguradora } from '../modelos/polizas/companiaAseguradora';
import { Poliza } from '../modelos/polizas/poliza';
import { CompaniaService } from '../compania.service';
@Component({
  selector: 'app-poliza',
  templateUrl: './poliza.component.html',
  styleUrls: ['./poliza.component.css']
})
export class PolizaComponent implements OnInit {
  Poliza!: companiaAseguradora;

  constructor(private companiaService: CompaniaService) {
  }
  ngOnInit(): void {
    this.companiaService.obtenerAseguradora().subscribe((data: any) => {
      this.Poliza = data;
      console.log(this.Poliza);
    })
  }

}




