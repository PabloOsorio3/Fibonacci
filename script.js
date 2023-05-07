const generarSecuencia = () => {

  const secuencia = document.getElementById("secuencia");
  const cantidad = document.getElementById("cantidad").value;
  secuencia.innerHTML = "";

  let a = 0;
  let b = 1;

  for (let i = 0; i < cantidad; i++) {

    const c = a + b;
    const li = document.createElement("li");

    li.innerHTML = c;
    secuencia.appendChild(li);

    a = b;
    b = c;

  }

}
