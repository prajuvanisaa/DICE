function rollDice() {
    const diceValue = Math.floor(Math.random() * 6) + 1; // Generate a single random value

    // Update the dice with dots
    const dice = document.getElementById('dice');
    dice.innerHTML = ''; // Clear previous dots
    
    // Generate dots based on diceValue
    for (let i = 0; i < diceValue; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dice.appendChild(dot);
    }

    // Define dot positions for dice faces
    const positions = [
        [{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }], // 1 dot
        [{ top: '30%', left: '30%' }, { bottom: '30%', right: '30%' }], // 2 dots
        [{ top: '25%', left: '25%' }, { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }, { bottom: '25%', right: '25%' }], // 3 dots with spacing
        [{ top: '20%', left: '20%' }, { top: '20%', right: '20%' }, { bottom: '20%', left: '20%' }, { bottom: '20%', right: '20%' }], // 4 dots
        [{ top: '20%', left: '20%' }, { top: '20%', right: '20%' }, { bottom: '20%', left: '20%' }, { bottom: '20%', right: '20%' }, { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }], // 5 dots
        [{ top: '10%', left: '10%' }, { top: '10%', left: '50%', transform: 'translateX(-50%)' }, { top: '10%', right: '10%' }, { bottom: '10%', left: '10%' }, { bottom: '10%', left: '50%', transform: 'translateX(-50%)' }, { bottom: '10%', right: '10%' }] // 6 dots
    ];
    
    // Apply styles to dots based on diceValue
    const dots = dice.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        Object.assign(dot.style, positions[diceValue - 1][index]);
    });

    // Animate button click
    const button = document.querySelector('button');
    button.classList.add('clicked');
    button.textContent = 'Rolled';
    button.style.background = 'linear-gradient(135deg, #ff4c4c 0%, #ff6f61 100%)'; // Change to red gradient
    setTimeout(() => {
        button.classList.remove('clicked');
        button.textContent = 'Roll';
        button.style.background = 'linear-gradient(135deg, #ff6f61 0%, #ffcc00 100%)'; // Revert to original gradient
    }, 500); // Duration of confirmation
}
