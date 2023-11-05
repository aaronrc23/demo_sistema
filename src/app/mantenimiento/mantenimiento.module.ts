import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientoRoutingModule } from './mantenimiento-routing.module';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';

import { CardModule } from 'primeng/card';

// import primeng
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { AnimateModule } from 'primeng/animate';
import { MenubarModule } from 'primeng/menubar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';

import { SidebarModule } from 'primeng/sidebar';
import { AddEditProductosComponent } from './pages/add-edit-productos/add-edit-productos.component';
import { FileUploadModule } from 'primeng/fileupload';
import { CascadeSelectModule } from 'primeng/cascadeselect';





@NgModule({
  declarations: [
    CategoriaComponent,
    ProductosComponent,
    DashboardComponent,
    AddEditProductosComponent,
    
  ],
  imports: [
    CommonModule,
    MantenimientoRoutingModule,
    SharedModule,
    CardModule  ,
    ButtonModule,
    InputTextModule,
    FormsModule,
    TableModule,
    DialogModule,
    HttpClientModule,
    PaginatorModule,AnimateModule,
    SidebarModule,
    MenubarModule,
    ReactiveFormsModule,
    InputNumberModule,
    InputTextareaModule,
    CascadeSelectModule ,
    DropdownModule,
    FileUploadModule
   
    
   
  ]
})
export class MantenimientoModule { }



