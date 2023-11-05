import { Component, OnInit } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ProductServiceService } from '../../Servicios/product-service.service';
import { Productos } from '../../Interface/Productos';
import Swal from 'sweetalert2';
import JsBarcode from 'jsbarcode';
import jsPDF from 'jspdf';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }

  /*-----Paginacion de la tabla-----*/
  first = 0;

  rows = 10;

  pageChange(event: { first: number; rows: number }) {
    this.first = event.first;
    this.rows = event.rows;
  }

  /*--------------*/


 


  products:Productos[] = [];
  displayAddModal = false;


  constructor(private productService: ProductServiceService) {}
  ngOnInit(): void {
    this.getProductList();
   
  }

  //Descargar pdf
  downloadPDF() {
    const doc =new jsPDF();
    const img= document.querySelector('img');
    doc.text('Hola mundo',10,10);
    
    if(img) doc.addImage(img,10,20,80,80)
    doc.save('prueba.pdf');

  }
  codigoDeBarras: string = '';

  //Generar codigo de barras
  generateBarcode() {
    //crea un serie de numeros aletorios con 11 digitos
    const randomNumber = Math.floor(Math.random() * 99999999999);
    //CONVIERTE UN NUMERO A STRING
    const randomNumberString = randomNumber.toString();
    JsBarcode("#barCode", randomNumberString );
     // Asigna el valor al input
    this.codigoDeBarras = randomNumberString;
    console.log(this.codigoDeBarras); // Agrega este console.log
  }

  //Metodo para obtener la lista de productos
  getProductList() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }


  showAddModal(){
    this.displayAddModal = true;
  }
  hideAddModal(isClosed:boolean){
    this.displayAddModal= !isClosed;
  }
  





}
