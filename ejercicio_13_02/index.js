/**
 *     
 *  Vamos a realizar ahora una especie de "juego" en el que tendremos 
    que adivinar las coordenadas de un lugar emblemático del mundo 
    de entre tres opciones. 
    La manera de seleccionar una respuesta será copiando las coordenadas.

    Al copiar la línea correcta, 
    un aviso los aparecerá en la pantalla mediante un alert, 
    si no acertamos también lo notificará.
 * 
 */
    
const latitud = "48.8583701";
const longitud = "2.2944813";

document.addEventListener('DOMContentLoaded',(e) => {

   const coordenadas = document.getElementById('coordenadas');
   
   document.getElementById('btn-confirmar').addEventListener('click', () => {

      const latitud_enviada = coordenadas.options[coordenadas.selectedIndex].dataset.latitud;
      const longitud_enviada = coordenadas.options[coordenadas.selectedIndex].dataset.longitud;

      comprobarCoordenadas(latitud_enviada,longitud_enviada);
   });

   const comprobarCoordenadas = (latitud_enviada,longitud_enviada) => {
      if(latitud_enviada === latitud && longitud_enviada === longitud ) alert('Coordenadas correctas');
      else alert('Coordenadas incorrectas'); 

      resetar_select();
   }

   const resetar_select = () => {
      coordenadas.value=-1;
   }

});