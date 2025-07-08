if (window.location.href.includes('index.html')) {
  document.getElementById('login').onclick = () => {
    const user = document.getElementById('user').value || 'Cliente';
    sessionStorage.setItem('username', user);
    sessionStorage.setItem('balance', '19750');
    window.location = 'dashboard.html';
  };
} else {
  document.getElementById('username').innerText = sessionStorage.getItem('username');
  document.getElementById('balance').innerText = sessionStorage.getItem('balance');

  const modal = document.getElementById('withdrawForm');
  document.getElementById('withdrawBtn').onclick = () => modal.classList.remove('hidden');
  document.getElementById('cancelWithdraw').onclick = () => modal.classList.add('hidden');

  document.getElementById('method').onchange = (e) => {
    const det = document.getElementById('methodDetails');
    if (e.target.value === 'tarjeta') {
      det.innerHTML = 'Titular: <input id="tname"><br>Número: <input id="tnum">';
    } else if (e.target.value === 'banco') {
      det.innerHTML = 'Cuenta: <input id="bacc"><br>Banco: <input id="bbank">';
    } else {
      det.innerHTML = 'Wallet: <input id="cwallet">';
    }
  };

  document.getElementById('submitWithdraw').onclick = () => {
    const bal = parseFloat(sessionStorage.getItem('balance'));
    const amt = parseFloat(document.getElementById('amount').value);
    if (!amt || amt <= 0 || amt > bal) return alert('Monto inválido');
    sessionStorage.setItem('balance', (bal - amt).toFixed(2));
    document.getElementById('balance').innerText = sessionStorage.getItem('balance');
    alert('¡Retiro simulado éxitoso!');
    modal.classList.add('hidden');
  };
}
