document.getElementById('calcular').addEventListener('click', function() {
  const B = parseFloat(document.getElementById('masaBiga').value);
  const h = parseFloat(document.getElementById('hidratacion').value) / 100;

  if (isNaN(B) || isNaN(h)) {
    alert("Por favor, ingrese valores válidos.");
    return;
  }

  const Hb = B / 1.5;
  const Ab = B - Hb;
  const Ht = Hb * 9 / 10;
  const At = Ht * h;
  const Hm = Ht - Hb;
  const Ac = Ht * 0.07;
  const Am = At - Ab - Ac;
  const L = Ht * 0.005;
  const Az = Ht * 0.05;
  const S = Ht * 0.024;

  document.getElementById('Ht').textContent = Ht.toFixed(2);
  document.getElementById('Hb').textContent = Hb.toFixed(2);
  document.getElementById('Hm').textContent = Hm.toFixed(2);
  document.getElementById('L').textContent = L.toFixed(2);
  document.getElementById('Ab').textContent = Ab.toFixed(2);
  document.getElementById('At').textContent = At.toFixed(2);
  document.getElementById('Am').textContent = Am.toFixed(2);
  document.getElementById('Az').textContent = Az.toFixed(2);
  document.getElementById('Ac').textContent = Ac.toFixed(2);
  document.getElementById('S').textContent = S.toFixed(2);
});
