export class Serie {
    id: number;
    title: string;
    network: string;
    seasons: number;
    description: string;
    url: string;
    imageUrl: string;

    constructor(id: number, title: string, network: string, seasons: number, description: string, url: string, imageUrl: string) {
        this.id = id;
        this.title = title;
        this.network = network;
        this.seasons = seasons;
        this.description = description;
        this.url = url;
        this.imageUrl = imageUrl;
    }}

export const series = [
    new Serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
    "https://www.amc.com/shows/breaking-bad","https://hipermediaciones.com/wp-content/uploads/2013/10/21225_breaking_bad.jpg") ,
    
    new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
    "https://www.netflix.com/co/title/70242311","https://www.diariodenavarra.es/uploads/2019/07/15/60b1c7b325bd2.jpeg"),
    
    new Serie (3, "Game of Thrones","HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
      "https://t.ctcdn.com.br/DSjFGCs4CprGpViQbmL1fj-nyw4=/1200x675/smart/i350335.jpeg"),

    new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
        "https://www.cbs.com/shows/big_bang_theory/about/", "https://imagenes.atresplayer.com/atp/clipping/cmsimages01/2023/06/23/BEE39765-796A-44BA-9245-A3F7A78F1C1B/1280x720.jpg"),
    
    new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
        "https://www.bbc.co.uk/programmes/b018ttws", "https://player.bbc.com/static/posters/1810556/original/1585653092-069c50d32152399ae9f0d81ca5df32e35a7695c9.jpg"),

    new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
        "https://www.bbc.co.uk/programmes/p065smy4", "https://i.blogs.es/989bca/a-very-english-scandal-critica-2018-espinof/1366_521.jpg"),
  ];


