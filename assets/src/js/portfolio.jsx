var TYPES = [
    {
        "title": {
            "ru": "Все работы",
            "en": "All projects"
            },
        "code": "all"
    },
    {
        "title": {
            "ru": "Сайты",
            "en": "Websites"
        },
        "code": "websites"
    },
    {
        "title": {
            "ru": "Магазины",
            "en": "Stores"
        },
        "code": "stores"
    },
    {
        "title": {
            "ru": "Каталоги",
            "en": "Online catalogs"
        },
        "code": "catalogs"
    },
    {
        "title": {
            "ru": "Прочее",
            "en": "Other"
        },
        "code": "other"
    }];
var PROJECTS = [
    {
        "id": "167",
        "title": {
            "ru": "Сайт Объединенной судостроительной корпорации",
            "en": "Website of the United shipbuilding Corporation"
        },
        "logo": "osk.png",
        "url": "artlebedev.ru/osk/",
        "type": "websites"
    },
    {
        "id": "166",
        "title": {
            "ru": "Сайт о достопримечательностях России «Samovar travel»",
            "en": "Website of Russian landmarks Samovar travel"
        },
        "logo": "samovar.png",
        "url": "samovar.travel",
        "type": "websites"
    },
    {
        "id": "160",
        "title": {
            "ru": "Лендинг для сервиса Резалтус от Sape",
            "en": "Landing-service Results from Sape"
        },
        "logo": "resultus.png",
        "url": "resultus.ru",
        "type": "websites"
    },
    {
        "id": "159",
        "title": {
            "ru": "Сайт дилера фанеры",
            "en": "Website of a dealer of plywood"
        },
        "logo": "fanera.jpg",
        "url": "тд-фанера.рф",
        "type": "websites"
    },
    {
        "id": "157",
        "title": {
            "ru": "Сайт центра Бикрам Йоги",
            "en": "Website of the Bikram Yoga Center"
        },
        "logo": "bikram.png",
        "url": "bikramyogamsk.ru",
        "type": "websites"
    },
    {
        "id": "156",
        "title": {
            "ru": "Интернет-магазин парфюмерии «Orental»",
            "en": "Internet-shop of perfumery Orental"
        },
        "logo": "orental.png",
        "url": "orental.ru",
        "type": "stores"
    },
    {
        "id": "155",
        "title": {
            "ru": "Интернет-магазин офисной мебели «BestOffice»",
            "en": "Internet-shop of office furniture BestOffice"
        },
        "logo": "bestoffice.png",
        "url": "best-office.msk.ru",
        "type": "stores"
    },
    {
        "id": "154",
        "title": {
            "ru": "Сайт детского ансамбля «Пичворк»",
            "en": "Website of the children's ensemble Pechvork"
        },
        "logo": "pichvork.png",
        "url": "pichvork.gromkov.ru",
        "type": "websites"
    },
    {
        "id": "153",
        "title": {
            "ru": "Новостной портал о скалолазании «Climbbears»",
            "en": "News portal about climbing Climbbears"
        },
        "logo": "climbbears.png",
        "url": "climbbears.ru",
        "type": "websites"
    },
    {
        "id": "152",
        "title": {
            "ru": "Сайт творческой мастерской Ковальчука",
            "en": "Website creative workshop Ilya Kovalchuk"
        },
        "logo": "k_k.png",
        "url": "expo-tmk.ru",
        "type": "websites"
    },
    {
        "id": "151",
        "title": {
            "ru": "Сайт компании «IB Translations»",
            "en": "Website «IB Translations»"
        },
        "logo": "ib.png",
        "url": "www.artlebedev.ru/ib-translations/site/",
        "type": "websites"
    },
    {
        "id": "150",
        "title": {
            "ru": "Сайт компании «Техинжиниринг»",
            "en": "Website Tekhinzhiniring"
        },
        "logo": "techeng.png",
        "url": "tech.gromkov.ru",
        "type": "websites"
    },
    {
        "id": "149",
        "title": {
            "ru": "Сайт круизного теплохода «Volga Dream»",
            "en": "Website cruise ship Volga Dream"
        },
        "logo": "volgadream.png",
        "url": "volgadream.com",
        "type": "websites"
    },
    {
        "id": "148",
        "title": {
            "ru": "Сеть сайтов партнеров «Miele»",
            "en": "A network of partner sites Miele"
        },
        "logo": "miele.gif",
        "url": "www.mit.miele.ru",
        "type": "websites"
    },
    {
        "id": "147",
        "title": {
            "ru": "Интерактивная карта точек продаж «Miele»",
            "en": "Interactive map of points of sales Miele"
        },
        "logo": "miele.gif",
        "url": "www.miele.ru",
        "type": "websites"
    },
    {
        "id": "146",
        "title": {
            "ru": "Каталог краски «Bayramix»",
            "en": "Online catalog of paint Bayramix"
        },
        "logo": "bayramix.png",
        "url": "bayramix.ru",
        "type": "catalogs"
    },
    {
        "id": "145",
        "title": {
            "ru": "Интернет-каталог краски «Decorazza»",
            "en": "Online catalog of paint Decorazza"
        },
        "logo": "decorazza.png",
        "url": "decorazza.ru",
        "type": "stores"
    },
    {
        "id": "144",
        "title": {
            "ru": "Интернет-каталог светодиодного освещения «МАЯК led lighting»",
            "en": "Online catalog of led lighting LIGHTHOUSE led lighting"
        },
        "logo": "mayal_led.png",
        "url": "mayak-led.com",
        "type": "catalogs"
    },
    {
        "id": "143",
        "title": {
            "ru": "Интернет-каталог промышленных посудомоечных машин «Saneq Technology»",
            "en": "Online catalog of industrial washing machines Saneq Technology"
        },
        "logo": "saneq.png",
        "url": "saneq-technology.ru",
        "type": "catalogs"
    },
    {
        "id": "142",
        "title": {
            "ru": "Журналы и видео на сайте «Universal medical portal»",
            "en": "Video and Magazines on the website Medical portal"
        },
        "logo": "umedp.png",
        "url": "umedp.ru",
        "type": "websites"
    },
    {
        "id": "141",
        "title": {
            "ru": "Интернет-каталог недвижимости «Maindoor»",
            "en": "Online directory of real estate Maindoor"
        },
        "logo": "maindoor.png",
        "url": "maindoor.ru",
        "type": "catalogs"
    },
    {
        "id": "140",
        "title": {
            "ru": "Сайт конкурса Ярких идей от компании «Террамикс»",
            "en": "The contest site Bright ideas from Terramix"
        },
        "logo": "konkurs_idgdeco.png",
        "url": "konkurs.idg-deco.ru",
        "type": "websites"
    },
    {
        "id": "139",
        "title": {
            "ru": "Промо-сайт мюзикла «Красавица и Чудовище»",
            "en": "Promo-site of the musical Beauty and the Beast"
        },
        "logo": "beauty_and_beast_promo.png",
        "url": "promo.beauty-musical.ru",
        "type": "websites"
    },
    {
        "id": "138",
        "title": {
            "ru": "Сайт мюзикла «Красавица и Чудовище»",
            "en": "Website of the musical Beauty and the Beast"
        },
        "logo": "beauty_and_beast.png",
        "url": "beauty-musical.ru",
        "type": "websites"
    },
    {
        "id": "137",
        "title": {
            "ru": "Cайт проекта «Навеликах»",
            "en": "Website of the project Navelikah"
        },
        "logo": "navelikah.png",
        "url": "navelikah.ru",
        "type": "websites"
    },
    {
        "id": "136",
        "title": {
            "ru": "Сайт веб-студии «Рокет Студия»",
            "en": "Website of web-Studio Rocket Studio"
        },
        "logo": "rocketstudio.png",
        "url": "rocketstudio.ru",
        "type": "websites"
    },
    {
        "id": "135",
        "title": {
            "ru": "Сайт оператора сети доставки контента «CDNvideo»",
            "en": "Website operator content delivery network CDNvideo"
        },
        "logo": "cdnvideo.png",
        "url": "cdnvideo.ru",
        "type": "websites"
    },
    {
        "id": "133",
        "title": {
            "ru": "Интернет-каталог дизайнерских радиаторов «Арт-технология»",
            "en": "Online catalog of designer radiators Art-technology"
        },
        "logo": "art_technologia.png",
        "url": "art-technologia.ru",
        "type": "catalogs"
    },
    {
        "id": "132",
        "title": {
            "ru": "Сайт проекта «Яндекс.Терра»",
            "en": "Website of the project Yandex.Terra"
        },
        "logo": "yandexterra.png",
        "url": "yandex-terra.ru",
        "type": "websites"
    },
    {
        "id": "131",
        "title": {
            "ru": "Новогодняя открытка для Гринписа Росии",
            "en": "Christmas card for Greenpeace Russia"
        },
        "logo": "greenpeace.png",
        "url": "gift.greenpeace.ru",
        "type": "websites"
    },
    {
        "id": "130",
        "title": {
            "ru": "Сайт кредитного брокера «Акцепт»",
            "en": "Website of the credit broker Accept"
        },
        "logo": "accept.png",
        "url": "www.accept-fc.ru",
        "type": "websites"
    },
    {
        "id": "129",
        "title": {
            "ru": "Интернет-каталог итальянской мебели «La Casa»",
            "en": "Online catalog furniture Italian La Casa"
        },
        "logo": "lacasa.png",
        "url": "lacasa-m.ru",
        "type": "catalogs"
    },
    {
        "id": "128",
        "title": {
            "ru": "Почтовые рассылки интернет-магазина одежды «Italbazar.ru»",
            "en": "Mailing list online store clothing Italbazar.ru"
        },
        "logo": "italbazar.png",
        "url": "italbazar.ru",
        "type": "other"
    },
    {
        "id": "127",
        "title": {
            "ru": "Ускорение Интернет-магазина одежды «Italbazar.ru»",
            "en": "Acceleration is an online clothing store Italbazar.ru"
        },
        "logo": "italbazar.png",
        "url": "italbazar.ru",
        "type": "stores"
    },
    {
        "id": "126",
        "title": {
            "ru": "Интернет-магазин красок «Белинка»",
            "en": "Online store of paints Belinka"
        },
        "logo": "belinka.png",
        "url": "www.belinka.ru",
        "type": "stores"
    },
    {
        "id": "125",
        "title": {
            "ru": "Сайт мото-услуг «MotoTaxi»",
            "en": "Website Moto-services MotoTaxi"
        },
        "logo": "mototaxi.jpg",
        "url": "moto-taxi.ru",
        "type": "websites"
    },
    {
        "id": "124",
        "title": {
            "ru": "Сайт Анны Хилькевич",
            "en": "Website Of Anna Khilkevich"
        },
        "logo": "khilkevich.png",
        "url": "khilkevich.ru",
        "type": "websites"
    },
    {
        "id": "123",
        "title": {
            "ru": "Сайт технопарка «Строгино»",
            "en": "Website of the Technopark Strogino"
        },
        "logo": "strogino.png",
        "url": "www.tpstrogino.ru",
        "type": "websites"
    },
    {
        "id": "122",
        "title": {
            "ru": "Сайт производителя пластиковых окон «Светлые окна»",
            "en": "Website of the manufacturer of plastic Windows Light window"
        },
        "logo": "svetokna.png",
        "url": "www.svetokna.ru",
        "type": "websites"
    },
    {
        "id": "121",
        "title": {
            "ru": "Сайт школы танцев «Tdance»",
            "en": "Website of the dancing school Tdance"
        },
        "logo": "tdance.png",
        "url": "tdance.ru",
        "type": "websites"
    },
    {
        "id": "120",
        "title": {
            "ru": "Сайт ИКТИ РАН",
            "en": "Website IKTI RAN"
        },
        "logo": "ikti.png",
        "url": "ikti.ru",
        "type": "websites"
    },
    {
        "id": "119",
        "title": {
            "ru": "Сайт таблеток «Мотилиум»",
            "en": "Website pills Motilium"
        },
        "logo": "motilium.png",
        "url": "motilium.ru",
        "type": "websites"
    }
];

var Portfolio = React.createClass({
    getInitialState: function(){
        var siteLang = 'ru';
        if(window.location.href.indexOf('en') != '-1') {
            siteLang = 'en';
        }

        return {
            lang: siteLang,
            currentType: "all",
            types: TYPES,
            projects: PROJECTS
        }
    },

    handleChangeType: function(type) {
        if(type !== this.state.currentType) {
            var newProjects = PROJECTS.filter(function(item) {
                if(type === 'all') {
                    return true;
                } else {
                    return item.type === type;
                }
            });

            this.setState({
                projects: newProjects,
                currentType: type
            });
        }
    },

    render: function() {
        return (
            <div className="portfolio">
                <Navigation
                    types={this.state.types}
                    currentType={this.state.currentType}
                    onChangeType={this.handleChangeType}
                    lang={this.state.lang}
                />
                <Projects
                    projects={this.state.projects}
                    currentType={this.state.currentType}
                    lang={this.state.lang}
                />
            </div>
        );
    }
});

var Navigation = React.createClass({
    render: function() {
        return (
            <ul className="portfolio__nav">
                {
                    this.props.types.map(function(item) {
                        var classNameMod = (this.props.currentType == item.code) ? "portfolio__navitem_active" : "";
                        return (
                            <li
                                className={`portfolio__navitem ${classNameMod}`}
                                onClick={() => {this.props.onChangeType(item.code)}}
                                key={item.code}
                            >
                                {(this.props.lang === 'ru') ? item.title.ru : item.title.en}
                            </li>
                        );
                    }, this)
                }
            </ul>
        );
    }
});

var Projects = React.createClass({
    render: function() {
        return (
            <div className="portfolio__list clearfix">
                {
                    this.props.projects.map(function(item) {
                        return (
                            <div className="portfolio__item" data-type={item.type} key={item.id}>
                                <Work
                                    url={item.url}
                                    image={item.logo}
                                    title={(this.props.lang === 'ru') ? item.title.ru : item.title.en}
                                />
                            </div>
                        );

                    }, this)
                }
            </div>
        );
    }
});

var Work = React.createClass({
    render: function() {
        return (
            <a className="work" href={`http://${this.props.url}`}>
                <div className="work__image-wrapper">
                    <img src={`/assets/images/projects/${this.props.image}`}
                         alt={this.props.title}
                         className="work__image"
                    />
                </div>
                <div className="work__title">
                    <span className="work__site">{this.props.url}</span>
                    <br/>
                    <span className="work__page">
                        {this.props.title}
                    </span>
                </div>
            </a>
        );
    }
});

ReactDOM.render(
    <Portfolio />,
    document.getElementById("portfolio")
);