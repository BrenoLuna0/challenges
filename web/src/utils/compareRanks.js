const heroRankToNumber = {
  S: 4,
  A: 3,
  B: 2,
  C: 1,
};

const threatRankToNumber = {
  God: 4,
  Dragon: 3,
  Tiger: 2,
  Wolf: 1,
};

export default function compare(heroRank, threatRank) {
  return heroRankToNumber[heroRank] >= threatRankToNumber[threatRank]
    ? true
    : false;
}
