import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-generar-reporte',
  templateUrl: './generar-reporte.component.html',
  styleUrls: ['./generar-reporte.component.css']
})
export class GenerarReporteComponent implements OnInit {
  public cliente: Array<Cliente>=[];
  constructor(private apiService: ApiService){}
  ngOnInit() {
    this.getReporte();
  }
  public getReporte(){
    this.apiService.getReporte().subscribe((data:any)=>{
      this.cliente=data;
      console.log(data);
    })
  }

}
