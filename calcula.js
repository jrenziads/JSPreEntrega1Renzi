/// esto es para el proyecto Pre entrega 1
// Me traigo los datos del html
function calcularRecargo() {
    const monto = parseFloat(document.getElementById('monto').value);
    const cuotas = parseInt(document.getElementById('cuotas').value);
    // si so si tengo que poner un valor en monto (si pongo otra cosa no valida) y la cantidad de cuotas para que siga
    if (isNaN(monto) || isNaN(cuotas)) {
        alert('Ingrese un monto y seleccione la cantidad de cuotas válidos.');
        return;
    }
    
    const coeficientes = {
        2: 0.1782,
        3: 0.2375,
        4: 0.2988,
        5: 0.3619,
        6: 0.1695,
        9: 0.6741,
        12: 0.9121,
        18: 1.4350
    };
    
    const recargo = monto * coeficientes[cuotas];
    const totalConRecargo = monto + recargo;
    const importePorCuota = totalConRecargo / cuotas;
    
    const resultado = `
        <p>Monto Inicial: $${monto.toFixed(2)}</p>
        <p>Coeficiente de Recargo: ${coeficientes[cuotas]}</p>
        <p>Recargo: $${recargo.toFixed(2)}</p>
        <p>Importe a pasar por POSNET: $${totalConRecargo.toFixed(2)}</p>
        <p>Importe por Cuota: $${importePorCuota.toFixed(2)}</p>
    `;
    
    document.getElementById('resultadoRecargo').innerHTML = resultado;
    document.getElementById('resultado').style.display = 'block';
}
