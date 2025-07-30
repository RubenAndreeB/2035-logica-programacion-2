# Secret Number Game 🎯

This is a simple JavaScript-based **Secret Number Game** where the user has to guess a randomly generated number. The game provides feedback after each attempt and keeps track of the number of tries. It is designed to be played directly in the browser and is ideal for practicing DOM manipulation and basic JavaScript logic.

> ⚠️ This is the **only file in the repository authored by me**. All other files are unrelated and belong to other contributors or purposes.

---

## 🎮 How to Play

1. The game selects a random number between 1 and a configurable maximum (`numeroMaximo`).
2. You enter a number in the input box and click the **"Try"** button.
3. The game tells you if the secret number is higher or lower than your guess.
4. You continue guessing until you get the correct number.
5. Once guessed, you can restart the game.

---

## 🧠 Features

- Prevents duplicate random numbers until all possible options have been used.
- Dynamically disables the game when all numbers have been exhausted.
- Tracks and displays the number of attempts.
- Clear and reset input field for a better user experience.
- Fully controlled using vanilla JavaScript (no libraries).

---

## 📁 File Information

- `index.html` – Expected to include the basic structure with an input, buttons, and DOM elements with IDs like `valorUsuario`, `intentar`, `reiniciar`, and tags like `h1`, `p`.
- `script.js` – This is the file you’re currently viewing. It contains **my code** and handles the game logic.

---

## 🛠️ Code Overview

Main functions:

- `asignarTextoElemento(selector, text)` – Sets inner HTML of the given selector.
- `generarNumeroSecreto()` – Generates a random, non-repeated number.
- `verificarIntento()` – Checks the user’s guess and provides feedback.
- `limpiarCaja()` – Clears and focuses the input field.
- `condicionesIniciales()` – Initializes or resets the game state.
- `reiniciarJuego()` – Resets the game and disables the restart button.

---

## 🧪 Example Console Output

```bash
Número secreto generado: 4
[4]
Número secreto generado: 2
[4, 2]
