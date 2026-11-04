/* ===== VARIANT 5 — «BUILD & BREW» · корпоративный кейс-сайт ===== */
(function () {
  window.CI_CONFIG = Object.assign({}, window.CI_DATA, {
    id: 'v5',
    tokens: {
      '--bg': '#f6f7f8', '--fg': '#101828', '--muted': '#5b6676', '--card': '#ffffff', '--line': '#dde2e9',
      '--accent': '#1f4fd8', '--accent-fg': '#ffffff', '--tile': 'rgba(31,79,216,.08)', '--tile-fg': '#1f4fd8',
      '--btn-bg': '#1f4fd8', '--btn-fg': '#ffffff', '--input-bg': '#ffffff',
      '--art-fg': '#ffffff', '--tag-bg': '#eef1f6', '--tag-fg': '#101828',
      '--r-btn': '8px', '--r-card': '10px', '--r-input': '8px', '--maxw': '1180px', '--gap': '18px'
    },
    art: { mode: 'corp', base: '#e9edf3', palette: ['#1f4fd8', '#7d9be8', '#c9d6f2', '#2a3a5e', '#8fa9e0'] }
  });

  var NAVP = [['home', 'Главная'], ['services', 'Услуги'], ['cases', 'Кейсы'], ['vendors', 'Вендоры'],
    ['space', 'Пространство'], ['shop', 'Мерч'], ['contacts', 'Контакты']];
  function links() {
    return NAVP.map(function (n) { return '<a href="#' + n[0] + '" data-nav="' + n[0] + '">' + n[1] + '</a>'; }).join('');
  }
  var HEAD = '<header class="v5-head"><div class="wrap">' +
    '<a class="v5-logo" href="#home" data-nav="home"><span class="mark">{{ic:cup}}</span>' +
    '<b>coffeeIT<span>кофейня и IT-интегратор</span></b></a>' +
    '<nav class="v5-nav">' + links() + '</nav>' +
    '<div class="v5-head-r"><span class="v5-tel">+7 495 000-00-00</span>' +
    '<button class="v5-cart" data-cart-open aria-label="Корзина">{{ic:cart}}<span class="badge" id="cartBadge">0</span></button>' +
    '<a class="btn" href="#contacts" data-cta="project">Оставить заявку</a>' +
    '<button class="burger" id="burger" aria-label="Меню" aria-expanded="false"><i></i><i></i><i></i></button>' +
    '</div></div></header><nav class="mobile-menu">' + links() + '</nav>';

  /* услуги в виде строк-таблицы */
  function serviceRows() {
    return window.CI_DATA.services.map(function (s) {
      return '<div class="v5-srow rv"><div class="left"><div class="v5-icon">' + window.CI_ICON(s.icon) + '</div>' +
        '<h3>' + s.title + '</h3><span class="tag">' + s.time + '</span></div>' +
        '<div class="right"><div><p>' + s.text + '</p><div class="tags">' +
        s.list.map(function (l) { return '<span>' + l + '</span>'; }).join('') + '</div></div>' +
        '<div class="price"><b>' + s.price + '</b><span>ориентир</span>' +
        '<a class="link-arrow" href="#contacts" data-cta="service" data-topic="' + s.title + '">Обсудить →</a></div></div></div>';
    }).join('');
  }

  window.CI_CONFIG.layout = function () {
    return HEAD + '<main>' +

    /* HOME */
    '<section class="page" id="page-home">' +
      '<div class="v5-hero"><div class="wrap">' +
        '<div>' +
          '<span class="v5-badge">● Работаем с 2016 · Москва, «Флакон»</span>' +
          '<h1>IT-контур и <em>кофе</em><br>из одного окна</h1>' +
          '<p class="lead">coffeeIT — кофейня для разработчиков и IT-интегратор: разработка ПО, подбор и закупка серверов, информационная безопасность, интеграции и поддержка. Собираем инфраструктуру и держим её в рабочем состоянии.</p>' +
          '<div class="v5-hero-cta"><a class="btn" href="#contacts" data-cta="project">Обсудить задачу</a>' +
          '<a class="btn btn-ghost" href="#services" data-nav="services">Смотреть услуги</a></div>' +
          '<div class="v5-usp">' +
            '<div><b data-count="120" data-suffix="+">120+</b><span>проектов и поставок с 2016 года</span></div>' +
            '<div><b data-count="9" data-suffix=" лет">9 лет</b><span>средний опыт инженеров команды</span></div>' +
            '<div><b data-count="24" data-suffix="/7">24/7</b><span>поддержка по SLA и открытая кофейня</span></div>' +
          '</div>' +
        '</div>' +
        '<div class="v5-hero-card">' +
          '<div class="ph" style="background-image:url({{heroArt}})"></div>' +
          '<div class="body">' +
            '<div class="row"><span>Сегодня открыто</span><b>08:00 – 23:00</b></div>' +
            '<div class="row"><span>Свободных рабочих мест</span><b>7 из 24</b></div>' +
            '<div class="row"><span>Ближайший митап</span><b>Чт, 19:00</b></div>' +
            '<div class="note">«Как выбрать сервер и не пожалеть» — бесплатно, кофе включён. <a href="#contacts" data-cta="book" style="color:var(--accent)">Записаться →</a></div>' +
          '</div>' +
        '</div>' +
      '</div></div>' +

      '<div class="v5-quick"><div class="wrap">' +
        '<a href="#services" data-nav="services">{{ic:code}} Разработка ПО и сайтов</a>' +
        '<a href="#vendors" data-nav="vendors">{{ic:server}} Серверы, СХД, лицензии</a>' +
        '<a href="#services" data-nav="services">{{ic:shield}} Аудит и безопасность</a>' +
        '<a href="#space" data-nav="space">{{ic:chat}} Места, переговорки, митапы</a>' +
      '</div></div>' +

      '<section class="v5-sec"><div class="wrap">' +
        '<div class="v5-shead"><span class="k">Услуги</span><div><h2>Пять направлений — один договор и один ответственный</h2>' +
        '<p>Не нужно искать отдельного разработчика, поставщика железа и подрядчика по безопасности. Мы закрываем весь IT-контур и отвечаем за результат целиком.</p></div></div>' +
        serviceRows() +
      '</div></section>' +

      '<div class="v5-band"><div class="wrap">' +
        '<div><b>99,98%</b><span>средний аптайм систем под нашим SLA</span></div>' +
        '<div><b>11 дней</b><span>средняя поставка серверного оборудования</span></div>' +
        '<div><b>−38%</b><span>ручных операций после интеграций</span></div>' +
        '<div><b>0</b><span>замечаний при проверках 152-ФЗ у клиентов</span></div>' +
      '</div></div>' +

      '<section class="v5-sec"><div class="wrap">' +
        '<div class="v5-shead"><span class="k">Кейсы</span><div><h2>Проекты с измеримым результатом</h2>' +
        '<p>Три из шести проектов. В каждом — задача, решение и цифры, которые можно проверить.</p></div></div>' +
        '{{casesHome}}' +
        '<div style="margin-top:20px"><a class="btn btn-ghost" href="#cases" data-nav="cases">Все кейсы →</a></div>' +
      '</div></section>' +

      '<section class="v5-sec" style="background:#fff;border-block:1px solid var(--line)"><div class="wrap">' +
        '<div class="v5-shead"><span class="k">Пространство</span><div><h2>Кофейня, в которой работают</h2>' +
        '<p>Рабочие места, переговорки и площадка для митапов. Здесь же — витрина серверного железа: можно посмотреть оборудование до закупки.</p></div></div>' +
        '<div class="v5-tabs" data-tabs><button class="is-on" data-tab="zones">Зоны и бронирование</button><button data-tab="menu">Кофейное меню</button></div>' +
        '<div class="v5-panel is-on" data-panel="zones"><div class="v5-zones">{{zonesHtml}}</div>' +
          '<div style="margin-top:18px"><a class="btn" href="#space" data-nav="space">Забронировать место</a></div></div>' +
        '<div class="v5-panel" data-panel="menu">{{menuHtml}}</div>' +
      '</div></section>' +

      '<section class="v5-sec"><div class="wrap">' +
        '<div class="v5-shead"><span class="k">Вендоры</span><div><h2>Работаем с вендорами напрямую</h2>' +
        '<p>Партнёрские условия, сервисные центры в России и подбор оборудования под задачу, а не по наличию скидки.</p></div></div>' +
        '<div class="v5-vendors">{{vendorsHtml}}</div>' +
      '</div></section>' +

      '<section class="v5-sec" style="background:#fff;border-block:1px solid var(--line)"><div class="wrap">' +
        '<div class="v5-shead"><span class="k">Мерч</span><div><h2>Корпоративный мерч coffeeIT</h2>' +
        '<p>Кружки, футболки, худи, кепки, шопперы, термокружки, блокноты и стикеры. Делаем корпоративные тиражи с логотипом заказчика.</p></div></div>' +
        '{{shopPreview}}' +
        '<div style="margin-top:20px"><a class="btn btn-ghost" href="#shop" data-nav="shop">Весь мерч · 23 позиции →</a></div>' +
      '</div></section>' +

      '<section class="v5-sec"><div class="wrap"><div class="v5-split">' +
        '<div class="v5-faq"><h3 style="font-size:18px;margin-bottom:8px">Частые вопросы</h3>' +
          '<details open><summary>Вы работаете только по Москве?</summary><p>Основная площадка — Москва, но проекты ведём по всей России удалённо. Оборудование поставляем в любой регион.</p></details>' +
          '<details><summary>Можно заказать только закупку серверов?</summary><p>Да. Подберём конфигурацию, согласуем поставку, смонтируем и настроим. Разработку при этом не навязываем.</p></details>' +
          '<details><summary>Как формируется цена?</summary><p>После бесплатной диагностики фиксируем объём и стоимость. Для инфраструктуры считаем стоимость владения на 3 года.</p></details>' +
          '<details><summary>Что входит в поддержку?</summary><p>Мониторинг, реакция по SLA от 4 часов, обновления, резервное копирование и ежемесячный отчёт.</p></details>' +
        '</div>' +
        '<div class="v5-form"><h3>Бесплатная 30-минутная диагностика</h3><p>Разберём задачу и скажем, что делать дальше — даже если не будем работать вместе.</p>' +
          '<form class="lead-form js-lead">' +
          '<div class="row"><input name="name" required placeholder="Имя"><input name="contact" required placeholder="Телефон или e-mail"></div>' +
          '<select name="topic"><option>Разработка ПО и сайтов</option><option>Закупка серверов и лицензий</option><option>Информационная безопасность</option><option>Интеграции и автоматизация</option><option>Инфраструктура и поддержка</option></select>' +
          '<textarea name="message" rows="3" placeholder="Коротко о задаче"></textarea>' +
          '<button class="btn" type="submit">Записаться на диагностику</button>' +
          '<p class="form-note">Откроется почта с готовым письмом. <span class="form-ok" hidden>Письмо сформировано.</span></p></form></div>' +
      '</div></div></section>' +

      '<section class="v5-cta"><div class="wrap">' +
        '<div><h2>Обсудим ваш IT-контур?</h2><p>Ответим в течение рабочего дня, предложим решение и предварительную смету. Кофе — за нами.</p></div>' +
        '<form class="v5-sub js-news"><span>Письмо месяца: новое оборудование, кофейные лоты, митапы</span>' +
        '<input type="email" required placeholder="e-mail" aria-label="e-mail"><button class="btn" type="submit">Подписаться</button></form>' +
      '</div></section>' +
    '</section>' +

    /* SERVICES */
    '<section class="page" id="page-services">' +
      '<div class="v5-page-hero"><div class="wrap"><div class="crumb">Главная / Услуги</div>' +
      '<h1>Услуги и направления</h1><p>Пять направлений с ориентирами по стоимости и срокам. Итоговая смета — после бесплатной диагностики.</p></div></div>' +
      '<section class="v5-sec"><div class="wrap">' + serviceRows() + '</div></section>' +
      '<section class="v5-sec" style="background:#fff;border-top:1px solid var(--line)"><div class="wrap"><div class="v5-split">' +
        '<div><h2 style="font-size:26px;letter-spacing:-.02em">Как проходит работа</h2>' +
        '<div class="v5-grid3" style="grid-template-columns:1fr 1fr;margin-top:18px">' +
          '<div class="v5-cardx"><div class="top"><span class="v5-icon">{{ic:chat}}</span><h3>1. Диагностика</h3></div><p>30 минут, бесплатно. Смотрим задачу, инфраструктуру и риски, даём письменный вывод.</p></div>' +
          '<div class="v5-cardx"><div class="top"><span class="v5-icon">{{ic:book}}</span><h3>2. Смета и план</h3></div><p>Фиксируем объём, сроки и стоимость. Согласуем этапы и точки приёмки.</p></div>' +
          '<div class="v5-cardx"><div class="top"><span class="v5-icon">{{ic:gear}}</span><h3>3. Работа</h3></div><p>Спринты по две недели, демо, доступ к доске задач и общий чат.</p></div>' +
          '<div class="v5-cardx"><div class="top"><span class="v5-icon">{{ic:check}}</span><h3>4. Передача</h3></div><p>Документация, обучение, гарантия 12 месяцев и поддержка по SLA.</p></div>' +
        '</div></div>' +
        '<div class="v5-form"><h3>Заявка на расчёт</h3><p>Опишите задачу — пришлём оценку и план в течение рабочего дня.</p>' +
          '<form class="lead-form js-lead"><div class="row"><input name="name" required placeholder="Имя"><input name="contact" required placeholder="Контакт"></div>' +
          '<select name="topic"><option>Разработка ПО и сайтов</option><option>Закупка серверов и лицензий</option><option>Информационная безопасность</option><option>Интеграции и автоматизация</option><option>Инфраструктура и поддержка</option></select>' +
          '<textarea name="message" rows="4" placeholder="Что есть сейчас и что нужно получить"></textarea>' +
          '<button class="btn" type="submit">Отправить заявку</button>' +
          '<p class="form-note">Откроется почта с готовым письмом. <span class="form-ok" hidden>Письмо сформировано.</span></p></form></div>' +
      '</div></div></section>' +
    '</section>' +

    /* CASES */
    '<section class="page" id="page-cases">' +
      '<div class="v5-page-hero"><div class="wrap"><div class="crumb">Главная / Кейсы</div>' +
      '<h1>Кейсы</h1><p>Шесть проектов: разработка, безопасность, поставка оборудования и автоматизация. Фильтруйте по направлению.</p></div></div>' +
      '<section class="v5-sec"><div class="wrap">{{casesHtml}}</div></section>' +
      '<section class="v5-cta"><div class="wrap"><div><h2>Обсудим ваш проект</h2><p>Предложим решение и предварительную смету за 3 дня.</p></div>' +
      '<div><a class="btn" href="#contacts" data-cta="project">Оставить заявку</a></div></div></section>' +
    '</section>' +

    /* VENDORS */
    '<section class="page" id="page-vendors">' +
      '<div class="v5-page-hero"><div class="wrap"><div class="crumb">Главная / Вендоры</div>' +
      '<h1>Вендоры и технологии</h1><p>Прямые контракты, партнёрские условия и сервисные центры в России. Подбираем стек под задачу, нагрузку и стоимость владения.</p></div></div>' +
      '<section class="v5-sec"><div class="wrap"><div class="v5-vendors">{{vendorsHtml}}</div>' +
      '<div class="v5-split" style="margin-top:26px">' +
        '<div class="v5-faq"><h3 style="font-size:18px;margin-bottom:8px">Как мы выбираем оборудование</h3>' +
          '<details open><summary>Совместимость и рост</summary><p>Проверяем, как решение встанет в текущий контур и выдержит план роста на три года.</p></details>' +
          '<details><summary>Сроки и сервис</summary><p>Смотрим наличие на складе, сроки поставки и наличие сервисных центров в регионе.</p></details>' +
          '<details><summary>Стоимость владения</summary><p>Считаем TCO: лицензии, поддержка, электричество, ФОТ обслуживания.</p></details>' +
          '<details><summary>Тест до закупки</summary><p>Часть оборудования можно посмотреть и протестировать на нашей витрине в кофейне.</p></details>' +
        '</div>' +
        '<div class="v5-form"><h3>Подбор оборудования</h3><p>Пришлите конфигурацию или задачу — дадим 2–3 варианта по бюджету.</p>' +
          '<form class="lead-form js-lead"><div class="row"><input name="name" required placeholder="Имя"><input name="contact" required placeholder="Контакт"></div>' +
          '<input type="hidden" name="topic" value="Подбор оборудования и вендоров">' +
          '<textarea name="message" rows="3" placeholder="Серверы, СХД, сеть, лицензии — что нужно"></textarea>' +
          '<button class="btn" type="submit">Получить спецификацию</button>' +
          '<p class="form-note">Ответим в рабочее время. <span class="form-ok" hidden>Письмо сформировано.</span></p></form></div>' +
      '</div></div></section>' +
    '</section>' +

    /* SPACE */
    '<section class="page" id="page-space">' +
      '<div class="v5-page-hero"><div class="wrap"><div class="crumb">Главная / Пространство</div>' +
      '<h1>Пространство и кофейня</h1><p>24 рабочих места, три переговорки, зал на 60 человек и витрина серверного оборудования. Бронирование — онлайн.</p></div></div>' +
      '<section class="v5-sec"><div class="wrap">' +
        '<div class="v5-tabs" data-tabs><button class="is-on" data-tab="zones">Зоны и цены</button><button data-tab="menu">Меню</button><button data-tab="book">Бронирование</button></div>' +
        '<div class="v5-panel is-on" data-panel="zones"><div class="v5-zones">{{zonesHtml}}</div></div>' +
        '<div class="v5-panel" data-panel="menu">{{menuHtml}}</div>' +
        '<div class="v5-panel" data-panel="book"><div class="v5-split"><div class="v5-form"><h3>Бронирование места</h3><p>Стол, переговорка или место на митап — подтвердим в течение часа.</p>' +
          '<form class="lead-form js-book"><div class="row"><input name="name" required placeholder="Имя"><input name="contact" required placeholder="Телефон или @telegram"></div>' +
          '<div class="row"><input type="date" name="date" required aria-label="Дата"><select name="time"><option>09:00–12:00</option><option>12:00–16:00</option><option>16:00–20:00</option><option>20:00–23:00</option></select></div>' +
          '<div class="row"><select name="zone"><option>Рабочее место</option><option>Переговорка</option><option>Митап / событие</option><option>Стол у бара</option></select><input name="people" placeholder="Сколько человек" inputmode="numeric"></div>' +
          '<button class="btn" type="submit">Забронировать</button>' +
          '<p class="form-note">Бронь подтверждаем сообщением. <span class="form-ok" hidden>Заявка сформирована.</span></p></form></div>' +
          '<div class="v5-faq"><details open><summary>Можно ли с ноутбуком на весь день?</summary><p>Да, дневной тариф — 1 200 ₽, включает кофе и воду без лимита.</p></details>' +
          '<details><summary>Есть ли звонковые?</summary><p>Да, две звукоизолированные кабины для созвонов — бесплатно для гостей.</p></details>' +
          '<details><summary>Можно провести митап?</summary><p>Зал на 60 человек, проектор, звук и стрим. Стоимость — от 25 000 ₽, кофе включён.</p></details></div>' +
        '</div></div>' +
      '</div></section>' +
    '</section>' +

    /* SHOP */
    '<section class="page" id="page-shop">' +
      '<div class="v5-page-hero"><div class="wrap"><div class="crumb">Главная / Мерч</div>' +
      '<h1>Мерч coffeeIT</h1><p>23 позиции: кружки, футболки, худи, кепки, шопперы, термокружки, блокноты и стикеры. Возможны корпоративные тиражи с вашим логотипом.</p></div></div>' +
      '<section class="v5-sec"><div class="wrap">' +
        '<div class="v5-shopbar"><span>В наличии · доставка по Москве от 2 дней · самовывоз у бара</span>' +
        '<button class="btn btn-ghost btn-sm" data-cart-open>Открыть корзину</button></div>' +
        '{{shopHtml}}' +
      '</div></section>' +
    '</section>' +

    /* CONTACTS */
    '<section class="page" id="page-contacts">' +
      '<div class="v5-page-hero"><div class="wrap"><div class="crumb">Главная / Контакты</div>' +
      '<h1>Контакты</h1><p>Москва, Большая Новодмитровская, 36, дизайн-завод «Флакон», вход 3. Пять минут от метро Дмитровская.</p></div></div>' +
      '<section class="v5-sec"><div class="wrap"><div class="v5-contacts">' +
        '<div><ul class="v5-crows">{{contactsHtml}}</ul><div class="v5-map">Схема: «Флакон», вход 3<br>м. Дмитровская, 5 минут</div></div>' +
        '<div class="v5-form"><h3>Оставить заявку</h3><p>Ответим в рабочее время, обычно в течение часа.</p>' +
          '<form class="lead-form js-lead"><div class="row"><input name="name" required placeholder="Имя"><input name="contact" required placeholder="Телефон или e-mail"></div>' +
          '<select name="topic"><option>Разработка и сайты</option><option>Серверы и лицензии</option><option>Информационная безопасность</option><option>Бронирование пространства</option><option>Мерч и корпоративные подарки</option></select>' +
          '<textarea name="message" rows="4" placeholder="Опишите задачу"></textarea>' +
          '<button class="btn" type="submit">Отправить</button>' +
          '<p class="form-note">Или напрямую: hello@coffeeit.studio · @coffeeit. <span class="form-ok" hidden>Письмо сформировано.</span></p></form></div>' +
      '</div></div></section>' +
    '</section>' +

    '</main>' + '{{cart}}';
  };
})();
