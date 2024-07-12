import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';

import { ProductsService } from './products.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MaterialModule } from 'src/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipeModule } from 'ngx-filter-pipe';


@NgModule({
  declarations: [ ProductsComponent, ProductComponent],
  imports: [ CommonModule, FormsModule, NgxPaginationModule, ReactiveFormsModule, MaterialModule, HttpClientModule, MatTableModule, FilterPipeModule, MatSortModule, RouterModule ],
  providers: [ ProductsService],
  exports: [ ProductsComponent]
})
export class ProductsModule { }
