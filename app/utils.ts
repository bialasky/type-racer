// app/utils.ts

import { Card } from "./types";

const cardContents = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂",
  "🤣",
  "😊",
  "😇",
  "🙂",
  "🙃",
  "😉",
  "😌",
  "😍",
  "🥰",
  "😘",
  "😗",
  "😙",
  "😚",
  "😋",
  "😛",
  "😜",
  "🤪",
  "😝",
  "🤑",
  "🤗",
  "🤭",
  "🤫",
  "🤔",
  "🤐",
  "🤨",
  "😐",
  "😑",
  "😶",
  "😏",
  "😒",
  "🙄",
  "😬",
  "🤥",
  "😌",
  "😔",
  "😪",
  "🤤",
  "😴",
  "😷",
  "🤒",
  "🤕",
  "🤢",
  "🤮",
  "🤧",
  "😵",
  "🤯",
  "🤠",
  "🥳",
  "😎",
  "🤓",
  "🧐",
  "😕",
  "😟",
  "🙁",
  "☹️",
  "😮",
  "😯",
  "😲",
  "😳",
  "🥺",
  "😦",
  "😧",
  "😨",
  "😰",
  "😥",
  "😢",
  "😭",
  "😱",
  "😖",
  "😣",
  "😞",
  "😓",
  "😩",
  "😫",
  "🥱",
  "😤",
  "😡",
  "😠",
  "🤬",
  "😈",
  "👿",
  "💀",
  "☠️",
  "💩",
  "🤡",
  "👹",
  "👺",
  "👻",
  "👽",
  "👾",
  "🤖",
  "😺",
  "😸",
  "😹",
  "😻",
  "😼",
  "😽",
  "🙀",
  "😿",
  "😾",
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function createInitialCards(): Card[] {
  let id = 1;
  const cards: Card[] = [];

  const selectedContents = shuffleArray(cardContents).slice(0, 8);

  // Create pairs of cards
  selectedContents.forEach((content) => {
    cards.push({ id: id++, content, isFlipped: false });
    cards.push({ id: id++, content, isFlipped: false });
  });

  return cards;
}

export function shuffleCards(cards: Card[]): Card[] {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 8; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const words: string[] = [
  "white",
  "snow",
  "ivory",
  "pearl",
  "alabaster",
  "chalk",
  "milk",
  "cream",
  "eggshell",
  "vanilla",
  "frost",
  "cloud",
  "cotton",
  "linen",
  "porcelain",
  "bleached",
  "pale",
  "fair",
  "blank",
  "pure",
  "clean",
  "bright",
  "light",
  "whitewash",
  "flour",
  "silver",
  "moonlight",
];

export const generateText = () => {
  return words
    .sort(() => 0.5 - Math.random())
    .slice(0, 50)
    .join(" ");
};
