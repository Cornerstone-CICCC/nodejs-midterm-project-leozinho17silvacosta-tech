import { v4 as uuidv4 } from 'uuid';
import { User, Team } from './types';

export const users: User[] = [];

export const teams: Team[] = [
  {
    id: uuidv4(),
    name: "Mexico",
    group: "A",
    MatchesCity: "Mexico",
    description: "A traditional CONCACAF national team, a regular participant in World Cups, and always competitive at home.",
    titles: 0,
    starPlayer: "Hirving Lozano"
  },
  {
    id: uuidv4(),
    name: "South Africa",
    group: "A",
    MatchesCity: "Mexico",
    description: "The African team that hosted the 2010 World Cup, known for its speed and energy.",
    titles: 0,
    starPlayer: "Percy Tau"
  },
  {
    id: uuidv4(),
    name: "South Korea",
    group: "A",
    MatchesCity: "Mexico",
    description: "A traditional powerhouse in Asia, it made history in 2002 by reaching the semifinals on home soil.",
    titles: 0,
    starPlayer: "Son Heung-min"
  },
  {
    id: uuidv4(),
    name: "Canada",
    group: "B",
    MatchesCity: "Canada",
    description: "A rising national team, with a talented young generation and its sights set on 2026.",
    titles: 0,
    starPlayer: "Alphonso Davies"
  },
  {
    id: uuidv4(),
    name: "Qatar",
    group: "B",
    MatchesCity: "Canada",
    description: "The 2019 Asian champion has made significant progress in recent years.",
    titles: 0,
    starPlayer: "Akram Afif"
  },
  {
    id: uuidv4(),
    name: "Switzerland",
    group: "B",
    MatchesCity: "Canada",
    description: "A consistent European national team, strong defensively and a regular contender in World Cups.",
    titles: 0,
    starPlayer: "Granit Xhaka"
  },
  {
    id: uuidv4(),
    name: "Brazil",
    group: "C",
    MatchesCity: "United States",
    description: "The most champion team in World Cup history, always the favorite.",
    titles: 5,
    starPlayer: "Neymar Jr."
  },
  {
    id: uuidv4(),
    name: "Morocco",
    group: "C",
    MatchesCity: "United States",
    description: "The sensation of 2022 with a historic semifinal.",
    titles: 0,
    starPlayer: "Achraf Hakimi"
  },
  {
    id: uuidv4(),
    name: "Haiti",
    group: "C",
    MatchesCity: "United States",
    description: "A Caribbean national team with little history in the World Cup.",
    titles: 0,
    starPlayer: "Duckens Nazon"
  },
  {
    id: uuidv4(),
    name: "Scotland",
    group: "C",
    MatchesCity: "United States",
    description: "A British tradition, aiming to return to the forefront of the World Cup.",
    titles: 0,
    starPlayer: "Andrew Robertson"
  },
  {
    id: uuidv4(),
    name: "USA",
    group: "D",
    MatchesCity: "United States",
    description: "A team on the rise, featuring young talent and set to host the 2026 tournament.",
    titles: 0,
    starPlayer: "Christian Pulisic"
  },
  {
    id: uuidv4(),
    name: "Paraguay",
    group: "D",
    MatchesCity: "United States",
    description: "Strong defensively, a traditional powerhouse in South America.",
    titles: 0,
    starPlayer: "Miguel Almirón"
  },
  {
    id: uuidv4(),
    name: "Australia",
    group: "D",
    MatchesCity: "United States",
    description: "A physically fit and well-organized team with a consistent presence in World Cups.",
    titles: 0,
    starPlayer: "Mathew Ryan"
  },
  {
    id: uuidv4(),
    name: "Germany",
    group: "E",
    MatchesCity: "United States",
    description: "One of the greatest national teams in history, and a very disciplined one.",
    titles: 4,
    starPlayer: "Jamal Musiala"
  },
  {
    id: uuidv4(),
    name: "Curaçao",
    group: "E",
    MatchesCity: "United States",
    description: "A rising Caribbean team.",
    titles: 0,
    starPlayer: "Leandro Bacuna"
  },
  {
    id: uuidv4(),
    name: "Ivory Coast",
    group: "E",
    MatchesCity: "United States",
    description: "An African powerhouse with a rich tradition and offensive talent.",
    titles: 0,
    starPlayer: "Sébastien Haller"
  },
  {
    id: uuidv4(),
    name: "Ecuador",
    group: "E",
    MatchesCity: "United States",
    description: "A young and dynamic team from South America.",
    titles: 0,
    starPlayer: "Moisés Caicedo"
  },
  {
    id: uuidv4(),
    name: "Netherlands",
    group: "F",
    MatchesCity: "United States",
    description: "A European tradition, famous for its attacking style of soccer.",
    titles: 0,
    starPlayer: "Virgil Van Dijk"
  },
  {
    id: uuidv4(),
    name: "Japan",
    group: "F",
    MatchesCity: "United States",
    description: "Technique and discipline, a standout in Asia.",
    titles: 0,
    starPlayer: "Takefusa Kubo"
  },
  {
    id: uuidv4(),
    name: "Tunisia",
    group: "F",
    MatchesCity: "United States",
    description: "A competitive African team, a regular participant in World Cups",
    titles: 0,
    starPlayer: "Wahbi Khazri"
  },
  {
    id: uuidv4(),
    name: "Belgium",
    group: "G",
    MatchesCity: "United States",
    description: "A talented generation that has recently made a name for itself in World Cups.",
    titles: 0,
    starPlayer: "Kevin De Bruyne"
  },
  {
    id: uuidv4(),
    name: "Egypt",
    group: "G",
    MatchesCity: "United States",
    description: "One of Africa's top national teams.",
    titles: 0,
    starPlayer: "Mohamed Salah"
  },
  {
    id: uuidv4(),
    name: "Iran",
    group: "G",
    MatchesCity: "United States",
    description: "Strong in Asia, a tactically organized team.",
    titles: 0,
    starPlayer: "Mehdi Taremi"
  },
  {
    id: uuidv4(),
    name: "New Zealand",
    group: "G",
    MatchesCity: "United States",
    description: "Oceania's top national team.",
    titles: 0,
    starPlayer: "Chris Wood"
  },
  {
    id: uuidv4(),
    name: "Spain",
    group: "H",
    MatchesCity: "United States",
    description: "The 2010 champion, known for its possession-based style of play. The favorite to win the upcoming World Cup.",
    titles: 1,
    starPlayer: "Lamine Yamal"
  },
  {
    id: uuidv4(),
    name: "Cape Verde",
    group: "H",
    MatchesCity: "United States",
    description: "The African national team is on the rise.",
    titles: 0,
    starPlayer: "Ryan Mendes"
  },
  {
    id: uuidv4(),
    name: "Saudi Arabia",
    group: "H",
    MatchesCity: "United States",
    description: "A powerhouse in Asia, known for its surprising victories.",
    titles: 0,
    starPlayer: "Salem Al-Dawsari"
  },
  {
    id: uuidv4(),
    name: "Uruguay",
    group: "H",
    MatchesCity: "United States",
    description: "Two-time world champion, tradition, and grit.",
    titles: 2,
    starPlayer: "Federico Valverde"
  },
  {
    id: uuidv4(),
    name: "France",
    group: "I",
    MatchesCity: "United States",
    description: "A current world power with a star-studded roster.",
    titles: 2,
    starPlayer: "Kylian Mbappé"
  },
  {
    id: uuidv4(),
    name: "Senegal",
    group: "I",
    MatchesCity: "United States",
    description: "A strong African national team in recent years.",
    titles: 0,
    starPlayer: "Sadio Mané"
  },
  {
    id: uuidv4(),
    name: "Norway",
    group: "I",
    MatchesCity: "United States",
    description: "Growing with the new generation.",
    titles: 0,
    starPlayer: "Erling Haaland"
  },
  {
    id: uuidv4(),
    name: "Argentina",
    group: "J",
    MatchesCity: "United States",
    description: "The current world champion.",
    titles: 3,
    starPlayer: "Lionel Messi"
  },
  {
    id: uuidv4(),
    name: "Algeria",
    group: "J",
    MatchesCity: "United States",
    description: "A technically strong African team.",
    titles: 0,
    starPlayer: "Riyad Mahrez"
  },
  {
    id: uuidv4(),
    name: "Austria",
    group: "J",
    MatchesCity: "United States",
    description: "A well-organized and competitive European team.",
    titles: 0,
    starPlayer: "David Alaba"
  },
  {
    id: uuidv4(),
    name: "Jordan",
    group: "J",
    MatchesCity: "United States",
    description: "Asia's up-and-coming team.",
    titles: 0,
    starPlayer: "Musa Al-Taamari"
  },
  {
    id: uuidv4(),
    name: "Portugal",
    group: "K",
    MatchesCity: "United States",
    description: "A strong national team with a talented new generation.",
    titles: 0,
    starPlayer: "Cristiano Ronaldo"
  },
  {
    id: uuidv4(),
    name: "Uzbekistan",
    group: "K",
    MatchesCity: "United States",
    description: "The Asian national team is on the rise.",
    titles: 0,
    starPlayer: "Eldor Shomurodov"
  },
  {
    id: uuidv4(),
    name: "Colombia",
    group: "K",
    MatchesCity: "United States",
    description: "South America's technical and offensive team.",
    titles: 0,
    starPlayer: "Luis Díaz"
  },
  {
    id: uuidv4(),
    name: "England",
    group: "L",
    MatchesCity: "United States",
    description: "1966 champions, a young and strong team.",
    titles: 1,
    starPlayer: "Jude Bellingham"
  },
  {
    id: uuidv4(),
    name: "Croatia",
    group: "L",
    MatchesCity: "United States",
    description: "Runner-up in 2018, always competitive.",
    titles: 0,
    starPlayer: "Luka Modrić"
  },
  {
    id: uuidv4(),
    name: "Ghana",
    group: "L",
    MatchesCity: "United States",
    description: "A traditional and physically demanding African national team.",
    titles: 0,
    starPlayer: "Mohammed Kudus"
  },
  {
    id: uuidv4(),
    name: "Panama",
    group: "L",
    MatchesCity: "United States",
    description: "A rising team in CONCACAF.",
    titles: 0,
    starPlayer: "Adalberto Carrasquilla"
  },
];

// SIMULATE PLAYOFFS:

export const tournamentProgress: {
  roundOf16: string[];
  quarterFinals: string[];
  semiFinals: string[];
  final: string[];
} = {
  roundOf16: [],
  quarterFinals: [],
  semiFinals: [],
  final: []
};