import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CustomerService } from './services/customer.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from './models/customer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fix here: it should be styleUrls, not styleUrl
  providers: [CustomerService]
})
export class AppComponent implements OnInit {
  title = 'angular-frontend-velo';
  customers: Customer[] = []; // Change Object[] to Customer[]

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    console.log('On init ...');
    this.customerService.getCustomers().subscribe(
      (data: Customer[]) => {
        console.log('Données reçues:', data); // Vérifiez si les données sont reçues correctement
        this.customers = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des clients:', error); // Si une erreur survient
      }
    );
  }
}