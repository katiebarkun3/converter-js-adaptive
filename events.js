import variables from "./variables.js";
import { fetchCodes } from "./index.js";
import { handleInput, switchCurrencies } from "./convert.js";
import { handleSubmit } from "./convert.js";

const { amountInput, form, switchButton } = variables;

fetchCodes();

amountInput.addEventListener('keyup', handleInput);

form.addEventListener("submit", handleSubmit);

switchButton.addEventListener("click", switchCurrencies);