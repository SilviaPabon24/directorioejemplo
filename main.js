window.addEventListener('DOMContentLoaded', () => {
    fetch('data/database.json')
        .then(response => response.json())
        .then(data => {
            const dataContainer = document.getElementById('data-container');
            data.forEach(item => {
                const listItem = document.createElement('div');
                listItem.textContent = `ID: ${item.id} - Nombre: ${item.nombre}`;
                dataContainer.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error al cargar la base de datos:', error);
        });
});
