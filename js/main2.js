function verInfo(){

  document.querySelector('.MesesAnteriores').classList.toggle('active');
}
// Funcionalidad a los progresos circulares

circularChart({el: '#circular-chart-1', data: '6', color: '#ff9f00'});
circularChart({el: '#circular-chart-2', data: '8', color: '#4cc790'});
circularChart({el: '#circular-chart-3', data: '56', color: '#3c9ee5'});
circularChart({el: '#circular-chart-4', data: '54', color: '#dc3545'});
circularChart({el: '#circular-chart-5', data: '98', color: '#6f42c1'});


function circularChart(options = {}) {
    let draw = SVG().addTo(options.el).attr("viewBox", '0 0 90 90');
    draw.path("M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a  15.9155 15.9155 0 0 1 0 -31.831").addClass("background");
    draw.path("M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831").addClass("foreground").attr("stroke-dasharray", options.data+', 100').stroke(options.color);

    draw.plain(options.data+"%").attr('x', '18').attr('y', '20.35').addClass('percentage');
    
}



// Funcionalidad al sidevar
function tocar(){
  const contenedor__principal = document.querySelector('.contenedor__principal');
  contenedor__principal.classList.toggle('active');
}


// Funcionalidad al modal de insertar usuario
function modal(){
    const modal = new bootstrap.Modal(document.getElementById('modalUser'));
    modal.show();
}
function modal2(){
    const modalproduct = new bootstrap.Modal(document.getElementById('modalproduct'));
    modalproduct.show();
}
function modal3(){
    const modalcategoria = new bootstrap.Modal(document.getElementById('modalcategoria'));
    modalcategoria.show();
}
function modal4(){
    const modalproveedor = new bootstrap.Modal(document.getElementById('modalproveedor'));
    modalproveedor.show();
}
function modal5(){
    const modalroles = new bootstrap.Modal(document.getElementById('modalroles'));
    modalroles.show();
}
function modal6(){
    const modalpermisos = new bootstrap.Modal(document.getElementById('modalpermisos'));
    modalpermisos.show();
}
function modal7(){
    const modalRealizarCompra = new bootstrap.Modal(document.getElementById('modalRealizarCompra'));
    modalRealizarCompra.show();
}

function alerta(){
    Swal.fire({
        title: 'Desea Eliminar este Usuario?',
        text: "El usuario desaparecera al Aceptar la Opcion!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33 ',
        confirmButtonText: 'Si, Quiero!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado Correctamente!',
            'Se ha realizado con exito su Petición',
            'success'
          )
        }
      })
}

function alerta3(){
  Swal.fire({
      title: 'Desea Eliminar esta Categoria?',
      text: "La categoria desaparecera al Aceptar la Opcion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33 ',
      confirmButtonText: 'Si, Quiero!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado Correctamente!',
          'Se ha realizado con exito su Petición',
          'success'
        )
      }
    })
}
function alerta22(){
  Swal.fire({
      title: 'Desea Eliminar este Producto?',
      text: "El Producto desaparecera al Aceptar la Opcion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33 ',
      confirmButtonText: 'Si, Quiero!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado Correctamente!',
          'Se ha realizado con exito su Petición',
          'success'
        )
      }
    })
}
function alerta222(){
  Swal.fire({
      title: 'Desea Eliminar este Proveedor?',
      text: "El Proveedor desaparecera al Aceptar la Opcion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33 ',
      confirmButtonText: 'Si, Quiero!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado Correctamente!',
          'Se ha realizado con exito su Petición',
          'success'
        )
      }
    })
}

function alerta2222(){
  Swal.fire({
      title: 'Desea Eliminar este Rol de Usuario?',
      text: "El Rol desaparecera al Aceptar la Opcion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33 ',
      confirmButtonText: 'Si, Quiero!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado Correctamente!',
          'Se ha realizado con exito su Petición',
          'success'
        )
      }
    })
}

function alerta22222(){
  Swal.fire({
      title: 'Desea Eliminar el Permiso de Rol?',
      text: "El Permiso desaparecera al Aceptar la Opcion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33 ',
      confirmButtonText: 'Si, Quiero!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado Correctamente!',
          'Se ha realizado con exito su Petición',
          'success'
        )
      }
    })
}

function alerta2(){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'El usuario Admin no es posible eliminarlo!',
    footer: '<h6> El usuario super Admin es el usuario Base del sistema</h6>'
  })
}
