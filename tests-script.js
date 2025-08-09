const quizzes = {
    'ladderPush': {
        title: "Тест по статье «Искусство Ладдер-Пуша»",
        questions: [
            {
                q: "В чем, по словам Профессора, заключается главная цель «Ладдер-пуша»?",
                a: ["Победить в раунде", "Сломать психику противника", "Поднять свой КД", "Заработать денег"],
                c: 1
            },
            {
                q: "Что Профессор советует делать в голосовом чате во время пуша?",
                a: ["Кричать матом", "Давать информацию", "Молчать", "Петь песни"],
                c: 0
            },
            {
                q: "Какую тактику Профессор предлагает для проверки углов?",
                a: ["Аккуратно смотреть", "Использовать смоки", "Пробегать мимо, не глядя", "Ждать тиммейта"],
                c: 2
            },
            {
                q: "Какой вид гранат упоминается как важный для пуша?",
                a: ["Молотов", "Смоки и флешки", "Декой", "Осколочные"],
                c: 1
            },
            {
                q: "Кем вы станете, следуя методичке по «Ладдер-пушу»?",
                a: ["Легендой или посмешищем", "Про-игроком", "Опытным тактиком", "Капитаном команды"],
                c: 0
            }
        ]
    },
    'awpVsAug': {
        title: "Тест по статье «AWP vs. AUG 'Гроза'»",
        questions: [
            {
                q: "Какой главный недостаток AWP, по мнению Профессора?",
                a: ["Он слишком дорогой", "Он для даунов", "Он медленно стреляет", "У него мало патронов"],
                c: 1
            },
            {
                q: "Какой скин и наклейка на AUG делают его великим?",
                a: ["Азимов и Наклейка 'Хихикающий скелет'", "Гроза и Наклейка 'Мимик'", "Призма и Наклейка 'Рысь'", "Стрелок и Наклейка 'Профи'"],
                c: 1
            },
            {
                q: "Какая основная тактика с AUG?",
                a: ["Ждать и выцеливать", "Бежать вперед и стрелять без остановки", "Зажимать из-за угла", "Стрелять по одному патрону"],
                c: 1
            },
            {
                q: "Какое главное преимущество AUG по сравнению с AWP?",
                a: ["Большой магазин", "Дешевизна", "Скорострельность и универсальность", "Лучший зум"],
                c: 2
            },
            {
                q: "Какое звание вы получите, овладев AUG?",
                a: ["Достойный игрок", "Мастер стрельбы", "Бог CS2", "Легенда"],
                c: 2
            }
        ]
    },
    'bRush': {
        title: "Тест по статье «Почему всегда B-rush?»",
        questions: [
            {
                q: "В каком раунде, по мнению Профессора, Б-раш наиболее эффективен?",
                a: ["В последнем", "В середине игры", "В первом раунде", "В любом раунде"],
                c: 2
            },
            {
                q: "Что является главной целью Б-раша?",
                a: ["Убить всех противников", "Разрушить экономику и дух противника", "Быстро поставить бомбу", "Занять позицию"],
                c: 1
            },
            {
                q: "Что нужно делать во время «тактической паузы»?",
                a: ["Планировать", "Кричать матом", "Ждать", "Проверять снаряжение"],
                c: 1
            },
            {
                q: "Какое оружие упоминается как «священный символ» для Б-раша?",
                a: ["P250", "Desert Eagle", "AK-47", "SG553"],
                c: 2
            },
            {
                q: "Какой, так сказать, финальный результат успешного Б-раша?",
                a: ["Победа", "Враги в ярости", "Враги дезориентированы и сбиты с толку", "Вы заработали много денег"],
                c: 2
            }
        ]
    },
    'cowboyTactic': {
        title: "Тест по статье «Ковбойская тактика»",
        questions: [
            {
                q: "Какое основное оружие в «Ковбойской тактике»?",
                a: ["AWP", "Автомат", "Револьвер", "Пистолет-пулемет"],
                c: 2
            },
            {
                q: "Какова основная цель «Ковбойской тактики»?",
                a: ["Убить врагов", "Заработать денег на SG553", "Сломать психику противника", "Сделать красивый фраг"],
                c: 1
            },
            {
                q: "Что, по мнению Профессора, является основой этой тактики?",
                a: ["Точная стрельба", "Отсутствие логики", "Хорошая координация", "Скрытность"],
                c: 1
            },
            {
                q: "Какую реакцию врага нужно вызвать, чтобы понять, что тактика работает?",
                a: ["Они молчат", "Они хвалят", "Они пишут «report this fucking psycho T-side»", "Они смеются"],
                c: 2
            },
            {
                q: "Что нужно делать, чтобы заработать деньги на священный SG553?",
                a: ["Экономить", "Делать фраг револьвером", "Умирать в каждом раунде", "Кидать гранаты"],
                c: 2
            }
        ]
    },
    'colonelLowtaberenco': {
        title: "Тест по статье «Полковник Лоутаберенко»",
        questions: [
            {
                q: "В чем заключается искусство Полковника Лоутаберенко?",
                a: ["Быть в топе", "Быть на последнем месте", "Иметь много MVP", "Использовать крутые скины"],
                c: 1
            },
            {
                q: "Что Полковник делает с гранатами?",
                a: ["Кидает во врагов", "Кидает в себя или в тиммейтов", "Не покупает их", "Кидает в смоки"],
                c: 1
            },
            {
                q: "Какова цель тактики «Ебаная курица»?",
                a: ["Уничтожить врагов", "Повеселить тиммейтов", "Сбить с толку противников", "Просто так"],
                c: 2
            },
            {
                q: "Какое оружие Полковник покупает в каждом раунде?",
                a: ["AWP", "Револьвер", "SG553", "Дробовик"],
                c: 1
            },
            {
                q: "Как Профессор характеризует свою связь с Полковником?",
                a: ["Как дружеский союз", "Как Инь и Янь", "Как соперничество", "Как сотрудничество"],
                c: 1
            }
        ]
    },
    'chertolet': {
        title: "Тест по статье «Чертолет в PUBG»",
        questions: [
            {
                q: "В какой игре применяется тактика «Чертолет»?",
                a: ["CS2", "PUBG", "Dota 2", "Fortnite"],
                c: 1
            },
            {
                q: "Какой вид транспорта используется в этой тактике?",
                a: ["Машина", "Мотоцикл", "Вертолет", "Лодка"],
                c: 2
            },
            {
                q: "Куда нужно приземлиться, чтобы начать «Чертолет»?",
                a: ["В поле", "В воду", "На крышу высотного здания", "На базу"],
                c: 2
            },
            {
                q: "Что Профессор говорит о езде по земле?",
                a: ["Это эффективно", "Это для лохов", "Это безопасно", "Это быстро"],
                c: 1
            },
            {
                q: "Что является, так сказать, ключевым аспектом для успеха?",
                a: ["Скрытность", "Точная стрельба", "Скорость", "Сломать психику противника"],
                c: 3
            }
        ]
    },
    'realLife': {
        title: "Тест по статье «Тактильный Контакт»",
        questions: [
            {
                q: "Где, по мнению Профессора, нужно применять тактику «Тактильный Контакт»?",
                a: ["В игре", "В спортзале", "В очереди в магазине", "В метро"],
                c: 2
            },
            {
                q: "Какое действие является ключевым элементом этой тактики?",
                a: ["Стоять сзади", "Общаться с продавцом", "Вызвать хаос и дезориентацию", "Следовать правилам"],
                c: 2
            },
            {
                q: "Что делать, если кто-то смотрит на вас с осуждением?",
                a: ["Извиниться", "Ответить тем же", "Кричать «Don't look at me, you fuckin' noob!»", "Отвернуться"],
                c: 2
            },
            {
                q: "Какая основная цель этой тактики?",
                a: ["Выйти из магазина первым", "Принести толику безумия в реальную жизнь", "Найти новых друзей", "Сделать покупки"],
                c: 1
            },
            {
                q: "Что нужно делать, когда вы стоите в очереди?",
                a: ["Молчать", "Читать книгу", "Встать перед человеком с корзиной", "Общаться по телефону"],
                c: 2
            }
        ]
    },
    'marathonDesmatch': {
        title: "Тест по статье «Марафонский Дезматч»",
        questions: [
            {
                q: "Какое место работы описывается в статье?",
                a: ["Офис", "Бар", "Прилавок в магазине", "Стройка"],
                c: 2
            },
            {
                q: "Какое основное «оружие» в «Марафонском Дезматче»?",
                a: ["Ручка и бумага", "Фотоальбом", "Кофе", "Компьютер"],
                c: 1
            },
            {
                q: "Какова главная задача в этом «Дезматче»?",
                a: ["Продать больше", "Выжить до конца смены", "Сломать дух клиента", "Сорвать свою злость на клиенте"],
                c: 2
            },
            {
                q: "Что нужно сделать, если клиент просит «хороший фотоальбом»?",
                a: ["Показать самый лучший", "Показать самый дешевый", "Показать самый худший сначала", "Сказать, что нет хороших"],
                c: 2
            },
            {
                q: "Как Профессор описывает свой опыт работы?",
                a: ["Увлекательный", "Приятный", "Ебаный ад", "Скучный"],
                c: 2
            }
        ]
    }
};

let currentQuizKey;

function backToTestList() {
    const testListSection = document.getElementById('test-list-section');
    const quizSection = document.getElementById('quiz-section');
    document.body.className = ''; // Remove the unique test class
    testListSection.style.display = 'block';
    quizSection.style.display = 'none';
}

function startTest(quizKey) {
    currentQuizKey = quizKey;
    const testListSection = document.getElementById('test-list-section');
    const quizSection = document.getElementById('quiz-section');
    const quizForm = document.getElementById('quiz-form');
    const testTitle = document.getElementById('test-title');
    const resultDiv = document.getElementById('result');

    // Добавляем уникальный класс к body
    document.body.className = `test-${quizKey}`;

    testListSection.style.display = 'none';
    quizSection.style.display = 'block';
    
    quizForm.innerHTML = '';
    resultDiv.innerHTML = '';

    const quizData = quizzes[quizKey];
    testTitle.textContent = quizData.title;

    quizData.questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `<p>${index + 1}. ${q.q}</p><div class="options" id="options-${index}"></div>`;
        
        const optionsDiv = questionDiv.querySelector('.options');
        q.a.forEach((option, i) => {
            optionsDiv.innerHTML += `
                <label>
                    <input type="radio" name="q${index}" value="${i}">
                    ${option}
                </label>
            `;
        });
        
        quizForm.appendChild(questionDiv);
    });

    // Reset button to its initial state
    const submitButton = document.getElementById('submit-button');
    submitButton.textContent = "Собственно говоря, проверить!";
    submitButton.onclick = submitTest;
}

function submitTest() {
    const quizData = quizzes[currentQuizKey];
    let score = 0;
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');

    for (let i = 0; i < quizData.questions.length; i++) {
        const selectedOption = form.querySelector(`input[name="q${i}"]:checked`);
        const correctAnswerIndex = quizData.questions[i].c;
        
        if (selectedOption) {
            const selectedValue = parseInt(selectedOption.value);
            const selectedLabel = selectedOption.closest('label');

            if (selectedValue === correctAnswerIndex) {
                score++;
                selectedLabel.classList.add('correct');
            } else {
                selectedLabel.classList.add('incorrect');
            }
        }

        // Disable all radio buttons after submitting
        const radios = document.getElementById(`options-${i}`).querySelectorAll('input[type="radio"]');
        radios.forEach(radio => radio.disabled = true);
    }

    let classification;
    switch (score) {
        case 5:
            classification = "Лучший ученик Профессора! 🚀";
            break;
        case 4:
            classification = "Достоин быть в команде Профессора!";
            break;
        case 3:
            classification = "Новичок, но с потенциалом.";
            break;
        case 2:
            classification = "Полный нуб... срочно перечитать статью!";
            break;
        case 1:
            classification = "Ебаный нуб. Что ты вообще тут делаешь?";
            break;
        case 0:
            classification = "Противник Профессора. Бан!";
            break;
    }

    resultDiv.innerHTML = `<h3>Ваш результат: ${score} из 5</h3><p>${classification}</p>`;
    
    // Create and add the back button
    const backButton = document.createElement('button');
    backButton.id = 'back-to-tests-button';
    backButton.className = 'cta-button';
    backButton.textContent = 'К списку тестов';
    backButton.onclick = backToTestList;
    resultDiv.appendChild(backButton);

    const submitButton = document.getElementById('submit-button');
    submitButton.textContent = "Пересдать тест, сука!";
    submitButton.onclick = () => {
        // Reset the form to its initial state
        startTest(currentQuizKey);
    };
}