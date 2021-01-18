// ТП - Тип лестницы
// Фиксированная цена

// М - Материал
// Фиксированная цена

// П - Покрытие
// Фиксированная цена 

// Пс - Подступеньки
// Есть: 6%

// Ш - Ширина
// Каждые 5см изменяется на 2%. Начальная позиция на ширине 100см (0%). от 70 до 80 фиксированные 8%

// В - Высота

// Формула
// ТП + М + П + Пс% + Ш% + В%

// Комплектующие

const types = document.querySelectorAll('.calc__item__type'), // ТП - Тип лестницы
      materials = document.querySelectorAll('.calc__item__material'), // М - Материал
      covers = document.querySelectorAll('.calc-radio'), // П - Покрытие
      risers = document.querySelectorAll('.calc__item__riser'); // Пс - Подступеньки

// Размеры

const width = document.querySelector('#stairsWidth'), // Ш - Ширина
      height = document.querySelector('#stairsHeight'); // В - Высота

// Рассчет

const price = document.querySelector('#calcPriceValue'), // Ц - Цена
      btn = document.querySelector('.calc__price-btn');

// Данные для калькулятора

const dataCalc = [
  {
    type: '',
    material: '',
    cover: '',
    riser: '',
    width: '',
    height: ''
  }
];

// Рассчет
// ТП + М + П + Пс% + Ш% + В%
btn.addEventListener('click', () => {
  console.log(dataCalc);
  let percentCalc = (+dataCalc[0].riser / 100) + (+dataCalc[0].width / 100) + (+dataCalc[0].height / 100)
  let integerCalc = +dataCalc[0].type + +dataCalc[0].material + +dataCalc[0].cover;
  price.textContent = integerCalc + (integerCalc * percentCalc);
  howWidthPercent();
});

// Тип лестницы

for (let type of types) {
  type.addEventListener('click', () => {
    for (let typeRemoveActive of types) {
      typeRemoveActive.classList.remove('_active');
    }
    type.classList.add('_active');

    dataCalc[0].type = type.dataset.price;
  });
}

// Материалы

for (let material of materials) {
  material.addEventListener('click', () => {
    for (let materialRemoveActive of materials) {
      materialRemoveActive.classList.remove('_active');
    }
    material.classList.add('_active');

    dataCalc[0].material = material.dataset.price;
  });
}

// Материалы

for (let cover of covers) {
  cover.addEventListener('click', () => {
    dataCalc[0].cover = cover.dataset.price;
  });
}

// Подступеньки

for (let riser of risers) {
  riser.addEventListener('click', () => {
    for (let riserRemoveActive of risers) {
      riserRemoveActive.classList.remove('_active');
    }
    riser.classList.add('_active');

    dataCalc[0].riser = riser.dataset.price;
  });
}


const widthPercentList = [
  ["80","-8%"],
  ["85","-6%"],
  ["90","-4%"],
  ["95","-2%"],
  ["100","0"],
  ["105","5%"],
  ["110","10%"],
  ["115","15%"],
  ["120","20%"],
  ["125","25%"],
  ["130","30%"],
  ["135","35%"],
  ["140","40%"],
  ["145","45%"],
  ["150","50%"],
  ["155","55%"],
  ["160","60%"],
  ["165","65%"],
  ["170","70%"],
  ["175","75%"],
  ["180","80%"],
  ["185","85%"],
  ["190","90%"],
  ["195","95%"],
  ["200","100%"]
]

const howWidthPercent = () => {
  const howWidthPercent = widthPercentList.find(item => item === width.value);
  // dataCalc[0].width = howWidthPercent;
  console.log(howWidthPercent)
}