let sidebar = document.querySelector('.sidebar')
let closeBtn = document.querySelector('#btn')
let searchBtn = document.querySelector('.bx-search')

closeBtn.addEventListener('click', ()=>{
  sidebar.classList.toggle('open')
  menuBtnChange()//llamamos la funcion(Opcional)
})

searchBtn.addEventListener('click', ()=>{ // Barra lateral abierta al hacer clic en el icono de búsqueda
  sidebar.classList.toggle('open')
  menuBtnChange() //llamando a la función (opcional)
})

//código para cambiar el botón de la barra lateral (opcional)
function menuBtnChange() {
 if(sidebar.classList.contains('open')){
   closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right')
 }else {
   closeBtn.classList.replace('bx-menu-alt-right','bx-menu')
 }
}
