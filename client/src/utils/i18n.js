import i18n from "i18next";

import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            'nav.about': 'About Me',
            'nav.contact': 'Contact',
            'nav.projects': 'My Projects',
            'nav.employment': 'Employment',
            'nav.education': 'Education',
            'nav.trademark': 'The Trove Of Gems',
            'nav.footerMsg': 'A Project of Imagination',
            'nav.americanEnglish': 'American English',
            'nav.czech': 'Čeština',
            'nav.japanese': '日本語',
            'nav.spanish': 'Español',
            'authorIntroduction': 'Hi There, I\'m Dustin!',
            'welcomeMsg': 'And Welcome to the Compendium of my Interests, Work, & Accomplishments',
            'foxImg': 'Anthropomorphic Fox Mining Crystals To Power The Crystal',
            'aboutHeader': 'Who Am I?',
            'employment': {
                'main.label': 'Employment History',
                'sub.label.tech': 'Tech Industry',
                'sub.label.food': 'Food Industry'
            },
            'education': {
                'header': 'Alma Maters',
                'college': {
                    'attended': 'Attended From August 2007 To December 2009',
                    'degree': 'Associate Degree of Science Received',
                    'highlightList': {
                        'list.1': 'Made Dean\'s List Multiple Semesters',
                        'list.2': 'Made President\'s List Multiple Semesters',
                        'list.3': 'Instructed by one of the college\'s best Chemistry Instructors, Susan Northleaf'
                    }
                },
                'highschool': {
                    'attended': 'Attended From August 2003 To June 2007',
                    'degree': 'High School Diploma Received',
                    'highlightList': {
                        'list.1': 'Received the Golden State Seal Merit Diploma (GSSMD) Upon Graduation',
                        'list.2': '4 Years - Marching & Concert Band',
                        'list.3': 'Voted In As Band Treasurer For 1 Year By Peers',
                        'list.4': 'Voted In As Senior Classes\' Yearbook\'s Most Unique'
                    }
                },
                'highlightsLabel': 'Highlights',
            },
            'footer': {
                'buttonLabel': 'So, why "The Trove of Gems"?',
                'intro': 'Gems and Minerals are beautiful and unique',
                'p.1': 'Diamonds, Emeralds, Rubies, and Sapphires; Alexandrite, Agate, Amethyst, Aquamarine, Garnet, ' +
                    'Jade, Lapis-Lazuli, Moonstone, Opal, Black & White Pearl,Rose Quartz, Spinel, Sunstone, ' +
                    'Tanzanite, Tourmaline, Turquoise, Zircon, and so many more gems and minerals exist.',
                'p.2': 'My fascination with precious and semi-precious gems and minerals stems primarily from my love ' +
                    'of earth sciences as a child. I was the kid who could identify crystals, minerals, and rocks ' +
                    '(generally the more colorful ones) and avidly watched the science channel specials ' +
                    'on marine biology and volcanology.',
                'p.3': 'By my teens, my interests had expanded to the geological and biological branches of ' +
                    'Chemistry and that has never left me.',
                'p.4': 'I also never made it into any august labs as a chemist.',
                'p.5': 'Rather...',
                'p.6': 'My lapidaries consist of previous co-workers, past and current friends, and family.',
                'p.7': 'They\'ve shaped and polished me to reflect my best qualities. The work of a gem-cutter is ' +
                    'slow. It takes time and careful work to grind down some of the hardest material into the ' +
                    'prisms that best reflect quality and worth...And without their efforts, I wouldn\'t be where I am ' +
                    'today with the skills in my possession that allow me to push myself in the direction I want to ' +
                    'proceed.',
                'p.8': 'My journey isn\'t over yet, and I look forward continuing my growth.',
                'p.9': 'I would encourage you to pursue your passions and continue to grow in the ways that ' +
                    'make you happy.',
                'goodbye': {
                    'thanks': 'Thank You For The Visit',
                    'bestWishes': '& All the Best,',
                    'theCreator': 'Dustin K. Greco'
                }
            }
        }
    },
    cz: {
        translation: {
            'nav.about': 'O mně',
            'nav.contact': 'Kontakt',
            'nav.projects': 'Moje projekty',
            'nav.employment': 'Zaměstnání',
            'nav.education': 'Vzdělávání',
            'nav.trademark': 'Pokladnice drahokamů',
            'nav.footerMsg': 'Projekt imaginace',
            'nav.americanEnglish': 'Americká angličtina',
            'nav.czech': 'Čeština',
            'nav.japanese': 'Japonstinu',
            'nav.spanish': 'Španělstinu',
            'authorIntroduction': 'Nazdar přátelé, jsem Dustin!',
            'welcomeMsg': 'A vítejte v kompendiu mých zájmů, práce a úspěchů',
            'foxImg': 'Antropomorfní krystaly těžby lišek pro napájení krystalu',
            'aboutHeader': 'Kdo jsem?',
            'employment': {
                'main.label': 'Historie zaměstnání',
                'sub.label.tech': 'Technologický průmysl',
                'sub.label.food': 'Potravinářský průmysl'
            },
            'education': {
                'header': 'Alma Maters',
                'college': {
                    'attended': 'Zúčastnil se od srpna 2007 do prosince 2009',
                    'degree': 'Získal přidružený titul vědy',
                    'highlightList': {
                        'list.1': 'Na několik semestrů jsem byl na děkanském seznamu',
                        'list.2': 'Na prezidentský seznam jsem se dostal několik semestrů',
                        'list.3': 'Vedeno jednou z nejlepších instruktorek chemie na vysoké škole, Susan Northleafovou'
                    }
                },
                'highschool': {
                    'attended': 'Zúčastnil se od srpna 2003 do června 2007',
                    'degree': 'Získal středoškolského diplomu',
                    'highlightList': {
                        'list.1': 'Po ukončení studia obdržel diplom Golden State Seal Merit Diploma (GSSMD)',
                        'list.2': '4 roky - Pochodová & koncertní kapela',
                        'list.3': 'Zvoleno jako pokladník kapely na 1 rok vrstevníky',
                        'list.4': 'Zvoleno v Ročence jako nejunikátnější'
                    }
                },
                'highlightsLabel': 'Zvýrazňuje',
            },
            'footer': {
                'buttonLabel': 'Takže, proč "Pokladnice drahokamů"?',
                'intro': 'Drahokamy a minerály jsou krásné a jedinečné',
                'p.1': 'Diamanty, Smaragdy, Rubíny a Safíry; Alexandrit, Achát, Ametyst, Akvamarín, Granát, ' +
                    'Jadeit, Lapis-Lazuli, Měsíční kámen, Opál, Černá & Bílá perla, Růženín, Spinel, Sluneční kámen, ' +
                    'tanzanit, turmalín, tyrkys, zirkon, existuje a mnoho dalších drahokamů a minerálů.',
                'p.2': 'Moje fascinace drahokamy a polodrahokamy a minerály pramení především z mé dětské lásky k vědám o ' +
                    'Zemi. Byl jsem dítě, které dokázalo identifikovat krystaly, minerály a horniny (obecně ty barevnější) a dychtivě ' +
                    'sledovalo speciály Science Channel o mořské biologii a vulkanologii.',
                'p.3': 'V dospívání se mé zájmy rozšířily na geologické a biologické obory chemie a to mě nikdy neopustilo. ',
                'p.4': 'Také jsem se nikdy nedostal do žádných vznešených laboratoří jako chemik.',
                'p.5': 'Spíše...',
                'p.6': 'Moje lapidária se skládají z bývalých spolupracovníků, minulých i současných přátel a rodiny.',
                'p.7': 'Tvarovali mě a vylepšovali tak, abych odrážela mé nejlepší vlastnosti. Práce brusiče drahokamů ' +
                    'je pomalá. Vyžaduje to čas a pečlivou práci vybrousit některé z nejtvrdších materiálů do hranolů, ' +
                    'které nejlépe odrážejí kvalitu a hodnotu... A bez jejich úsilí bych nebyl tam, kde jsem dnes, ' +
                    's dovednostmi, které mám k dispozici a které mi umožňují posouvat se směrem, kterým chci pokračovat. ',
                'p.8': 'Moje cesta ještě neskončila a těším se na další růst.',
                'p.9': 'Chtěl bych vás povzbudit, abyste se věnovali svým vášním a pokračovali v růstu způsoby, které ' +
                    'vás dělají šťastnými.',
                'goodbye': {
                    'thanks': 'Děkujeme za návštěvu',
                    'bestWishes': '& Všechno nejlepší,',
                    'theCreator': 'Dustin K. Greco'


                }
            }
        }
    },
    sp: {
        translation: {
            'nav.about': 'Acerca de mí',
            'nav.contact': 'Contacto',
            'nav.projects': 'Mis Proyectos',
            'nav.employment': 'Empleo',
            'nav.education': 'Educación',
            'nav.trademark': 'El tesoro de las gemas',
            'nav.footerMsg': 'Proyecto de imaginación',
            'nav.americanEnglish': 'Inglés estadounidense',
            'nav.czech': 'Checo',
            'nav.japanese': 'Japonés',
            'nav.spanish': 'Español',
            'authorIntroduction': '¿Cómo andas? Soy Dustin!',
            'welcomeMsg': 'Y bienvenidos al compendio de mis intereses, trabajo y logros',
            'foxImg': 'Zorro antropomórfico que extrae cristales para alimentar el cristal',
            'aboutHeader': '¿Quién soy?',
            'employment': {
                'main.label': 'Historial de empleo',
                'sub.label.tech': 'Industria Tecnológica',
                'sub.label.food': 'Industria alimentaria'
            },
            'education': {
                'header': 'Alma Mater',
                'college': {
                    'attended': 'Asistió desde agosto de 2007 hasta diciembre de 2009',
                    'degree': 'Grado Asociado en Ciencias Recibido',
                    'highlightList': {
                        'list.1': 'Hecho en la lista del decano varios semestres',
                        'list.2': 'Hecho en la lista del presidente varios semestres',
                        'list.3': 'Instruido por una de las mejores instructoras de química de la universidad, Susan Northleaf'
                    }
                },
                'highschool': {
                    'attended': 'Asistió desde agosto de 2003 hasta junio de 2007',
                    'degree': 'Diploma de escuela secundaria recibido',
                    'highlightList': {
                        'list.1': 'Recibió el Diploma de Mérito del Sello del Estado Dorado (GSSMD) al graduarse.',
                        'list.2': '4 Años - Banda de Marcha y Concierto',
                        'list.3': 'Votado como tesorero de la banda por 1 año por pares',
                        'list.4': 'Votado como el anuario más singular de las clases superiores'
                    }
                },
                'highlightsLabel': 'Resúmenes',
            },
            'footer': {
                'buttonLabel': 'Entonces, ¿por qué "El tesoro de las gemas"?'
            }
        }
    },
    jp: {
        translation: {
            'nav.about': '私について',
            'nav.contact': '接触',
            'nav.projects': 'マイプロジェクト',
            'nav.employment': '雇用',
            'nav.education': '教育',
            'nav.trademark': '宝石の宝庫',
            'nav.footerMsg': 'プロジェクト・オブ・イマジネーション',
            'nav.americanEnglish': 'アメリカ英語',
            'nav.czech': 'チェコ語',
            'nav.japanese': '日本語',
            'nav.spanish': 'スペイン語',
            'authorIntroduction': 'こんにちは、ダスティンです',
            'welcomeMsg': 'そして、私の興味、仕事、成果の大要へようこそ',
            'foxImg': '擬人化されたフォックスマイニングクリスタルは、クリスタルに電力を供給します',
            'aboutHeader': '私が誰かって',
            'employment': {
                'main.label': '職歴',
                'sub.label.tech': 'テクノロジー産業',
                'sub.label.food': '食品工業'
            },
            'education': {
                'header': '母校',
                'college': {
                    'attended': '2007年8月から2009年12月まで出席',
                    'degree': '理学準学士号取得',
                    'highlightList': {
                        'list.1': '学部長のリストに載っている',
                        'list.2': '大統領のリストに載っている',
                        'list.3': 'カレッジで最高の化学インストラクターの1人であるスーザン・ノースリーフの指導を受けました'
                    }
                },
                'highschool': {
                    'attended': '2003年8月から2007年6月まで出席',
                    'degree': '高校卒業証書取得',
                    'highlightList': {
                        'list.1': '卒業時にGolden State Seal Merit Diploma(GSSMD)を授与',
                        'list.2': '4年間 - マーチング&コンサートバンド',
                        'list.3': '同業者からバンド会計として1年間投票されました',
                        'list.4': 'シニアクラスの年鑑で最もユニークなものに選ばれました'
                    }
                },
                'highlightsLabel': 'ハイライト',
            },
            'footer': {
                'buttonLabel': 'では、なぜ「宝石の宝庫」なのでしょうか'
            }
        }
    }
};

i18n.use(initReactI18next).init({
    resources,
    defaultFallback: "en",
    lng: "en",
    interpolation: {
        escapeValue: false
    }
});

export default i18n;