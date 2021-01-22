export default {
  internship: {
    intro: {
      title: `Стажировка`,
      text: `Приглашаем студентов старших курсов и${'\u00A0'}магистратуры, аспирантов и${'\u00A0'}выпускников технических вузов на${'\u00A0'}оплачиваемую стажировку. `,
      buttons: [`Оставить заявку`, `Смотреть вакансии`],
      picture: `/images/intern-header-desktop.jpg`,
      size: {
        width: 344,
        height: 489,
      },
      mobPicture: `/images/intern-header-mobile.jpg`,
    },
    about: {
      title: `О стажировке`,
      text: `Мы${'\u00A0'}нацелены на${'\u00A0'}долгосрочные отношения и${'\u00A0'}развитие стажера до${'\u00A0'}уровня квалифицированного специалиста. Ты${'\u00A0'}сам выбираешь направление, в${'\u00A0'}котором хочешь развиваться, а${'\u00A0'}мы${'\u00A0'}тебе в${'\u00A0'}этом поможем!`,
      sidebar: {
        icon: `fire`,
        title: `Стажировка длится 6${'\u00A0'}месяцев`,
        description: `По${'\u00A0'}результатам прохождения стажировки ты${'\u00A0'}можешь получить приглашение на${'\u00A0'}постоянную работу в DINS.`,
      },
    },
    gallery: {
      pictures: [
        {
          src: `/images/slide-1.jpg`,
          title: `Комфортное рабочее место: от${'\u00A0'}желаемого количества мониторов до${'\u00A0'}комнатных цветов и${'\u00A0'}увлажнителя воздуха`,
          size: {
            width: 706,
            height: 405,
          },
        },
        {
          src: `/images/slide-2.jpg`,
          title: `Время начала работы гибкое. Многие команды работают, как им${'\u00A0'}удобно`,
          size: {
            width: 706,
            height: 405,
          },
        },
        {
          src: `/images/slide-3.jpg`,
          title: `Белая зарплата, ДМС со стоматологией`,
          size: {
            width: 706,
            height: 405,
          },
        },
        {
          src: `/images/slide-4.jpg`,
          title: `Разговорный клуб на английском языке. Практика при общении с иностранными коллегами`,
          size: {
            width: 706,
            height: 405,
          },
        },
      ],
    },
    info: {
      title: `Давай знакомиться`,
      text: `DINS${'\u00A0'}— это центр разработки, который участвует в${'\u00A0'}создании UCaaS-платформы для американской компании RingCentral. Решение, в${'\u00A0'}разработке которого мы${'\u00A0'}принимаем участие, содержит большой набор функций:`,
      list: [
        `корпоративный чат`,
        `контактный центр`,
        `видеоконференции`,
        `факс`,
        `облачная телефония`,
        `и многое другое`,
      ],
      sidebar: {
        picture: `/images/intern-info.png`,
        title: `450+ тыс компаний`,
        text: `из${'\u00A0'}США, Канады и${'\u00A0'}Великобритании выбирают платформу для бизнес-коммуникаций, над которой мы${'\u00A0'}ежедневно работаем`,
      },
    },
    values: {
      title: `Мы предлагаем`,
      items: [
        {
          icon: `calendar`,
          title: `График`,
          text: `Стажеры работают от${'\u00A0'}30${'\u00A0'}часов в${'\u00A0'}неделю. Ты${'\u00A0'}сможешь совмещать работу с${'\u00A0'}учебой и${'\u00A0'}полностью погрузиться в${'\u00A0'}процессы.`,
        },
        {
          icon: `more`,
          title: `Поддержка и${'\u00A0'}развитие`,
          text: `Помогаем на${'\u00A0'}всем пути: у${'\u00A0'}тебя будет ментор, который будет следить за${'\u00A0'}твоим прогрессом, и${'\u00A0'}команда инженеров, которые всегда поддержат.`,
        },
        {
          icon: `briefcase`,
          title: `Зарплата`,
          text: `Оформим трудовой договор на${'\u00A0'}6${'\u00A0'}месяцев и${'\u00A0'}гарантируем оплату труда. По${'\u00A0'}результатам стажировки возможно оформление в${'\u00A0'}штат!`,
        },
      ],
    },
    steps: {
      title: `Отбор кандидатов`,
      list: [
        {
          id: 1,
          title: `Знакомство с${'\u00A0'}рекрутером и${'\u00A0'}программой стажировок`,
          description: `Уточним направление стажировки, ответим на${'\u00A0'}вопросы и${'\u00A0'}договоримся о${'\u00A0'}дате собеседования. `,
        },
        {
          id: 2,
          title: `Тестовое задание`,
          description: `Оценим уровень подготовки.`,
        },
        {
          id: 3,
          title: `Интервью с${'\u00A0'}рекрутером и${'\u00A0'}техническим специалистом`,
          description: `Познакомимся, зададим вопросы об${'\u00A0'}опыте работы и${'\u00A0'}технических знаниях, расскажем о${'\u00A0'}проекте.`,
          duration: `1-1,5${'\u00A0'}часа`,
        },
        {
          id: 4,
          title: `Интервью с${'\u00A0'}тимлидом`,
          description: `Познакомим с${'\u00A0'}будущим руководителем, подробнее расскажем о${'\u00A0'}проекте, поговорим о${'\u00A0'}предстоящих задачах и${'\u00A0'}ожиданиях, зададим уточняющие вопросы.`,
          duration: `30${'\u00A0'}мин.-1${'\u00A0'}час`,
        },
      ],
    },
    vacancies: {
      title: `Вакансии`,
      button: `Смотреть все`,
      href: `/vacancies`,
    },
    apply: {
      title: `Нет подходящей вакансии?`,
      text: `Тогда оправляй резюме на${'\u00A0'}jobs@dins.ru или${'\u00A0'}оставь заявку`,
      button: `Оставить заявку`,
    },
  },
};
