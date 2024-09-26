import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  @Input() expense:{
    provider: string,
    date: Date,
    paymentMethods: string,
    amount: number,
    details: string
  }
  constructor() {
    this.expense = {
      provider: '',
      date: new Date(),
      paymentMethods: '',
      amount: 0,
      details: ''
    };
  }
}
