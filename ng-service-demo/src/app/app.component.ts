import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeService } from './employee.service';
import { ProductService } from './product.service';
import { CommonModule } from '@angular/common';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DecimalPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-service-demo';
  public employees:{
    id: number,
    firstname: string,
    lastname: string,
    email: string
  }[]=[];

  public products:{
    prodid: string,
    prodname: string
    description: string
    price: number
  }[]=[];

  constructor(private _employeeService: EmployeeService, private _productService: ProductService){}

  ngOnInit(){
    this.employees = this._employeeService.getEmployees();
    this.products = this._productService.getProducts();
  }
}
