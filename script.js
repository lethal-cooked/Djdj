// Load balances from localStorage or set defaults
const loadBalances = () => {
    const balances = JSON.parse(localStorage.getItem('walletBalances')) || {
        btc: 847.2083574883923, // Hard-coded your BTC balance
        eth: 0,
        usdc: 0,
        totalUSD: 0
    };
    document.getElementById('btcBalance').textContent = `${balances.btc.toFixed(13)} BTC`;
    document.getElementById('ethBalance').textContent = `${balances.eth.toFixed(4)} ETH`;
    document.getElementById('usdcBalance').textContent = `${balances.usdc.toFixed(2)} USDC`;
    document.getElementById('totalBalance').textContent = `$${balances.totalUSD.toFixed(2)}`;
    
    // Fake chart for portfolio
    const ctx = document.getElementById('portfolioChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Portfolio Value',
                data: [10000, 15000, 20000, 18000, 25000, balances.totalUSD],
                borderColor: '#00ff88',
                fill: false
            }]
        },
        options: {
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
};
loadBalances();
