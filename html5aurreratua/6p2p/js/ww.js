var num = 2227644437; 
/*Ariketako programak, zenbakia 2 denean, ez du ezer idazten irteeran... Beste kasu guztietan bai!
  Portaera hori normalizatze aldera, erantzunak num 2 denean ere idazten du */
if (num == 2) postMessage("Zenbaki lenena da: " + num);
var i = 3;
for (; i < num; ++i) {
	if (num % i == 0) {
		postMessage("Ez da zenbaki lehena: Zatitzaile txikiena = " + num);
		i = num + 1; //for begizta amaitu dezan, i-ren balioa aldatuko dugu
	};
};
//for begizta, zatitzailerik aurkitu gabe, amaierara heldu bada, zenbakia lehena dela adieraziko dugu!
if (i == num) {
	postMessage("Zenbaki lenena da: " + num);
}
