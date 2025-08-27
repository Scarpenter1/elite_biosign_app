const speciesData = [
  {
    name: 'Fumerola extremus',
    atmospheres: ['Any'],
    bodyTypes: ['Rocky', 'Silicate', 'Iron'],
    minTemp: null,
    maxTemp: null,
    notes: 'Requires volcanism (Silicate/Iron/Rocky) and gravity < 0.27 G'
  },
  {
    name: 'Fonticulua segmentatus',
    atmospheres: ['Neon', 'Neon rich'],
    bodyTypes: ['Any'],
    minTemp: null,
    maxTemp: null,
    notes: 'Requires gravity < 0.27 G'
  },
  {
    name: 'Concha biconcavis',
    atmospheres: ['Nitrogen'],
    bodyTypes: ['Any'],
    minTemp: null,
    maxTemp: null,
    notes: 'Requires gravity < 0.27 G'
  },
  {
    name: 'Fonticulua Fluctus',
    atmospheres: ['Oxygen'],
    bodyTypes: ['Icy', 'Rocky Ice'],
    minTemp: null,
    maxTemp: null,
    notes: 'Occurs on icy or rocky‑ice worlds; gravity < 0.27 G'
  },
  {
    name: 'Stratum tectonicas',
    atmospheres: ['Oxygen', 'Ammonia', 'Carbon dioxide', 'Water', 'Sulfure Dioxide'],
    bodyTypes: ['HMC'],
    minTemp: 165, // >165 K
    maxTemp: null,
    notes: 'Requires a high metal content (HMC) body and temperature >165 K'
  },
  {
    name: 'Clypeus speculumi',
    atmospheres: ['Carbon dioxide', 'Water'],
    bodyTypes: ['Rocky', 'HMC'],
    minTemp: 190, // >190 K
    maxTemp: null,
    notes: 'Requires temperature >190 K and distance from the star >2 500 Ls (not checked)'
  },
  {
    name: 'Stratum cucumisis',
    atmospheres: ['Carbon dioxide', 'Sulfure Dioxide'],
    bodyTypes: ['Rocky'],
    minTemp: 190, // >190 K
    maxTemp: null,
    notes: 'Requires temperature >190 K'
  },
  {
    name: 'Cactoida vermis',
    atmospheres: ['Water'],
    bodyTypes: ['Rocky', 'HMC'],
    minTemp: null,
    maxTemp: null,
    notes: 'No specific temperature requirement'
  },
  {
    name: 'Recepta deltahedronix',
    atmospheres: ['Sulfure Dioxide'],
    bodyTypes: ['Rocky', 'HMC'],
    minTemp: null,
    maxTemp: null,
    notes: 'Requires gravity < 0.27 G'
  },
  {
    name: 'Tussock Stigmasis',
    atmospheres: ['Sulfure Dioxide'],
    bodyTypes: ['Rocky'],
    minTemp: null,
    maxTemp: null,
    notes: 'Requires gravity < 0.27 G'
  }
];

module.exports = speciesData;