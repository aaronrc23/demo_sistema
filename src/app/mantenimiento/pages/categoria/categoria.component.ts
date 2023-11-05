import { Component } from '@angular/core';
import { CategoriaService } from '../../Servicios/categoria.service';
import { Categoria } from '../../Interface/Categoria';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent {
  @ViewChild('nombreInput') nombreInput: any; // Agrega la referencia ViewChild
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  /*Pagination*/
  first = 0;

  rows = 10;

  pageChange(event: { first: number; rows: number }) {
    this.first = event.first;
    this.rows = event.rows;
  }
  /*---*/

  value: string | undefined;
  value2: string | undefined;
  value3: string | undefined;

  nuevaCategoria: Categoria = {
    nombre: '',
    activo: true,
  };

  categorias: Categoria[] = [];
  nuevoProducto: any = {};

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      (categorias: Categoria[]) => {
        this.categorias = categorias;
      },
      (error) => {
        console.error('Error al cargar las categorías:', error);
      }
    );

    this.categoriaService.categorias$.subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
    });
  }

  /*Funcion para crear Categoria*/
  crearCategoria(): void {
    // Verifica si la categoría ya existe en la lista actual de categorías
    const categoriaExistente = this.categorias.find(
      (c) => c.nombre === this.nuevaCategoria.nombre
    );

    if (categoriaExistente) {
      this.visible = false;
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `La categoría "${this.nuevaCategoria.nombre}" ya está registrada.`,
        confirmButtonText: 'Aceptar',
      }).then((result) => {
        if (result.isConfirmed) {
          this.visible = true;
        }
      });
    } else {
      this.visible = false;
      // Muestra el SweetAlert2 de confirmación
      Swal.fire({
        title: '¿Estás seguro?',
        text: '¿Deseas registrar esta categoría?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, registrar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          // El usuario hizo clic en "Sí, registrar", por lo que enviamos la solicitud al servidor

          this.categoriaService.crearCategoria(this.nuevaCategoria).subscribe(
            () => {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Categoría creada con éxito',
                showConfirmButton: false,
                timer: 1500,
              });
              // Restablece el valor del input a una cadena vacía
              this.nombreInput.nativeElement.value = '';
              this.obtenerCategorias();
            },
            (error) => {
              console.error('Error al crear la categoría:', error);
              // Maneja el error, si es necesario
            }
          );
        } else {
          this.nombreInput.nativeElement.value = '';
        }
      });
    }
  }

  obtenerCategorias() {
    this.categoriaService.getCategorias().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  actualizarCategoria(idcategoria: number, categoria: Categoria): void {
    this.categoriaService.actualizarCategoria(idcategoria, categoria).subscribe(
      (response) => {
        console.log('Categoría actualizada:', response);
        // Puedes manejar la respuesta del servidor, como mostrar un mensaje de éxito.
        // Luego, obtén las categorías actualizadas y actualiza la variable categorías
        this.obtenerCategorias();
      },
      (error) => {
        console.error('Error al actualizar la categoría:', error);
        // Puedes manejar errores, como mostrar un mensaje de error.
      }
    );
  }
}
