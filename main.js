// Сначала получить все рабочие id и class

// Значение из текстовых инпутов

const totalCost = document.querySelector('#total-cost'),
      anInitialFee = document.querySelector('#an-initial-fee'),
      creditTerm = document.querySelector('#credit-term');
      
// Значение из range инпутов

const totalCostRange = document.querySelector('#total-cost-range'),
      anInitialFeeRange = document.querySelector('#an-initial-fee-range'),
      creditTermRange = document.querySelector('#credit-term-range');

// Итоговые значения

const totalAmountOfCredit = document.querySelector('#amount-of-credit'),
      totalMonthlyPayment = document.querySelector('#monthly-payment'),
      totalRecomendedIncome = document.querySelector('#recomended-income');

// Все кнопки с процентной ставкой банков

const bankBtns = document.querySelectorAll('.bank');

// Все range

const inputsRange = document.querySelectorAll('.input-range');

const assignValue = () => {
  totalCost.value = totalCostRange.value;
  anInitialFee.value = anInitialFeeRange.value;
  creditTerm.value = creditTermRange.value;
};
assignValue();

const banks = [
  {
    name: 'alfa',
    percent: 8.7
  },
  {
    name: 'sberbank',
    percent: 8.4
  },
  {
    name: 'pochta',
    percent: 7.9
  },
  {
    name: 'tinkoff',
    percent: 9.2
  }
];

let currentPercent = banks[0].percent;

for (let bank of bankBtns) {
  bank.addEventListener('click', function() {
    for (let items of bankBtns) {
      items.classList.remove('active');
    }
    bank.classList.add('active');
    takeActiveBank(bank);
  });
}

const takeActiveBank = currentActive => {
  const dataAttrValue = currentActive.dataset.name;
  const currentBank = banks.find(bank => bank.name === dataAttrValue);
  currentPercent = currentBank.percent;
}

for (let input of inputsRange) {
  input.addEventListener('input', () => {
    assignValue();
    console.log(totalCost.value);
  })
}