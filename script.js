document.getElementById('calcular').addEventListener('click', function() {
  const B = parseFloat(document.getElementById('masaBiga').value);
  const h = parseFloat(document.getElementById('hidratacion').value) / 100;

  if (isNaN(B) || isNaN(h)) {
    alert("Por favor, ingrese valores válidos.");
    return;
  }

  const Hb = B / 1.5;
  const Ab = B - Hb;
  const Ht = Hb * 10 / 9;
  const At = Ht * h;
  const Hm = Ht - Hb;
  const Ac = Ht * 0.02;
  const Am = At - Ab - Ac;
  const L = Ht * 0.0025;
  const Az = Ht * 0.05;
  const S = Ht * 0.024;

  // Redondear todos los resultados a números enteros
  document.getElementById('Ht').textContent = Math.round(Ht);
  document.getElementById('Hb').textContent = Math.round(Hb);
  document.getElementById('Hm').textContent = Math.round(Hm);
  document.getElementById('L').textContent = Math.round(L);
  document.getElementById('Ab').textContent = Math.round(Ab);
  document.getElementById('At').textContent = Math.round(At);
  document.getElementById('Am').textContent = Math.round(Am);
  document.getElementById('Az').textContent = Math.round(Az);
  document.getElementById('Ac').textContent = Math.round(Ac);
  document.getElementById('S').textContent = Math.round(S);
});
