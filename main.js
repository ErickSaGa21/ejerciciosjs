//EJERCICIO 1
/*
let r = prompt('¿Eres bellisimo?');
if(r == 'si' || r== 'Si' )
{
    document.write("Ciertamente eres bellisimo!!!!");
}
else{
    alert('No te creoooo!')
}
*/
//ejercicio2
/*
let n = prompt('Ingresa un numero');
if(n % 2 == 0) 
{
   alert(`el numero ${n} es divisible entre 2`); 
}
else{
    alert(`el numero ${n} no es divisible entre 2`);
}
*/
//ejercicio3
/*
let n = prompt('Ingresa un numero');
if(n % 2 == 0) 
{
   alert(`el numero ${n} es par`); 
}
else{
    alert(`el numero ${n} es in-par`);
}
*/

//ejercicio4
/*
alert('Participas en una rifa aleatoria. Presiona Aceptar para continuar');
let n = prompt('Ingresa el numero para ganar!');
if(n == 1000)
{
    alert('Felicidades!!!! Ganaste un premio')
}
else{
    alert('Lo sentimos, sigue participando')
}
*/
//ejercicio 5
/*
alert('Ingresa 2 numeros que no sean iguales y te diremos cual es el menor. Presiona Aceptar');
let n = prompt('Ingresa el primero');
let m = prompt('Ingresa el segundo');
if(n > m)
{
    alert(`el numero ${m} es el menor`);
}
else if(m > n)
{
    alert(`el numero ${n} es el menor`);
}
else{
    alert('ingresa numeros')
}
*/
//ejercicio6
/*
alert('Ingresa 3 numeros  y te diremos cual es el mayor. Presiona Aceptar');
let n = prompt('Ingresa el primero');
let m = prompt('Ingresa el segundo');
let o = prompt('Ingresa el tercero')
if(n >= m && n>=o )
{
 if(n == m)
 {
    alert(`los  numeros mayores son: ${n} y ${m}`)
 }
 else if(n == o)
 {
    alert(`los  numeros mayores son: ${n} y ${o}`)
 }
 else{
    alert(`el  numero mayor es: ${n}`)
 }
}
if(m >= n && m>=o )
{
 if(m == n)
 {
    alert(`los  numeros mayores son: ${m} y ${n}`)
 }
 else if(m == o)
 {
    alert(`los  numeros mayores son: ${m} y ${o}`)
 }
 else{
    alert(`el  numero mayor es: ${m}`)
 }
}
if(o >= n && o>=m )
{
 if(o == m)
 {
    alert(`los  numeros mayores son: ${o} y ${m}`)
 }
 else if(o == n)
 {
    alert(`los  numeros mayores son: ${o} y ${n}`)
 }
 else{
    alert(`el  numero mayor es: ${o}`)
 }
}
*/
//ejercicio 7
/*
let m = prompt('Hola, dinos que dia es hoy, esperemos lo disfrutes al maximo!');
if(m == 'domingo' ||  m== 'Domingo')
{
    alert('Disfruta este ultimo dia con quienes mas te ries!')
}
if(m == 'lunes' ||  m== 'Lunes')
{
    alert('No te desanimes, ya mero es viernes!!')
}
if(m == 'martes' ||  m== 'Martes')
{
    alert('Enfocate en tus proyectos y despues festejas')
}
if(m == 'miercoles' ||  m== 'Miercoles')
{
    alert('Empieza a organizar tu descanso, disfruta el proceso!')
}
if(m == 'jueves' ||  m== 'Jueves')
{
    alert('Ahora si a echarle ganas!!!')
}
if(m == 'viernes' ||  m== 'Viernes')
{
    alert('Lo checamos el lunes ;)')
}
if(m == 'sabado' ||  m== 'Sabado')
{
    alert('Por fiiin!!')
}
*/
//ejercicio 8
/*
 let c = prompt('Hola, que calificacion me das como programador?');
 if (c <= 10)
 {
    if (c < 6)
    {
      alert('ME REPROBASTE DE VERDAD SOY MUY MALO? :(')
    }
    else if(c >= 6  && c <=8)
    {
        alert('REGULAR. PROMETO MEJORAR :3')
    }
    else if(c == 9)
    {
        alert('BUENO. HAGO LO QUE PUEDO, GRACIAS <3')
    }
    else if(c ==10)
    {
        alert('EXCELENTE. GRACIAS, QUIERO CUMPLIR MI SUEÑO DE SER PROGRAMADOR :3')
    }
 }
 else{
    alert('Error. Elige una calificacion del 1 al 10')
 }
 */
//ejercicio 9
/*
alert('Bienvenido a dehelado. Pulsa aceptar para realizar tu compra')
const preciobase = 50
const toppingusuario = prompt('Deseas topping');

if (toppingusuario =='si')
{
let sabortopping = prompt ('¿Que sabor deseas?\n Oreo $10, kitkat $15, Brownie $20');
if (sabortopping == 'Oreo' || sabortopping == 'oreo')
{
  let nuevoprecio = preciobase + 10
  console.log('El precio total es de: $', nuevoprecio);
}
else if (sabortopping == 'kitkat')
{
  let nuevoprecio = preciobase + 15
  console.log('El precio total es de:$', nuevoprecio);
}
else if (sabortopping == 'Brownie' || sabortopping == 'brownie')
{
  let nuevoprecio = preciobase + 20
  console.log('El precio total es de:$', nuevoprecio);
}
else{
  console.log('Ese topping no esta disponible');
}
}
else{
  console.log('Aqui esta tu helado el precio es de:$', preciobase);
}
*/
//ejercicio 10
/*
alert('Bienvenido  DEV, en un momento te mostramos nuestros niveles y costos de cada curso. Presiona Aceptar para continuar')
let c = prompt('LOS CURSOS SON LOS SIGUIENTES:\nCOURSE $4999 MXN, CARRERA $3999 MXN, MASTER $2999 MXN.\n ¿Cual deseas tomar?')
if(c == 'Course' || c == 'course'){
    let a = 4999;
    alert(`Perfecto escogiste ${c} con costo de $ ${a}.\nPresiona Aceptar para continuar con tu registro`);
    let beca = prompt('¿Cuentas con alguna beca?')
    if( beca == 'si' || beca == 'Si')
    {
        let tipo = prompt('¿Con cual de estas cuentas?\n1.- BECA FACEBOOK\n 2.- BECA GOOGLE\n 3.- BECA JESUA')
        if (tipo == 1)
        {
            let descuento = a*.20;
            let total = a - descuento;
            let dur = total*2;
            alert(`El total con el descuento del 20% de tu beca es:$ ${total}\nLa duracion del curso es de 2 meses\nEn total seria:$ ${dur}`)
        }
        else if(tipo == 2)
        {
            let descuento = a*.15;
            let total = a - descuento;
            let dur = total*2;
            alert(`El total con el descuento del 15% de tu beca es:$ ${total}\nLa duracion del curso es de 2 meses\nEn total seria:$ ${dur}`)
        }
        else if(tipo == 3)
        {
            let descuento = a*.50;
            let total = a - descuento;
            let dur = total*2;
            alert(`El total con el descuento del 50% de tu beca es:$ ${total}\nLa duracion del curso es de 2 meses\nEn total seria:$ ${dur}`)
        }
    }
    else{
         let dur = a*2;
            alert(`El total es:$ ${a}\nLa duracion del curso es de 2 meses\nEn total seria:$ ${dur}`)
    }
}
if(c == 'Carrera' || c == 'carrera'){
    let a = 3999;
    alert(`Perfecto escogiste ${c} con costo de $ ${a}.\nPresiona Aceptar para continuar con tu registro`);
    let beca = prompt('¿Cuentas con alguna beca?')
    if( beca == 'si' || beca == 'Si')
    {
        let tipo = prompt('¿Con cual de estas cuentas?\n1.- BECA FACEBOOK\n 2.- BECA GOOGLE\n 3.- BECA JESUA')
        if (tipo == 1)
        {
            let descuento = a*.20;
            let total = a - descuento;
            let dur = total*6;
            alert(`El total con el descuento del 20% de tu beca es:$ ${total}\nLa duracion del curso es de 6 meses\nEn total seria:$ ${dur}`)
        }
        else if(tipo == 2)
        {
            let descuento = a*.15;
            let total = a - descuento;
            let dur = total*6;
            alert(`El total con el descuento del 15% de tu beca es:$ ${total}\nLa duracion del curso es de 6 meses\nEn total seria:$ ${dur}`)
        }
        else if(tipo == 3)
        {
            let descuento = a*.50;
            let total = a - descuento;
            let dur = total*6;
            alert(`El total con el descuento del 50% de tu beca es:$ ${total}\nLa duracion del curso es de 6 meses\nEn total seria:$ ${dur}`)
        }
    }
    else{
         let dur = a*6;
            alert(`El total es:$ ${a}\nLa duracion del curso es de 6 meses\nEn total seria:$ ${dur}`)
    }
}
if(c == 'Master' || c == 'master'){
    let a = 2999;
    alert(`Perfecto escogiste ${c} con costo de $ ${a}.\nPresiona Aceptar para continuar con tu registro`);
    let beca = prompt('¿Cuentas con alguna beca?')
    if( beca == 'si' || beca == 'Si')
    {
        let tipo = prompt('¿Con cual de estas cuentas?\n1.- BECA FACEBOOK\n 2.- BECA GOOGLE\n 3.- BECA JESUA')
        if (tipo == 1)
        {
            let descuento = a*.20;
            let total = a - descuento;
            let dur = total*12;
            alert(`El total con el descuento del 20% de tu beca es:$ ${total}\nLa duracion del curso es de 12 meses\nEn total seria:$ ${dur}`)
        }
        else if(tipo == 2)
        {
            let descuento = a*.15;
            let total = a - descuento;
            let dur = total*12;
            alert(`El total con el descuento del 15% de tu beca es:$ ${total}\nLa duracion del curso es de 12 meses\nEn total seria:$ ${dur}`)
        }
        else if(tipo == 3)
        {
            let descuento = a*.50;
            let total = a - descuento;
            let dur = total*12;
            alert(`El total con el descuento del 50% de tu beca es:$ ${total}\nLa duracion del curso es de 12 meses\nEn total seria:$ ${dur}`)
        }
    }
    else{
         let dur = a*12;
            alert(`El total es:$ ${a}\nLa duracion del curso es de 12 meses\nEn total seria:$ ${dur}`)
    }
}
*/
//ejercicio 11
alert('Gracias por rentar nuestros vehiculos. Presione Aceptar para continuar con el pago')
let tipo = prompt('¿Que tipo de vehiculo rento con nosotros?\n1.-Coche\n2.-Moto\n3.-Autobus')
if(tipo == 1)
{
    let km = 0.20
    let n = prompt('¿Cuantos km le muestra en el tablero de recorrido?')
    let total = km*n;
    let litros = prompt('¿Cuantos litros de gasolina consumio en su recorrido?')
    if(litros <= 100)
    {
        let extra = total+5;
        alert(`El precio por la renta, recorrido y gasto de gasolina del vehiculo es de:\n$ ${extra}`)
    }
    if(litros > 100)
    {
        let extra = total+10;
        alert(`El precio por la renta, recorrido y gasto de gasolina del vehiculo es de:\n$ ${extra}`)
    }
}
if(tipo == 2)
{
    let km = 0.10
    let n = prompt('¿Cuantos km le muestra en el tablero de recorrido?')
    let total = km*n;
    let litros = prompt('¿Cuantos litros de gasolina consumio en su recorrido?')
    if(litros <= 100)
    {
        let extra = total+5;
        alert(`El precio por la renta, recorrido y gasto de gasolina del vehiculo es de:\n$ ${extra}`)
    }
    if(litros > 100)
    {
        let extra = total+10;
        alert(`El precio por la renta, recorrido y gasto de gasolina del vehiculo es de:\n$ ${extra}`)
    }
}
if(tipo == 3)
{
    let km = 0.50
    let n = prompt('¿Cuantos km le muestra en el tablero de recorrido?')
    let total = km*n;
    let litros = prompt('¿Cuantos litros de gasolina consumio en su recorrido?')
    if(litros <= 100)
    {
        let extra = total+5;
        alert(`El precio por la renta, recorrido y gasto de gasolina del vehiculo es de:\n$ ${extra}`)
    }
    if(litros > 100)
    {
        let extra = total+10;
        alert(`El precio por la renta, recorrido y gasto de gasolina del vehiculo es de:\n$ ${extra}`)
    }
}
else{
    alert('Ingrese el numero del vehiculo rentado')
}



