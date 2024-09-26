import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Customer } from '../../modules/interfaces';

@Component({
  selector: 'app-revenues',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './revenues.component.html',
  styleUrl: './revenues.component.scss'
})
export class RevenuesComponent {
  @Input() revenue :{
  id :number,
  customer:Customer,
  amount: number,
  paymentMethods: string,
  date: Date,
  details:string
  }
  constructor() {
    this.revenue = {
      id: 0,
      customer:{name:'',number:0},
      date: new Date(),
      paymentMethods: '',
      amount: 0,
      details: ''
    };
  }
}
