import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataService } from '../../data-service/data-service.service'
import { Customer } from '../../modules/interfaces';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-receipts',
  providers:[FormsModule, DataService],
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,ProgressSpinnerModule],
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.scss'],
})

export class ReceiptComponent implements OnInit{
  customers :Customer[] = []; // List of customers
  flagNewcust:boolean = false
  receiptForm: FormGroup;
  newCustomer:any = {name:'',number:0}
  id:number = 0
  succses:string = ''
  flagSpinner:boolean = false
  constructor(private dataService: DataService) {
    this.receiptForm = new FormGroup({
      id :new FormControl(''),
      customer: new FormControl(''),
      amount: new FormControl(''),
      paymentMethods: new FormControl(''),
      date: new FormControl('', [Validators.required]),
      details: new FormControl(''),
      description: new FormControl(''),
    })

  }
  ngOnInit(): void {
    this.dataService.allCustomers.subscribe(customers => {
        this.customers = customers;
    });   
  }

  saveReceipt() {
    if (this.receiptForm.valid) {
      this.id++;
      this.receiptForm.patchValue({ id: this.id });
      this.dataService.addReceipt(this.receiptForm.value).subscribe(
        (response) => {
          setTimeout(() => {
            this.flagSpinner = false; 
            this.succses = 'הקבלה נשמרה בהצלחה';
          }, 2000);        },
        (error) => {
          console.error('Error adding receipt:', error);
        }
      );
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }

  addCustomer(){
    this.newCustomer.name = (this.newCustomer.name.target as HTMLInputElement).value
    this.newCustomer.number = parseInt((this.newCustomer.number.target as HTMLInputElement).value)
    this.dataService.addCustomer(this.newCustomer).subscribe((response) => {
      this.customers.push(this.newCustomer)     
    })
  }
}
