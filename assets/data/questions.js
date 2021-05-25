const affect = {
    TEAM: 'team',
    DIRECTORS: 'directors',
    MONEY: 'money'
}

const danger = {
    NORMAL: 'normal',
    HARD: 'hard'
}

export const questions = [
    {
        tr: "Bir stajyeriniz projeyi istediğiniz gibi geliştirmemiş",
        en: "An intern didn't develop project as you want",
        fr: "Une stagiaire n'a pas développé de projet comme vous le souhaitez",
        image: "../../assets/faces/me.svg",
        danger: danger.NORMAL,
        affect: affect.TEAM,
        options: [
            {
                tr: "Hmmm, senin geliştirdiğin yol hoşuma gitti bunu kullabiliriz",
                en: "Hmmm, Okey well, I liked your solution",
                fr: "Hmmm, Dak C'est bon, j'aime ton solution",
                callback: {
                    result: 'increase',
                    tr: 'Yenilikçi bir insana benziyorsunuz işte istediğimiz ceo',
                    en: "You are look like an innovator person. That's our ceo",
                    fr: "Vous avez l'air d'une personne innovatrice. C'est notre ceo"
                }
            },
            {
                tr: "Böyle bir şeyi kabul etmiyorum. Yeniden yap",
                en: "I don't accept something like this build project again",
                fr: "Je n'acceppte pas. Tu devoir faire le project encore",
                callback: {
                    result: 'increase',
                    tr: 'Yönetim kurulu olarak kararınız arkasındayız. Burada kafaya göre hareket etmek yok',
                    en: "We are supporting you as a board of directors. You can't do everything in this place",
                    fr: "Nous vous soutenons en tant que conseil d'administration. Tu ne peux pas tout faire dans cet endroit"
                }
            },
        ]
    },
    {
        tr: "Bazı serverlerin bakımını gerçekleştirmemiz gerek",
        en: "We need maintain some servers",
        fr: "Nous avons besoin de maintenir certains serveurs",
        image: "../../assets/faces/me.svg",
        danger: danger.NORMAL,
        affect: affect.MONEY,
        options: [
            {
                tr: "Gerekenler hemen yapılsın",
                en: "Do now provide all needs",
                fr: "Fournissez maintenant tous les besoins",
                callback: {
                    expense: -5000,
                    tr: 'Bakım giderleri 5000 dolar',
                    en: 'Expense of maintance: 5000 dolar',
                    fr: "Frais d'entretien: 5000 dollars"
                }
            },
            {
                tr: "Şu an gerek yok",
                en: "I don't accept something like this build project again",
                fr: "Je n'acceppte pas. Tu devoir faire le project encore",
                callback: {
                    expense: 50000,
                    tr: 'Serverlar çöktü 50000 dolar zarar',
                    en: 'Servers are down: We losed 50000 dollar',
                    fr: 'Les serveurs sont en panne: nous avons perdu 50000 dollars'
                }
            },
        ]
    },
    {
        tr: "Yeni stajyerler alacağız",
        en: "We will hire new interns",
        fr: "Nous embaucherons de nouveaux stagiaires",
        image: "../../assets/faces/me.svg",
        danger: danger.HARD,
        affect: affect.DIRECTORS,
        options: [
            {
                tr: "CV'lere göre değerlendirme yapın",
                en: "Evaulate according to CV's",
                fr: "Évaluer selon les CV",
                callback: {
                    result: 'increase',
                    tr: 'Ekibimize yeni stajyerler katıldı',
                    en: 'New interns joined the our team',
                    fr: 'De nouveaux stagiaires ont rejoint notre équipe'
                }
            },
            {
                tr: "Dayının oğlu staj yeri arıyordu dur",
                en: "Wait my uncle's son was looking for an intership",
                fr: "Attends, le fils de mon oncle cherchait un stage",
                callback: {
                    result: 'fired',
                    tr: 'Böyle bir şeye <b>SeaApi</b> içerisinde izin vermeyiz!. Burada liyakat esastır kovuldun!',
                    en: "We can't let something like that in SeaApi. Merit is most important thing in here. YOU FIRED",
                    fr: 'Nous ne pouvons pas laisser quelque chose comme ça à SeaApi. Le mérite est la chose la plus importante ici. VOUS AVEZ TIRÉ'
                }
            },
        ]
    },
    {
        tr: "Umut vaadeden bir projeye yatırım yapmak istiyoruz",
        en: "We will invest a project which is promising for feature",
        fr: "Nous devons investir un projet prometteur pour la fonctionnalité",
        image: "../../assets/faces/me.svg",
        danger: danger.NORMAL,
        affect: affect.MONEY,
        options: [
            {
                tr: "Yatırımı Yapın",
                en: "Invest now",
                fr: "Investir de projet maintenant",
                callback: {
                    expense: -100000,
                    tr: 'Yatırım yaptığımız projemizden 10000 dolar kazandık',
                    en: 'We earned 10000 dollar from the invest',
                    fr: "Nous avons gagné 10000 dollars grâce à l'investissement"
                }
            },
            {
                tr: "Bence yatırım yapmalayım",
                en: "I don't accept something like this build project again",
                fr: "Je n'acceppte pas. Tu devoir faire le project encore",
                callback: {
                    expense: 100000,
                    tr: 'Bu projeye eğer yatırım yapsaydık büyük bir gelir elde edebilirdik',
                    en: 'We could have a massive income from this project',
                    fr: 'Nous pourrions avoir un revenu massif de ce projet'
                }
            },
        ]
    },
    {
        tr: "Çalışanlarımızın Covid'e yakalanması durumunda hastane masraflarını karşılayalım",
        en: "Let's cover the hospital expenses in case our employees catch Covid",
        fr: "Couvrons les frais d'hospitalisation au cas où nos employés attraperaient Covid",
        image: "../../assets/faces/me.svg",
        danger: danger.NORMAL,
        affect: affect.TEAM,
        options: [
            {
                tr: "Çok iyi",
                en: "Okey well",
                fr: "C'est bonne idée",
                callback: {
                    result: 'increase',
                    expense: 5000,
                    tr: 'Ekibiniz bu karar için çok mutlu. Sizi seviyorlar',
                    en: 'Your team is so happy for this decide. They love you',
                    fr: "Notre equip est trés content c'est device. Ils t'aiment"
                }
            },
            {
                tr: "Şu anda masrafları arttıramayız",
                en: "We can't increase the expenses right now",
                fr: "Nous ne pouvons pas augmenter les dépenses pour le moment",
                callback: {
                    result: 'decrease',
                    tr: 'Olumlu bir kararda ekibiniz kendini daha rahat hissedebilirdi',
                    en: 'Your team would be comfortable if you gave positive decision',
                    fr: "Votre équipe serait à l'aise si vous donniez une décision positive"
                }
            },
        ]
    },
]