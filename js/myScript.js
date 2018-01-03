var number			= {"bell":0, "watering_can":0, "net":0, "fishing_rod":0, "shovel":0, "slingshot":0};
var value			= {"base":0, "watering_can":10, "net":25, "fishing_rod":50, "shovel":200, "slingshot":500};
var baseCost		= {"watering_can":100, "net":250, "fishing_rod":500, "shovel":2000, "slingshot":5000};
var currentCost		= {"watering_can":100, "net":250, "fishing_rod":500, "shovel":2000, "slingshot":5000};
var upgradeCost		= {"apple":1000, "cherry":5000, "orange":15000, "peach":30000, "pear":50000, "banana":80000, "coconut":100000, "durian":120000, "lemon":135000, "lychee":170000, "mango":200000, "persimmon":250000, 
						"rose":5000, "cosmos":12500, "tulip":25000, "pansy":38500, "lily":65000, "violet":92000, "carnation":125000, "jacob_ladder":200000,						
						"pond_smelt":10000, "sweetfish":30000, "rainbow_trout":75000, "stringfish":92500, "king_salmon":115000, "dorado":172000, "arowana":212000, "arapaima":250000,
						"moth":15000, "common_butterfly":30000, "yellow_butterfly":50000, "machaon":95000, "monarch":123000, "emperor_butterfly":175000, "agrias":200000, "raja_brooke_butterfly":350000, "birdwing_butterfly":500000,
						"fossil_raw":500000, "fossil_bones":750000, "poutch_present":800000, "green_present":1200000, "red_present":1500000,
						"watering_can_silver":200000, "watering_can_gold":1000000, "net_silver":500000, "net_gold":2500000, "fishing_rod_silver":800000, "fishing_rod_gold":4000000, "shovel_silver":1100000, "shovel_gold":5500000, "slingshot_silver":1400000, "slingshot_gold":7000000}
var bellsPerSecond	= 0;

var intervalBase = setInterval("addBells('base');", 1000);
var intervalWateringCan = setInterval("addBells('watering_can');", 1000);
var intervalNet = setInterval("addBells('net');", 1000);
var intervalFishingRod = setInterval("addBells('fishing_rod');", 1000);
var intervalShovel = setInterval("addBells('shovel');", 1000);
var intervalSlingshot = setInterval("addBells('slingshot');", 1000);
var intervalAff = setInterval("affAll();", 50);

function addSomething(something){
	if(something === "bell"){
		number.bell++;
	} else {
		if(number["bell"] >= currentCost[something]){
			number[something]++;
			number["bell"] -= currentCost[something];
			currentCost[something] += baseCost[something] * parseInt((Math.pow(1.15, number[something])));
		}
	}
	affAll();
}

function addBells(something){
	if (something === 'base'){
		number.bell += value['base'];
	} else {
		number.bell += (number[something] * value[something]);
	}
}

function addUpgrade(upgrade){
	if (number["bell"] >= upgradeCost[upgrade]){
		number["bell"] -= upgradeCost[upgrade];
		switch(upgrade){
			case "apple":
				value.base = 10;
				document.getElementById('divApple').setAttribute("class", "well row div-invisible");
				break;
			case "cherry":
				value.base *= 2;
				document.getElementById('divCherry').setAttribute("class", "well row div-invisible");
				break;
			case "orange":
				value.base *= 2;
				document.getElementById('divOrange').setAttribute("class", "well row div-invisible");
				break;
			case "peach":
				value.base *= 2;
				document.getElementById('divPeach').setAttribute("class", "well row div-invisible");
				break;
			case "pear":
				value.base *= 2;
				document.getElementById('divPear').setAttribute("class", "well row div-invisible");
				break;
			case "banana":
				value.base *= 2;
				document.getElementById('divBanana').setAttribute("class", "well row div-invisible");
				break;
			case "coconut":
				value.base *= 2;
				document.getElementById('divCoconut').setAttribute("class", "well row div-invisible");
				break;
			case "durian":
				value.base *= 2;
				document.getElementById('divDurian').setAttribute("class", "well row div-invisible");
				break;
			case "lemon":
				value.base *= 2;
				document.getElementById('divLemon').setAttribute("class", "well row div-invisible");
				break;
			case "lychee":
				value.base *= 2;
				document.getElementById('divLychee').setAttribute("class", "well row div-invisible");
				break;
			case "mango":
				value.base *= 2;
				document.getElementById('divMango').setAttribute("class", "well row div-invisible");
				break;
			case "persimmon":
				value.base *= 2;
				document.getElementById('divPersimmon').setAttribute("class", "well row div-invisible");
				break;
			case "rose":
				value["watering_can"] *= 2;
				document.getElementById('divRose').setAttribute("class", "well row div-invisible");
				break;
			case "cosmos":
				value["watering_can"] *= 2;
				document.getElementById('divCosmos').setAttribute("class", "well row div-invisible");
				break;
			case "tulip":
				value["watering_can"] *= 2;
				document.getElementById('divTulip').setAttribute("class", "well row div-invisible");
				break;
			case "pansy":
				value["watering_can"] *= 2;
				document.getElementById('divPansy').setAttribute("class", "well row div-invisible");
				break;
			case "lily":
				value["watering_can"] *= 2;
				document.getElementById('divLily').setAttribute("class", "well row div-invisible");
				break;
			case "violet":
				value["watering_can"] *= 2;
				document.getElementById('divViolet').setAttribute("class", "well row div-invisible");
				break;
			case "carnation":
				value["watering_can"] *= 2;
				document.getElementById('divCarnation').setAttribute("class", "well row div-invisible");
				break;
			case "jacob_ladder":
				value["watering_can"] *= 2;
				document.getElementById('divJacobLadder').setAttribute("class", "well row div-invisible");
				break;
			case "pond_smelt":
				value["fishing_rod"] *= 2;
				document.getElementById('divPondSmelt').setAttribute("class", "well row div-invisible");
				break;
			case "sweetfish":
				value["fishing_rod"] *= 2;
				document.getElementById('divSweetfish').setAttribute("class", "well row div-invisible");
				break;
			case "rainbow_trout":
				value["fishing_rod"] *= 2;
				document.getElementById('divRainbowTrout').setAttribute("class", "well row div-invisible");
				break;
			case "stringfish":
				value["fishing_rod"] *= 2;
				document.getElementById('divStringfish').setAttribute("class", "well row div-invisible");
				break;
			case "king_salmon":
				value["fishing_rod"] *= 2;
				document.getElementById('divKingSalmon').setAttribute("class", "well row div-invisible");
				break;
			case "dorado":
				value["fishing_rod"] *= 2;
				document.getElementById('divDorado').setAttribute("class", "well row div-invisible");
				break;
			case "arowana":
				value["fishing_rod"] *= 2;
				document.getElementById('divArowana').setAttribute("class", "well row div-invisible");
				break;
			case "arapaima":
				value["fishing_rod"] *= 2;
				document.getElementById('divArapaima').setAttribute("class", "well row div-invisible");
				break;
			case "moth":
				value["net"] *= 2;
				document.getElementById('divMoth').setAttribute("class", "well row div-invisible");
				break;
			case "common_butterfly":
				value["net"] *= 2;
				document.getElementById('divCommonButterfly').setAttribute("class", "well row div-invisible");
				break;
			case "yellow_butterfly":
				value["net"] *= 2;
				document.getElementById('divYellowButterfly').setAttribute("class", "well row div-invisible");
				break;
			case "machaon":
				value["net"] *= 2;
				document.getElementById('divMachaon').setAttribute("class", "well row div-invisible");
				break;
			case "monarch":
				value["net"] *= 2;
				document.getElementById('divMonarch').setAttribute("class", "well row div-invisible");
				break;
			case "emperor_butterfly":
				value["net"] *= 2;
				document.getElementById('divEmperorButterfly').setAttribute("class", "well row div-invisible");
				break;
			case "agrias":
				value["net"] *= 2;
				document.getElementById('divAgrias').setAttribute("class", "well row div-invisible");
				break;
			case "raja_brooke_butterfly":
				value["net"] *= 2;
				document.getElementById('divRajaBrookeButterfly').setAttribute("class", "well row div-invisible");
				break;
			case "birdwing_butterfly":
				value["net"] *= 2;
				document.getElementById('divBirdwingButterfly').setAttribute("class", "well row div-invisible");
				break;
			case "fossil_raw":
				value["shovel"] *= 10;
				document.getElementById('divFossil').setAttribute("class", "well row div-invisible");
				break;
			case "fossil_bones":
				value["shovel"] *= 10;
				document.getElementById('divBones').setAttribute("class", "well row div-invisible");
				break;
			case "poutch_present":
				value["slingshot"] *= 10;
				document.getElementById('divPoutchPresent').setAttribute("class", "well row div-invisible");
				break;
			case "green_present":
				value["slingshot"] *= 10;
				document.getElementById('divGreenPresent').setAttribute("class", "well row div-invisible");
				break;
			case "red_present":
				value["slingshot"] *= 10;
				document.getElementById('divRedPresent').setAttribute("class", "well row div-invisible");
				break;
			case "watering_can_silver":
				clearInterval(intervalWateringCan);
				intervalWateringCan = setInterval("addBells('watering_can');", 750);
				document.getElementById('divWateringCanSilver').setAttribute("class", "well row div-invisible");
				break;
			case "watering_can_gold":
				clearInterval(intervalWateringCan);
				intervalWateringCan = setInterval("addBells('watering_can');", 500);
				document.getElementById('divWateringCanGold').setAttribute("class", "well row div-invisible");
				break;
			case "net_silver":
				clearInterval(intervalNet);
				intervalNet = setInterval("addBells('net');", 750);
				document.getElementById('divNetSilver').setAttribute("class", "well row div-invisible");
				break;
			case "net_gold":
				clearInterval(intervalNet);
				intervalNet = setInterval("addBells('net');", 500);
				document.getElementById('divNetGold').setAttribute("class", "well row div-invisible");
				break;
			case "fishing_rod_silver":
				clearInterval(intervalFishingRod);
				intervalFishingRod = setInterval("addBells('fishing_rod');", 750);
				document.getElementById('divFishingRodSilver').setAttribute("class", "well row div-invisible");
				break;
			case "fishing_rod_gold":
				clearInterval(intervalFishingRod);
				intervalFishingRod = setInterval("addBells('fishing_rod');", 500);
				document.getElementById('divFishingRodGold').setAttribute("class", "well row div-invisible");
				break;
			case "shovel_silver":
				clearInterval(intervalShovel);
				intervalShovel = setInterval("addBells('shovel');", 750);
				document.getElementById('divShovelSilver').setAttribute("class", "well row div-invisible");
				break;
			case "shovel_gold":
				clearInterval(intervalShovel);
				intervalShovel = setInterval("addBells('shovel');", 500);
				document.getElementById('divShovelGold').setAttribute("class", "well row div-invisible");
				break;
			case "slingshot_silver":
				clearInterval(intervalSlingshot);
				intervalSlingshot = setInterval("addBells('shovel');", 750);
				document.getElementById('divSlingshotSilver').setAttribute("class", "well row div-invisible");
				break;
			case "slingshot_gold":
				clearInterval(intervalSlingshot);
				intervalSlingshot = setInterval("addBells('shovel');", 500);
				document.getElementById('divSlingshotGold').setAttribute("class", "well row div-invisible");
				break;
		}
	}
}

function checkIfBuyable(){
	if(number.bell < currentCost.watering_can){
		document.getElementById('divWateringCan').setAttribute("class", "well row div-unclickable");
	} else {
		document.getElementById('divWateringCan').setAttribute("class", "well row");
	}
	
	if(number.bell < currentCost.net){
		document.getElementById('divNet').setAttribute("class", "well row div-unclickable");
	} else {
		document.getElementById('divNet').setAttribute("class", "well row");
	}

	if(number.bell < currentCost.fishing_rod){
		document.getElementById('divFishingRod').setAttribute("class", "well row div-unclickable");
	} else {
		document.getElementById('divFishingRod').setAttribute("class", "well row");
	}

	if(number.bell < currentCost.shovel){
		document.getElementById('divShovel').setAttribute("class", "well row div-unclickable");
	} else {
		document.getElementById('divShovel').setAttribute("class", "well row");
	}

	if(number.bell < currentCost.slingshot){
		document.getElementById('divSlingshot').setAttribute("class", "well row div-unclickable");
	} else {
		document.getElementById('divSlingshot').setAttribute("class", "well row");
	}
}

function affAll(){
	checkIfBuyable();
	bellsPerSecond = (value.base + (number.watering_can * value.watering_can) + (number.net * value.net) + (number.fishing_rod * value.fishing_rod) + (number.shovel * value.shovel) + (number.slingshot * value.slingshot));

	document.getElementById('txtBellsPerSecond').innerHTML = bellsPerSecond;
	document.getElementById('txtNbBells').innerHTML = number.bell;

	document.getElementById('txtCostWateringCans').innerHTML = currentCost.watering_can;
	document.getElementById('txtNbWateringCans').innerHTML = number.watering_can;

	document.getElementById('txtCostNets').innerHTML = currentCost.net;
	document.getElementById('txtNbNets').innerHTML = number.net;

	document.getElementById('txtCostFishingRods').innerHTML = currentCost.fishing_rod;
	document.getElementById('txtNbFishingRods').innerHTML = number.fishing_rod;

	document.getElementById('txtCostShovels').innerHTML = currentCost.shovel;
	document.getElementById('txtNbShovels').innerHTML = number.shovel;

	document.getElementById('txtCostSlingshots').innerHTML = currentCost.slingshot;
	document.getElementById('txtNbSlingshots').innerHTML = number.slingshot;
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'left',
        trigger : 'hover'
    });
});

affAll();