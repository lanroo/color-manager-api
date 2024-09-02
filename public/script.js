const pickr = Pickr.create({
    el: '#color-picker',
    theme: 'classic', 
    default: '#FF0000',
    components: {
        preview: true,
        opacity: true,
        hue: true,
        interaction: {
            input: true,
            save: true
        }
    }
});

document.getElementById('add-color').addEventListener('click', async () => {
    const color = pickr.getColor().toHEXA().toString();
    const name = prompt('Digite o nome da cor:');
    
    if (name) {
        const response = await fetch('/colors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, hex: color }),
        });

        if (response.ok) {
            alert('Cor adicionada com sucesso!');
            loadColors();
        } else {
            alert('Erro ao adicionar cor.');
        }
    }
});

async function loadColors() {
    const response = await fetch('/colors');
    const colors = await response.json();
    const colorList = document.getElementById('color-list');
    colorList.innerHTML = '';

    colors.forEach(color => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="color-sample" style="background-color: ${color.hex};"></span>${color.name} - ${color.hex}`;
        colorList.appendChild(li);
    });
}

loadColors();
