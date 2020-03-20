function calculateForm(){
	console.log('calc');
	let asicCount = parseFloat(document.getElementById('asicCount').value);
	let hwHashrate = parseFloat(document.getElementById('hwHashrate').value);
	let hwWattage = parseFloat(document.getElementById('hwWattage').value);
	let kwhCost = parseFloat(document.getElementById('kwhCost').value);
	let hwCost = parseFloat(document.getElementById('hwCost').value);
	let netHashrate = parseFloat(document.getElementById('netHash').value);
	let hnsValue = parseFloat(document.getElementById('hnsValue').value);

	let energyUsePerDay = asicCount * (hwWattage/1000) * 24;
	let energyCostPerDay = kwhCost * energyUsePerDay;
	let totalHWCost = hwCost * asicCount;

	let myHashrate = asicCount * hwHashrate; //hr in TH
	let myHashratePercent = myHashrate / netHashrate;
	let grossIncomeHNS = 288000 * myHashratePercent; //288k hns = 144 blocks * 2k reward
	let grossIncomeUSD = grossIncomeHNS * hnsValue;
	let netIncomeUSD = grossIncomeUSD - energyCostPerDay;
	let roiPeriod = totalHWCost / netIncomeUSD;

	document.getElementById('myHashrateOut').textContent = Math.floor(myHashrate*1000)/1000;
	document.getElementById('myHashratePercentOut').textContent = Math.floor(myHashratePercent*10000)/10000 * 100;
	document.getElementById('grossDailyIncomeHNSOut').textContent = numeral(grossIncomeHNS).format('0,0.00');
	document.getElementById('grossDailyIncomeUSDOut').textContent = numeral(grossIncomeUSD).format('0,0.00');
	document.getElementById('powerUsageDailyOut').textContent = numeral(energyUsePerDay).format('0,0.00');
	document.getElementById('powerUsageDailyCostOut').textContent = numeral(energyCostPerDay).format('0,0.00');
	document.getElementById('netDailyIncomeOut').textContent = numeral(netIncomeUSD).format('0,0.00');
	document.getElementById('roiDaysOut').textContent = numeral(roiPeriod).format('0,0.00');

}
