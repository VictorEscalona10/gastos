
const nombreGastoInput = document.getElementById('nombre_gasto');
const montoGastoInput = document.getElementById('monto_gasto');
const fechaGastoInput = document.getElementById('fecha_gasto');
const agregarGastoBtn = document.getElementById('agregar_gasto');
const listaGastos = document.getElementById('lista_gastos');
const totalGastos = document.getElementById('total_gastos');

function agregarGasto() {
    const nombreGasto = nombreGastoInput.value.trim();
    const montoGasto = parseFloat(montoGastoInput.value);
    const fechaGasto = fechaGastoInput.value;
    
    // esto lo puse porque me daba NaN cuando no se ingresaba nada
    if (!nombreGasto || isNaN(montoGasto)) {
        alert('Por favor, introduce un nombre válido, un monto positivo y una fecha.');
        return;
    }

    const gasto = document.createElement('li');
    gasto.textContent = `${nombreGasto}: $${montoGasto.toFixed(2)} (${fechaGasto})`;
    listaGastos.appendChild(gasto);

    const totalActual = parseFloat(totalGastos.textContent) || 0;
    totalGastos.textContent = (totalActual + montoGasto).toFixed(2);

    nombreGastoInput.value = '';
    montoGastoInput.value = '';
}

agregarGastoBtn.addEventListener('click', agregarGasto);
