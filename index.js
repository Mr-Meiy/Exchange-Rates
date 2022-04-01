import { hitAPI, endPoints } from "./forExApi.js";

const baseCurrencySelector = document.querySelector("#baseCurrency");
const quoteCurrencySelector = document.querySelector("#quoteCurrency");
const baseCurrencyValueSelector = document.querySelector("#baseCurrencyValue");
const quoteCurrencyValueSelector = document.querySelector("#quoteCurrencyValue");

const convert = async() => {
    const baseCurrency = baseCurrencySelector.value;
    const quoteCurrency = quoteCurrencySelector.value;
    const baseCurrencyValue = baseCurrencyValueSelector.value;
    // const quoteCurrencyValue = quoteCurrencyValueSelector.value;
    const convertedRes = await hitAPI(`${endPoints.convert}?from=${baseCurrency}&to=${quoteCurrency}`);
    const oneUnitResult = convertedRes.result;
    quoteCurrencyValueSelector.value = baseCurrencyValue * oneUnitResult;
};

baseCurrencySelector.addEventListener("change", convert);
quoteCurrencySelector.addEventListener("change", convert);
baseCurrencyValueSelector.addEventListener("change", convert);
quoteCurrencyValueSelector.addEventListener("change", convert);

const symbolsRes = await hitAPI(endPoints.symbols);
let currencies = Object.keys(symbolsRes.symbols);
let selectorHTML = ``; //`<option>Select Currency</option>`;
currencies.map(ele => {
    selectorHTML += `<option value=${ele}>${ele}</option>`
});
baseCurrencySelector.innerHTML = selectorHTML;
quoteCurrencySelector.innerHTML = selectorHTML;
convert();