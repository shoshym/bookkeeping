import { Routes } from '@angular/router';

import { ExpensesComponent } from './components/expenses/expenses.component';
import { DataSegmentationComponent } from './components/data-segmentation/data-segmentation.component';
import { ReceiptComponent } from './components/receipts/receipts.component';

export const routes: Routes = [
  {path:'receipt',component:ReceiptComponent},
  {path:'expense',component:ExpensesComponent},
  {path:'data-segmentation',component:DataSegmentationComponent}

];
