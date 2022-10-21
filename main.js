// function permiso(nombre, edad) {
//   if (edad >= 18) {
//     console.log(`${nombre}, puedes solicitar el permiso`)
//   } else {
//     console.log(`${nombre}, no puedes solicitar el permiso`)
//   }
// }

// function calcularPromedio(nota1, nota2, nota3) {
//   const promedio = (nota1 + nota2 + nota3) / 3
//   //   return (nota1 + nota2 + nota3) / 3
// }

const calcularPromedio = (nota1, nota2, nota3) => {
  console.log("nota1: ", nota1, "nota2:", nota2, "nota3:", nota3)
  const promedio = (nota1 + nota2 + nota3) / 3
  return promedio
  console.log("Este código no se va a ejecutar")
}

console.log(calcularPromedio())

function imprimirPromedio(promedio) {
  if (promedio >= 70) {
    console.log("Aprobado: " + promedio)
  } else {
    console.log("Reprobado: " + promedio)
  }
}

// const promedio = calcularPromedio(-5, 100, 100)
// imprimirPromedio(promedio)
// const promedio = calcularPromedio(5, 3, 4)
// imprimirPromedio(promedio)
