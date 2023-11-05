import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import JsBarcode from 'jsbarcode';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-add-edit-productos',
  templateUrl: './add-edit-productos.component.html',
  styleUrls: ['./add-edit-productos.component.scss'],
})
export class AddEditProductosComponent implements OnInit {
  @Input() displayAddModal: boolean = false;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  visible: boolean = false;
  value: any;
  onUpload(event: UploadEvent) {
    console.log(event);
  }

  /*--Validar nombre de los inputs--*/

  // Declara la propiedad productForm como un FormGroup
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      nameProducto: ['', Validators.required],
      price: [0, Validators.required],
      stock: [0, Validators.required],
      description: [''],
      category: ['', Validators.required],
      Image: [''],
      priceMayor: [0, Validators.required],
      priceCompra: [0, Validators.required],
      unidadMedida: ['', Validators.required], // Corrección en el nombre del campo
      Almacen: ['', Validators.required],
      codigoDeBarras: ['', Validators.required],
      // Otros campos del formulario aquí...
    });
  }
  /**----------*/

  showDialog() {
    this.visible = true;
  }

  ngOnInit(): void {
    JsBarcode('#barCode', '123456789');
  }
  closeModal() {
    this.clickClose.emit(true);
    // Resetea el formulario para borrar los valores
    this.productForm.reset();
    // Emite el evento para cerrar el modal
    this.clickClose.emit(true);
  }
  hideAddModal(isClosed: boolean) {
    // Realiza la lógica necesaria aquí si es necesario

    // Luego, establece displayAddModal en false para ocultar el modal
    this.displayAddModal = false;
    this.clickClose.emit(isClosed);
  }
  addProduct() {}

  // Propiedad para mantener el valor del código de barras
  codigoDeBarras: string = '';
  generateBarcode() {
    //crea un serie de numeros aletorios con 11 digitos
    const randomNumber = Math.floor(Math.random() * 99999999999);
    //CONVIERTE UN NUMERO A STRING
    const randomNumberString = randomNumber.toString();
    JsBarcode('#barCode', randomNumberString);

    // Asigna el valor al input
    this.codigoDeBarras = randomNumberString;
  }
}
