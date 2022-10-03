document.querySelectorAll('.accordion__button').forEach(button =>{
    button.addEventListener('click', () =>{
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion__button--active');

        if(button.classList.contains('accordion__button--active')){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';

        }else{
            accordionContent.style.maxHeight = 0;
        }

    });
});


document.querySelectorAll('.accordion__button-1').forEach(button =>{
    button.addEventListener('click', () =>{
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion__button--active');

        if(button.classList.contains('accordion__button--active')){
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';

        }else{
            accordionContent.style.maxHeight = 0;
        }

    });
});





//Validacion de los radio button.
type="text/javascript"
	function validarRadio(){
		var s="no";
	for(var i=0;i<document.f1.documento.length;i++)
    
	{
		if(document.f1.documento[i].checked){
          //Obtenemos el valor del documento en numero
          var docmu = document.getElementById('docum').value = `${document.f1.documento[i].value}`;
          //--------------------------------------------
          //Deshabilitamos la casilla del valor.
          document.getElementById('docum').disabled=true;
          //--------------------------------------------


          //Cerramos el button list al seleccionar un radio button
          //document.getElementById('clssa').style.display = 'none';

       
           //--------------------------------------------

			//alert("Tipo de documento :"+document.f1.documento[i].value);
			s="si";
		}else if(validarRadio==true){
            docmu.style.visibility="visible"


        }else if(validarRadio == docmu){
            document.getElementById('clssa').style.display = 'block'
          }else {
            document.getElementById('clssa').style.display = 'none'
          }
          
	}
	if(s=="no"){
		alert("Debe seleccionar DNI, RTN O PASAPORTE");
	}
	
    }



    








