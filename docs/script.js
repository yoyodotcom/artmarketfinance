const valueInput = document.querySelector("#collectionValue");
const categoryInput = document.querySelector("#categoryStrength");
const provenanceInput = document.querySelector("#provenanceQuality");
const valueOutput = document.querySelector("#valueOutput");
const facilityOutput = document.querySelector("#facilityOutput");
const riskOutput = document.querySelector("#riskOutput");

function formatMillions(value) {
  return `$${value.toFixed(value >= 10 ? 1 : 2)}M`;
}

function updateFacility() {
  const collectionValue = Number(valueInput.value);
  const categoryRate = Number(categoryInput.value);
  const provenanceFactor = Number(provenanceInput.value);
  const facility = collectionValue * categoryRate * provenanceFactor;
  const advanceRate = facility / collectionValue;

  valueOutput.textContent = formatMillions(collectionValue);
  facilityOutput.textContent = formatMillions(facility);

  if (advanceRate >= 0.43) {
    riskOutput.textContent = "Strong liquidity profile";
  } else if (advanceRate >= 0.34) {
    riskOutput.textContent = "Balanced collateral profile";
  } else {
    riskOutput.textContent = "Selective collateral profile";
  }
}

[valueInput, categoryInput, provenanceInput].forEach((control) => {
  control.addEventListener("input", updateFacility);
});

updateFacility();
