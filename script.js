document.getElementById('imcForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var peso = document.getElementById('peso').value;

    if (isNaN(peso)) {
        alert('Por favor, insira um número válido para a peso.');
        return;
    }

    peso = parseFloat(peso);
    var altura = document.getElementById('altura').value;

    if (isNaN(altura)) {
        alert('Por favor, insira um número válido para a altura.');
        return;
    }

    altura = parseFloat(altura);

    var imc = peso / (altura * altura);

    var categoria;

    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        categoria = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        categoria = 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
        categoria = 'Obesidade grau 2';
    } else {
        categoria = 'Obesidade grau 3 (mórbida)';
    }

    var pesoIdealMin = 18.5 * altura * altura;
    var pesoIdealMax = 24.9 * altura * altura;
    var pesoParaPerderOuGanhar;

    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
        pesoParaPerderOuGanhar = 'Você precisa ganhar aproximadamente ' + (pesoIdealMin - peso).toFixed(2) + ' kg para atingir o IMC ideal.';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = 'Peso normal';
        pesoParaPerderOuGanhar = 'Você está no seu peso ideal!';
    } else if (imc >= 25 && imc < 29.9) {
        categoria = 'Sobrepeso';
        pesoParaPerderOuGanhar = 'Você precisa perder aproximadamente ' + (peso - pesoIdealMax).toFixed(2) + ' kg para atingir o IMC ideal.';
    } else {
        categoria = 'Obesidade';
        pesoParaPerderOuGanhar = 'Você precisa perder aproximadamente ' + (peso - pesoIdealMax).toFixed(2) + ' kg para atingir o IMC ideal.';
    }

    document
        .getElementById('resultado')
        .textContent = 'Seu IMC é: ' + imc
        .toFixed(2) + '. Categoria: ' + categoria + '. ' + pesoParaPerderOuGanhar;
});
