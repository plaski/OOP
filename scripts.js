var Iphone5S = new Telefon("Apple", 2500, "czarny");
var SamsungGalaxyS6 = new Telefon("Samsung", "350000", "piaskowy beż");
var OnePlusOne = new Telefon("OnePlus(?)", "zagadka", "biel");
function Telefon(marka, cena, kolor) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;

	Telefon.prototype.printInfo = function() {
		console.log("Marka telefonu to " + this.marka + ", cena to " + this.cena + ", a kolor to " + this.kolor + ".");
	};
};

Iphone5S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();