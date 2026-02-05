// URL do backend (você vai atualizar depois com a URL real!)
const BACKEND_URL = 'https://hello-4ch-952043957190.us-east1.run.app/health';

function showResult(message, type = 'success') {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = message;
    resultDiv.className = `result ${type}`;
}

function showLoading() {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '⏳ Carregando...';
    resultDiv.className = 'result loading';
}

async function checkHealth() {
    showLoading();
    
    try {
        const response = await fetch(`${BACKEND_URL}/health`);
        const data = await response.json();
        
        showResult(`✅ Backend está saudável! Status: ${data.status}`, 'success');
    } catch (error) {
        showResult(`❌ Erro ao conectar com backend: ${error.message}`, 'error');
    }
}

async function checkVersion() {
    showLoading();
    
    try {
        const response = await fetch(`${BACKEND_URL}/version`);
        const data = await response.json();
        
        showResult(
            `📦 Versão: ${data.version} | App: ${data.app} | Status: ${data.status}`,
            'success'
        );
    } catch (error) {
        showResult(`❌ Erro ao conectar com backend: ${error.message}`, 'error');
    }
}