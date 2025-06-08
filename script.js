let display = document.getElementById('display');
    let currentInput = '';

    function append(char) {
      if (char === '.' && currentInput.endsWith('.')) return;
      currentInput += char;
      updateDisplay();
    }

    function updateDisplay() {
      display.textContent = currentInput || '0';
    }

    function clearDisplay() {
      currentInput = '';
      updateDisplay();
    }

    function calculate() {
      try {
        let result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
    }

    function backspace() {
      currentInput = currentInput.slice(0, -1);
      updateDisplay();
    }

    // Keyboard support
    document.querySelector('.calculator').addEventListener('keydown', (e) => {
      const key = e.key;
      if (!isNaN(key) || '+-*/.'.includes(key)) {
        append(key);
      } else if (key === 'Enter') {
        e.preventDefault();
        calculate();
      } else if (key === 'Backspace') {
        backspace();
      } else if (key.toLowerCase() === 'c') {
        clearDisplay();
      }
    });

    // Theme toggle
    function toggleTheme() {
      document.body.classList.toggle('light');
    }