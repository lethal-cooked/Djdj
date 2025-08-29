document.getElementById('adminForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const balances = {
        btc: parseFloat(document.getElementById('btcInput').value),
        eth: parseFloat(document.getElementById('ethInput').value),
        usdc: parseFloat(document.getElementById('usdcInput').value),
        totalUSD: parseFloat(document.getElementById('totalUSDInput').value)
    };
    localStorage.setItem('walletBalances', JSON.stringify(balances));
    alert('Balances updated! Check the wallet.');
    window.location.href = 'index.html';
});
