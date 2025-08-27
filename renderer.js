const speciesData = require('./data');

// compute unique list from an array of arrays
function unique(arr) {
  return Array.from(new Set(arr)).sort();
}

// Populate drop‑down options based on dataset
function populateOptions() {
  const atmosphereSelect = document.getElementById('atmosphere');
  const bodyTypeSelect = document.getElementById('bodyType');

  // Derive unique atmospheres and body types from dataset
  let atmos = [];
  let bodies = [];
  speciesData.forEach((spec) => {
    atmos = atmos.concat(spec.atmospheres);
    bodies = bodies.concat(spec.bodyTypes);
  });
  atmos = unique(atmos);
  bodies = unique(bodies);

  // include an explicit 'any' option for body types and atmospheres
  if (!atmos.includes('Any')) atmos.unshift('Any');
  if (!bodies.includes('Any')) bodies.unshift('Any');

  // populate atmosphere select
  atmos.forEach((atm) => {
    const option = document.createElement('option');
    option.value = atm;
    option.textContent = atm;
    atmosphereSelect.appendChild(option);
  });

  // Populate body type select
  bodies.forEach((bod) => {
    const option = document.createElement('option');
    option.value = bod;
    option.textContent = bod;
    bodyTypeSelect.appendChild(option);
  });
}

// Convert temperature from user‑unit to Kelvin.
function toKelvin(value, unit) {
  if (value === '' || value === null || value === undefined) return null;
  const temp = parseFloat(value);
  if (isNaN(temp)) return null;
  switch (unit) {
    case 'C':
      return temp + 273.15;
    case 'F':
      return (temp - 32) * (5 / 9) + 273.15;
    case 'K':
    default:
      return temp;
  }
}

function evaluate() {
  const atm = document.getElementById('atmosphere').value;
  const body = document.getElementById('bodyType').value;
  const tempValue = document.getElementById('temperature').value;
  const tempUnit = document.getElementById('tempUnit').value;
  const tempK = toKelvin(tempValue, tempUnit);
  const resultsDiv = document.getElementById('results');

  // Filter species based on selections
  const matches = speciesData.filter((spec) => {
    // atmosphere check: 'any' in either selection or dataset means wild‑card
    const atmMatch =
      atm === 'Any' ||
      spec.atmospheres.includes('Any') ||
      spec.atmospheres.includes(atm);

    if (!atmMatch) return false;

    // body type check
    const bodyMatch =
      body === 'Any' ||
      spec.bodyTypes.includes('Any') ||
      spec.bodyTypes.includes(body);

    if (!bodyMatch) return false;

    // temperature check
    if (spec.minTemp !== null && tempK !== null) {
      if (tempK < spec.minTemp) return false;
    }
    if (spec.maxTemp !== null && tempK !== null) {
      if (tempK > spec.maxTemp) return false;
    }
    // If the species has a temperature requirement but user did not enter a temperature,
    // consider it a possible match. we cannot exclude it without information.

    return true;
  });

  // Display results
  resultsDiv.innerHTML = '';
  if (matches.length === 0) {
    const p = document.createElement('p');
    p.textContent = 'No high‑value biosigns match these parameters.';
    resultsDiv.appendChild(p);
  } else {
    const p = document.createElement('p');
    p.textContent = `Potential high‑value biosigns (${matches.length}):`;
    resultsDiv.appendChild(p);
    const ul = document.createElement('ul');
    matches.forEach((spec) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${spec.name}</strong> – ${spec.notes}`;
      ul.appendChild(li);
    });
    resultsDiv.appendChild(ul);
  }
}

// Initializer
window.addEventListener('DOMContentLoaded', () => {
  populateOptions();
  document.getElementById('checkBtn').addEventListener('click', evaluate);
});