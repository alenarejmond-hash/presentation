import React, { useState, useEffect } from 'react';
import { 
  Coffee, 
  ChevronRight,
  Bell,
  X,
  Sparkles
} from 'lucide-react';

const TRANSLATIONS = {
  hy: {
    benefits: [
      "Նորարարական QR լուծումներ, որոնք ընդգծում են ձեր հաստատության կարգավիճակը",
      "Միջին կտրոնի աճ մինչև 20% լրացուցիչ վաճառքի հաշվին",
      "Մատուցողի ակնթարթային կանչ և ժամանակի խնայողություն",
      "Պրեմիում սպասարկում սեղանի մոտ՝ QR-կոդի սկանավորմամբ"
    ],
    botName: "System Bot",
    justNow: "Հենց նոր",
    newCall: "Նոր կանչ · Սեղան #4",
    guestsAsk: "Հյուրերը խնդրում են մոտենալ (հաշիվ)",
    premiumSolutions: "Premium Solutions",
    artOf: "Հյուրընկալության",
    hospitality: "արվեստ",
    readBenefits: "ՕԳՈՒՏՆԵՐ ԲԻԶՆԵՍԻ ՀԱՄԱՐ",
    format1Label: "ԱՄԲՈՂՋԱԿԱՆ ՑԻԿԼ",
    format1Title: "Ֆլագման: Պրեմիում QR-մենյու զամբյուղով",
    format1Desc: "Արագ պատվեր սեղանին առանց մատուցողին սպասելու",
    format2Label: "ԱՎԱՆԴԱԿԱՆ ՍՊԱՍԱՐԿՈՒՄ",
    format2Title: "Կլասիկա: QR-ցուցափեղկ՝ անձնակազմի կանչով",
    format2Desc: "Ճաշատեսակների նկարներ, բաղադրություն, հաշվի և կանչի կոճակներ",
    demoLabel: "ԻՐԱԿԱՆ ԺԱՄԱՆԱԿՈՒՄ",
    demoTitle: "Աշխատանքային չաթ (Telegram)",
    demoDesc: "Տեսեք, թե ինչ արագությամբ է անձնակազմը ստանում ծանուցումները",
    contactDev: "Քննարկել նախագիծը ձեր հաստատության համար ↗",
    devSignature: "Full Digital Architect & Developer by Elena Sotnikova",
    
    sheetTitle1: "💎 ՊՐԵՄԻՈՒՄ QR ՄԵՆՅՈՒ․",
    sheetTitle2: "ՍՊԱՍԱՐԿՄԱՆ ԷՎՈԼՅՈՒՑԻԱ",
    sheetIntro: "Սա պարզապես ճաշատեսակների էլեկտրոնային կատալոգ չէ: Սա ձեր նոր թվային աշխատակիցն է, որն իրեն արդարացնում է հենց առաջին ամսում, ընդգծում է հաստատության կարգավիճակը և լուծում սրահի հիմնական խնդիրները։",
    whatYouGet: "ԻՆՉ ԿՍՏԱՆԱ ՁԵՐ ԲԻԶՆԵՍԸ․",
    item1Title: "Միջին կտրոնի աճ 15-20%-ով",
    item1Desc: "Խելացի լրացուցիչ վաճառքի համակարգն աշխատում է առանց հանգստյան օրերի։ Երբ հյուրն ընտրում է սթեյք, մենյուն աննկատ կառաջարկի համապատասխան գինի կամ խավարտ:",
    item2Title: "Տեխնոլոգիաների և կենդանի սպասարկման իդեալական հավասարակշռություն",
    item2Desc: "Հյուրերն այլևս չեն սպասում մենյուին: Նրանք հարմարավետ տեմպով հավաքում են պատվերը հեռախոսում, իսկ մատուցողը պարզապես մոտենում է սեղանին՝ հեշտ հաստատման համար: Ոչ մի խառնաշփոթ, միայն ուշադրություն հյուրի նկատմամբ:",
    item3Title: "Հեշտ կառավարում առանց ՏՏ մասնագետների",
    item3Desc: "Սաղմոնը վերջացե՞լ է կամ գինը փոխվե՞լ է: Ձեր ցանկացած ադմինիստրատոր ինտուիտիվ վահանակում մի քանի հպումով ակնթարթորեն կթարմացնի մենյուն բոլոր սեղաններին: Մոռացեք հյուրերից ներողություն խնդրելու բացակայող դիրքերի համար և թղթի վերատպման ծախսերի մասին:",
    item4Title: "Ակնթարթային կապ սրահի հետ",
    item4Desc: "«Կանչել մատուցողին» և «Խնդրել հաշիվը» կոճակներն ուղարկում են անձայն Push ծանուցում անմիջապես Telegram-ի աշխատանքային չաթ: Պիկ ժամերին ոչ մի բարձրացրած ձեռք և դժգոհ հայացք:",
    item5Title: "Պրեմիում էսթետիկա սեղաններին",
    item5Desc: "Մոռացեք էժանագին կպչուն պիտակների մասին: Մենք ստեղծում ենք ոճային QR-դիսփլեյներ, որոնք կընդգծեն ձեր ինտերիերը: Հյուրն ուղղակի պահում է տեսախցիկը, և մոգությունը սկսվում է առանց հավելվածների:",
    formatsTitle: "Հասանելի է երկու ձևաչափով․",
    flagship: "ՖԼԱԳՄԱՆ․",
    flagshipDesc: "Ամբողջական ցիկլ զամբյուղով (հյուրը հավաքում է պատվերը, մատուցողը հաստատում է)։",
    lite: "ԿԼԱՍԻԿԱ․",
    liteDesc: "Ինտերակտիվ ցուցափեղկ (պահպանում է դասական շփումը, առանց պատվերների զամբյուղի):",

    testDriveTitle: "ԹԵՍՏ-ԴՐԱՅՎ ԻՐԱԿԱՆ ԺԱՄԱՆԱԿՈՒՄ",
    testDriveDesc: "Փորձեք, թե ինչպես են ձեր հյուրերն ու անձնակազմը շփվելու ծառայության հետ պիկ ժամերին: Դա կխլի ուղիղ 1 րոպե:",
    step1Title: "ՔԱՅԼ 1. Միացեք անձնակազմի դեմո չաթին",
    step1Desc: "Միացեք Telegram-ի թեստային խմբին՝ հենց այստեղ են իրական հաստատություններում ակնթարթորեն գալիս ծանուցումներ:",
    step1Btn: "Միանալ սրահի Telegram չաթին ↗",
    step2Title: "ՔԱՅԼ 2. Պատկերացրեք, հյուրը սկանավորել է QR-ը. Բացեք մենյուն՝",
    step2Desc: "Ընտրեք թեստի ձևաչափը պրեզենտացիայի գլխավոր էկրանին:",
    step2Bul1: "Ֆլագման․ զամբյուղի մեջ ավելացրեք սթեյք և սեղմեք «Ձևակերպել պատվերը»:",
    step2Bul2: "Կլասիկա․ սեղմեք «Կանչել մատուցողին» կամ «Խնդրել հաշիվը»:",
    step3Title: "ՔԱՅԼ 3. Ստուգեք արձագանքման արագությունը",
    step3Desc: "Վերադարձեք Telegram չաթ․",
    step3Bul1: "Ձայնային ծանուցումը և պատվերի քարտը արդեն այնտեղ են:",
    step3Bul2: "Առանց ուշացումների, առանց իրարանցման սրահում:",
    testDriveFooter: "💡 Պատրա՞ստ եք ներդնել նման համակարգ ձեր ռեստորանում:",
    testDriveFooterSub: "Սեղմեք կապի կոճակը ներքևում — կհարմարեցնենք մենյուն ձեր ֆիրմային ոճին սկսած 3 օրից:"
  },
  ru: {
    benefits: [
      "Инновационные QR-решения, подчеркивающие статус вашего заведения",
      "Рост среднего чека до 20% за счет апсейла",
      "Мгновенный вызов официанта и экономия времени",
      "Премиальный сервис по скану QR-кода прямо за столиком"
    ],
    botName: "System Bot",
    justNow: "Только что",
    newCall: "Новый вызов · Стол #4",
    guestsAsk: "Гости просят подойти (счет)",
    premiumSolutions: "Premium Solutions",
    artOf: "Искусство",
    hospitality: "гостеприимства",
    readBenefits: "ВЫГОДА ДЛЯ БИЗНЕСА",
    format1Label: "ПОЛНЫЙ ЦИКЛ",
    format1Title: "Флагман: Премиальное QR-меню с корзиной",
    format1Desc: "Быстрый заказ к столу без ожидания официанта",
    format2Label: "ТРАДИЦИОННЫЙ СЕРВИС",
    format2Title: "Классика: QR-витрина с вызовом персонала",
    format2Desc: "Фото блюд, составы, кнопка счета и вызова персонала",
    demoLabel: "В РЕАЛЬНОМ ВРЕМЕНИ",
    demoTitle: "Рабочий чат зала (Telegram)",
    demoDesc: "Посмотрите, с какой скоростью персонал получает уведомления",
    contactDev: "Обсудить проект для вашего заведения ↗",
    devSignature: "Full Digital Architect & Developer by Elena Sotnikova",
    
    sheetTitle1: "💎 ПРЕМИАЛЬНОЕ QR-МЕНЮ:",
    sheetTitle2: "ЭВОЛЮЦИЯ СЕРВИСА",
    sheetIntro: "Это не просто электронный каталог блюд. Это ваш новый цифровой сотрудник, который окупает себя в первый же месяц, подчеркивает статус заведения и решает главные боли зала.",
    whatYouGet: "ЧТО ПОЛУЧИТ ВАШ БИЗНЕС:",
    item1Title: "Рост среднего чека на 15-20%",
    item1Desc: "Умная система допродаж работает без выходных. Когда гость выбирает стейк, меню ненавязчиво предложит бокал подходящего вина или гарнир.",
    item2Title: "Идеальный баланс технологий и живого сервиса",
    item2Desc: "Гости больше не ждут меню. Они в комфортном темпе собирают заказ в телефоне, а официант просто подходит к столику для легкого подтверждения. Никакой путаницы, только внимание к гостю.",
    item3Title: "Легкое управление без IT-специалистов",
    item3Desc: "Закончился лосось или изменилась цена? Любой ваш администратор за пару кликов в интуитивной панели мгновенно обновит меню на всех столах. Забудьте про извинения перед гостями за отсутствующие позиции и затраты на перепечатку бумаги.",
    item4Title: "Мгновенная связь с залом",
    item4Desc: "Кнопки «Позвать официанта» и «Попросить счет» отправляют тихое Push-уведомление прямо в рабочий чат Telegram. Никаких поднятых рук и недовольных взглядов в часы пик.",
    item5Title: "Премиальная эстетика на столах",
    item5Desc: "Забудьте про дешевые наклейки. Мы создаем стильные QR-дисплеи, идеально вписывающиеся в интерьер. Гость наводит камеру — и магия начинается без скачиваний.",
    formatsTitle: "Доступно в двух форматах:",
    flagship: "ФЛАГМАН:",
    flagshipDesc: "Полный цикл с корзиной (гость собирает заказ, официант подтверждает).",
    lite: "КЛАССИКА:",
    liteDesc: "Интерактивная витрина (сохраняет классический контакт, без корзины заказов).",

    testDriveTitle: "ТЕСТ-ДРАЙВ СИСТЕМЫ В РЕАЛЬНОМ ВРЕМЕНИ",
    testDriveDesc: "Попробуйте, как ваши гости и персонал будут взаимодействовать с сервисом в часы пик. Это займет ровно 1 минуту.",
    step1Title: "ШАГ 1. Подключитесь к демо-чату персонала",
    step1Desc: "Вступите в тестовую Telegram-группу — именно сюда в реальных заведениях мгновенно прилетают уведомления для официантов и администраторов зала.",
    step1Btn: "Вступить в Telegram-чат зала ↗",
    step2Title: "ШАГ 2. Представьте, что гость отсканировал QR. Откройте меню:",
    step2Desc: "Выберите формат для теста на главном экране презентации:",
    step2Bul1: "Флагман: добавьте стейк или десерт в корзину и нажмите «Оформить заказ».",
    step2Bul2: "Классика: нажмите кнопки «Позвать официанта» или «Попросить счет».",
    step3Title: "ШАГ 3. Проверьте скорость реакции",
    step3Desc: "Вернитесь в Telegram-чат:",
    step3Bul1: "Звуковое оповещение и карточка заказа с номером стола уже там.",
    step3Bul2: "Без задержек, без пропущенных гостей, без суеты в зале.",
    testDriveFooter: "💡 Готовы внедрить такую систему в вашем ресторане?",
    testDriveFooterSub: "Нажмите кнопку связи ниже — настроим меню под ваш фирменный стиль от 3 дней."
  },
  en: {
    benefits: [
      "Innovative QR solutions that highlight your establishment's status",
      "Increase average check by up to 20% through upselling",
      "Instant waiter call and time saving",
      "Premium service by scanning a QR code right at the table"
    ],
    botName: "System Bot",
    justNow: "Just now",
    newCall: "New call · Table #4",
    guestsAsk: "Guests are asking to come over (bill)",
    premiumSolutions: "Premium Solutions",
    artOf: "The art of",
    hospitality: "hospitality",
    readBenefits: "BUSINESS BENEFITS",
    format1Label: "FULL CYCLE",
    format1Title: "Flagship: Premium QR menu with cart",
    format1Desc: "Fast table ordering without waiting for a waiter",
    format2Label: "TRADITIONAL SERVICE",
    format2Title: "Classic: QR showcase with staff call",
    format2Desc: "Dish photos, ingredients, bill and staff call buttons",
    demoLabel: "REAL-TIME",
    demoTitle: "Staff working chat (Telegram)",
    demoDesc: "See how fast the staff receives notifications",
    contactDev: "Discuss a project for your establishment ↗",
    devSignature: "Full Digital Architect & Developer by Elena Sotnikova",
    
    sheetTitle1: "💎 PREMIUM QR MENU:",
    sheetTitle2: "SERVICE EVOLUTION",
    sheetIntro: "This is not just an electronic catalog of dishes. This is your new digital employee, which pays for itself in the very first month, highlights the establishment's status, and solves the main pain points of the dining room.",
    whatYouGet: "WHAT YOUR BUSINESS WILL GET:",
    item1Title: "15-20% increase in average check",
    item1Desc: "The smart upselling system works without days off. When a guest chooses a steak, the menu will unobtrusively offer a glass of suitable wine or a side dish.",
    item2Title: "Perfect balance of technology and live service",
    item2Desc: "Guests no longer wait for the menu. They assemble their order on their phone at a comfortable pace, and the waiter simply comes to the table for easy confirmation. No confusion, only attention to the guest.",
    item3Title: "Easy management without IT specialists",
    item3Desc: "Salmon ran out or the price changed? Any of your administrators can instantly update the menu on all tables with a couple of clicks in the intuitive panel. Forget about apologizing to guests for missing items and the cost of reprinting paper.",
    item4Title: "Instant communication with the room",
    item4Desc: "The «Call waiter» and «Ask for bill» buttons send a quiet Push notification right to the Telegram work chat. No raised hands and dissatisfied looks during peak hours.",
    item5Title: "Premium aesthetics on the tables",
    item5Desc: "Forget cheap stickers. We create stylish QR displays that perfectly match your interior. The guest simply points the camera — and the magic begins without downloads.",
    formatsTitle: "Available in two formats:",
    flagship: "FLAGSHIP:",
    flagshipDesc: "Full cycle with a cart (guest collects order, waiter confirms).",
    lite: "CLASSIC:",
    liteDesc: "Interactive showcase (preserves classic contact, without order cart).",

    testDriveTitle: "REAL-TIME SYSTEM TEST DRIVE",
    testDriveDesc: "Experience how your guests and staff will interact with the service during peak hours. It takes exactly 1 minute.",
    step1Title: "STEP 1. Join the staff demo chat",
    step1Desc: "Join the test Telegram group — this is exactly where notifications for waiters and floor managers arrive instantly in real establishments.",
    step1Btn: "Join the venue's Telegram chat ↗",
    step2Title: "STEP 2. Imagine a guest scanned the QR. Open the menu:",
    step2Desc: "Choose a test format on the main presentation screen:",
    step2Bul1: "Flagship: add a steak or dessert to the cart and click «Place Order».",
    step2Bul2: "Classic: click the «Call Waiter» or «Ask for Bill» buttons.",
    step3Title: "STEP 3. Check reaction speed",
    step3Desc: "Return to the Telegram chat:",
    step3Bul1: "The sound notification and order card with the table number are already there.",
    step3Bul2: "No delays, no missed guests, no chaos on the floor.",
    testDriveFooter: "💡 Ready to implement this system in your restaurant?",
    testDriveFooterSub: "Click the contact button below — we will customize the menu to your brand style starting from 3 days."
  }
};

export default function PresentationApp() {
  const [lang, setLang] = useState('hy');
  const [isLoaded, setIsLoaded] = useState(false);
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);
  
  const [isBenefitsOpen, setIsBenefitsOpen] = useState(false);
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTextVisible(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % 4);
        setIsTextVisible(true);
      }, 500);
    }, 3500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`h-[100dvh] w-full bg-[#050505] text-zinc-300 font-sans antialiased overflow-hidden selection:bg-zinc-800 selection:text-white transition-opacity duration-1000 flex flex-col relative ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      
      {}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap');
        
        * { touch-action: manipulation !important; box-sizing: border-box; }
        body { margin: 0; background: #050505; overflow: hidden; }
        .font-sans { font-family: 'Montserrat', sans-serif !important; }
        
        @keyframes glowPulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sweepDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        
        .animate-glow { animation: glowPulse 10s ease-in-out infinite; }
        
        .animate-glare::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0) 100%);
          animation: sweepDown 3s infinite linear;
          pointer-events: none;
          z-index: 0;
        }

        .premium-text-gradient {
          background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {}
      <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-50 flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 bg-[#1C1C1E] backdrop-blur-md border border-white/10 rounded-full shadow-lg h-[28px]">
        <Sparkles className="w-3 h-3 text-zinc-400" strokeWidth={1.5} />
        <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-300">
          {t.premiumSolutions}
        </span>
      </div>

      <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-50 flex items-center bg-[#1C1C1E] backdrop-blur-md border border-white/10 rounded-full p-0.5 shadow-lg h-[28px]">
        {['hy', 'ru', 'en'].map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`w-7 h-full rounded-full flex items-center justify-center text-[9px] font-medium uppercase transition-all duration-300 ${lang === l ? 'bg-white text-black shadow-sm' : 'text-zinc-400 hover:text-white hover:bg-white/10'}`}
          >
            {l}
          </button>
        ))}
      </div>

      {}
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-white/5 blur-[120px] animate-glow pointer-events-none z-0"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-zinc-600/5 blur-[120px] animate-glow pointer-events-none z-0" style={{ animationDelay: '5s' }}></div>

      {}
      <div className="relative z-10 w-full max-w-md mx-auto h-full flex flex-col px-4 sm:px-5 pt-[56px] sm:pt-[64px] pb-3 sm:pb-5 justify-between">
        
        {/* Header Block */}
        <div className="w-full flex flex-col items-center text-center opacity-0 flex-none" style={{ animation: 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
          
          <h1 className="text-2xl sm:text-3xl font-light text-white leading-tight tracking-tight mb-2">
            {t.artOf} <br />
            <span className="premium-text-gradient font-medium italic">{t.hospitality}</span>
          </h1>
          
          <div className="min-h-[60px] sm:min-h-[64px] flex items-start justify-center w-full mb-1 mt-1">
            <p className={`text-[12px] sm:text-[13px] text-zinc-400 font-light leading-relaxed max-w-[300px] transition-opacity duration-500 px-4 ${isTextVisible ? 'opacity-100' : 'opacity-0'}`}>
              {t.benefits[currentTextIndex]}
            </p>
          </div>

          <button 
            onClick={() => setIsBenefitsOpen(true)}
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#161618] border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:bg-[#1C1C1E] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <span className="text-[9px] text-zinc-300 font-medium uppercase tracking-[0.2em] group-hover:text-white transition-colors">
              {t.readBenefits}
            </span>
          </button>
        </div>

        {}
        <div className="w-full flex-1 flex flex-col justify-center gap-2 sm:gap-3 py-1.5 sm:py-3 opacity-0" style={{ animation: 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s' }}>
          
          {/* Button 1: Flagship */}
          <a href="https://restaurant.appseapro.com/" target="_blank" rel="noopener noreferrer" className="animate-glare group relative block w-full rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 bg-[#161618] border border-white/10 hover:bg-[#1C1C1E] transition-all duration-300 overflow-hidden active:scale-[0.98] shadow-lg">
            <div className="relative z-10 flex items-center justify-between gap-3">
              <div className="flex flex-col text-left flex-1 min-w-0">
                <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400 mb-1 sm:mb-1.5 truncate">{t.format1Label}</span>
                <span className="text-[16px] sm:text-[18px] font-medium text-white mb-0.5 sm:mb-1 leading-tight">{t.format1Title}</span>
                <span className="text-[11px] sm:text-[12px] text-zinc-400 font-light leading-snug">{t.format1Desc}</span>
              </div>
              <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
                <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
              </div>
            </div>
          </a>

          {/* Button 2: Classic */}
          <a href="https://restaurant-light.appseapro.com/" target="_blank" rel="noopener noreferrer" className="group relative block w-full rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 bg-[#161618] border border-white/10 hover:bg-[#1C1C1E] transition-all duration-300 active:scale-[0.98] shadow-md">
            <div className="relative flex items-center justify-between gap-3">
              <div className="flex flex-col text-left flex-1 min-w-0">
                <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400 mb-1 sm:mb-1.5 truncate">{t.format2Label}</span>
                <span className="text-[16px] sm:text-[18px] font-medium text-white mb-0.5 sm:mb-1 leading-tight">{t.format2Title}</span>
                <span className="text-[11px] sm:text-[12px] text-zinc-400 font-light leading-snug">{t.format2Desc}</span>
              </div>
              <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-zinc-400 transition-colors">
                <Coffee className="w-4 h-4 text-zinc-400" strokeWidth={1.5} />
              </div>
            </div>
          </a>

          {/* Button 3: Telegram Demo */}
          <div onClick={() => setIsTestDriveOpen(true)} className="group relative block w-full rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 bg-[#161618] border border-white/10 hover:bg-[#1C1C1E] transition-all duration-300 active:scale-[0.98] cursor-pointer shadow-md">
            <div className="relative flex items-center justify-between gap-3">
              <div className="flex flex-col text-left flex-1 min-w-0">
                <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-400/80 mb-1 sm:mb-1.5 truncate">LIVE DEMO</span>
                <span className="text-[16px] sm:text-[18px] font-medium text-white mb-0.5 sm:mb-1 leading-tight">{t.demoTitle}</span>
                <span className="text-[11px] sm:text-[12px] text-zinc-400 font-light leading-snug">{t.demoDesc}</span>
              </div>
              <div className="w-9 h-9 rounded-full border border-blue-500/30 bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Bell className="w-4 h-4 text-blue-400" strokeWidth={1.5} />
              </div>
            </div>
          </div>

        </div>

        {}
        <div className="w-full flex flex-col items-center text-center opacity-0 flex-none" style={{ animation: 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.4s' }}>
          
          <a 
            href="https://t.me/elenlime" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 sm:py-4 rounded-[14px] sm:rounded-[16px] bg-zinc-800/90 border border-zinc-500/80 text-white hover:bg-zinc-700 font-medium text-[13px] sm:text-[14px] transition-all mb-2 sm:mb-3 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            {t.contactDev}
          </a>
          
          <a 
            href="https://appseapro.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[6px] sm:text-[7px] font-light text-zinc-600 hover:text-zinc-400 transition-colors tracking-[0.1em] uppercase whitespace-nowrap"
          >
            {t.devSignature}
          </a>
        </div>
      </div>

      {}
      <div className={`fixed inset-0 z-[100] flex items-end justify-center transition-all duration-500 ${isBenefitsOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isBenefitsOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsBenefitsOpen(false)}
        />
        
        <div 
          className={`relative w-full max-w-md bg-[#0C0C0C] border-t border-white/10 rounded-t-[32px] overflow-hidden flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-2xl ${isBenefitsOpen ? 'translate-y-0' : 'translate-y-full'}`}
          style={{ maxHeight: '85dvh' }}
        >
          <div className="w-full flex justify-center pt-4 pb-2 cursor-pointer" onClick={() => setIsBenefitsOpen(false)}>
            <div className="w-12 h-1 bg-white/20 rounded-full" />
          </div>

          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={() => setIsBenefitsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-12 hide-scrollbar">
            <h3 className="text-white font-medium text-[17px] leading-tight mb-3 pr-8 pt-2">
              {t.sheetTitle1}<br/>{t.sheetTitle2}
            </h3>
            
            <p className="text-zinc-400 text-[14px] font-light leading-relaxed mb-8">
              {t.sheetIntro}
            </p>

            <h4 className="text-zinc-500 font-medium text-[10px] uppercase tracking-[0.2em] mb-4">
              {t.whatYouGet}
            </h4>
            
            <div className="space-y-6 mb-8">
              <div>
                <h5 className="text-zinc-200 text-[14px] font-medium mb-1.5 flex items-center gap-2">
                  <span>📈</span> {t.item1Title}
                </h5>
                <p className="text-zinc-500 text-[13px] font-light leading-relaxed pl-6">
                  {t.item1Desc}
                </p>
              </div>

              <div>
                <h5 className="text-zinc-200 text-[14px] font-medium mb-1.5 flex items-center gap-2">
                  <span>🤝</span> {t.item2Title}
                </h5>
                <p className="text-zinc-500 text-[13px] font-light leading-relaxed pl-6">
                  {t.item2Desc}
                </p>
              </div>

              <div>
                <h5 className="text-zinc-200 text-[14px] font-medium mb-1.5 flex items-center gap-2">
                  <span>⚙️</span> {t.item3Title}
                </h5>
                <p className="text-zinc-500 text-[13px] font-light leading-relaxed pl-6">
                  {t.item3Desc}
                </p>
              </div>

              <div>
                <h5 className="text-zinc-200 text-[14px] font-medium mb-1.5 flex items-center gap-2">
                  <span>🛎</span> {t.item4Title}
                </h5>
                <p className="text-zinc-500 text-[13px] font-light leading-relaxed pl-6">
                  {t.item4Desc}
                </p>
              </div>

              <div>
                <h5 className="text-zinc-200 text-[14px] font-medium mb-1.5 flex items-center gap-2">
                  <span>✨</span> {t.item5Title}
                </h5>
                <p className="text-zinc-500 text-[13px] font-light leading-relaxed pl-6">
                  {t.item5Desc}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
              <h4 className="text-zinc-300 font-medium text-[11px] uppercase tracking-wider mb-3">
                {t.formatsTitle}
              </h4>
              <ul className="space-y-2">
                <li className="text-[13px] text-zinc-400 font-light leading-relaxed">
                  <strong className="text-white font-medium">{t.flagship}</strong> {t.flagshipDesc}
                </li>
                <li className="text-[13px] text-zinc-400 font-light leading-relaxed">
                  <strong className="text-white font-medium">{t.lite}</strong> {t.liteDesc}
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {}
      <div className={`fixed inset-0 z-[100] flex items-end justify-center transition-all duration-500 ${isTestDriveOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isTestDriveOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsTestDriveOpen(false)}
        />
        
        <div 
          className={`relative w-full max-w-md bg-[#0C0C0C] border-t border-white/10 rounded-t-[32px] overflow-hidden flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-2xl ${isTestDriveOpen ? 'translate-y-0' : 'translate-y-full'}`}
          style={{ maxHeight: '85dvh' }}
        >
          <div className="w-full flex justify-center pt-4 pb-2 cursor-pointer" onClick={() => setIsTestDriveOpen(false)}>
            <div className="w-12 h-1 bg-white/20 rounded-full" />
          </div>

          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={() => setIsTestDriveOpen(false)}
              className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-12 hide-scrollbar">
            <h3 className="text-white font-medium text-[17px] leading-tight mb-3 pr-8 pt-2">
              {t.testDriveTitle}
            </h3>
            
            <p className="text-zinc-400 text-[14px] font-light leading-relaxed mb-6">
              {t.testDriveDesc}
            </p>

            <div className="mb-6">
              <h5 className="text-zinc-200 text-[14px] font-medium mb-2">{t.step1Title}</h5>
              <p className="text-zinc-500 text-[13px] font-light leading-relaxed mb-3">
                {t.step1Desc}
              </p>
              <a 
                href="https://t.me/restaurant_appseapro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-3.5 rounded-[12px] bg-[#007AFF] text-white hover:bg-[#0066D6] font-medium text-[14px] transition-all shadow-md active:scale-[0.98]"
              >
                {t.step1Btn}
              </a>
            </div>

            <div className="mb-6">
              <h5 className="text-zinc-200 text-[14px] font-medium mb-2">{t.step2Title}</h5>
              <p className="text-zinc-500 text-[13px] font-light leading-relaxed mb-2">
                {t.step2Desc}
              </p>
              <ul className="space-y-2 pl-2">
                <li className="text-[13px] text-zinc-400 font-light leading-relaxed flex gap-2">
                  <span className="text-zinc-600 mt-0.5">•</span> 
                  <span>{t.step2Bul1}</span>
                </li>
                <li className="text-[13px] text-zinc-400 font-light leading-relaxed flex gap-2">
                  <span className="text-zinc-600 mt-0.5">•</span> 
                  <span>{t.step2Bul2}</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h5 className="text-zinc-200 text-[14px] font-medium mb-2">{t.step3Title}</h5>
              <p className="text-zinc-500 text-[13px] font-light leading-relaxed mb-2">
                {t.step3Desc}
              </p>
              <ul className="space-y-2 pl-2">
                <li className="text-[13px] text-zinc-400 font-light leading-relaxed flex gap-2">
                  <span className="text-zinc-600 mt-0.5">•</span> 
                  <span>{t.step3Bul1}</span>
                </li>
                <li className="text-[13px] text-zinc-400 font-light leading-relaxed flex gap-2">
                  <span className="text-zinc-600 mt-0.5">•</span> 
                  <span>{t.step3Bul2}</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02]">
              <p className="text-white font-medium text-[13px] mb-2">{t.testDriveFooter}</p>
              <p className="text-zinc-400 text-[12px] font-light leading-relaxed">{t.testDriveFooterSub}</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
