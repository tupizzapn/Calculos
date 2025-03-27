document.getElementById('calcular').addEventListener('click', function() {
  const B = parseFloat(document.getElementById('masaBiga').value);
  const h = parseFloat(document.getElementById('hidratacion').value) / 100;

  if (isNaN(B) || isNaN(h)) {
    alert("Por favor, ingrese valores válidos.");
    return;
  }
 
  const Hb = B / 1.5;               // Hb Harina de Biga
  const Ab = B - Hb;               // Agua de Biga
  const Ht = Hb * 10 / 9;          //Harina total
  const At = Ht * h;               // Agua total
  const Hm = Ht - Hb;              // Harina para la Masa
  const Ac = Ht * 0.02;            // Aceite
  const Am = At - Ab;         // Agua de Masa
  const L = Ht * 0.00125;           // Levadura de Masa 
  const S = Ht * 0.025;            //Sal

  // Redondear todos los resultados a números enteros
  document.getElementById('Ht').textContent = Math.round(Ht);
  document.getElementById('Hb').textContent = Math.round(Hb);
  document.getElementById('Hm').textContent = Math.round(Hm);
  document.getElementById('L').textContent = Math.round(L);
  document.getElementById('Ab').textContent = Math.round(Ab);
  document.getElementById('At').textContent = Math.round(At);
  document.getElementById('Am').textContent = Math.round(Am);
  document.getElementById('Ac').textContent = Math.round(Ac);
  document.getElementById('S').textContent = Math.round(S);
});
