/**
*The Coin class is a blueprint for a  typical Coin
*@author Sheldon Davis
*@version 1.0 Oct 28, 2014
*/
function Coin(){
	this.item_on_page; //represents coin's visual presence on the page
	this.x; //keep track of each coins individual coin's left/right position
	this.y; //keep track of each coins individual coin's top/bottom position
	/**
	*The create method puts the graphic on the page and formats it.
	*/
	this.create=function(){
		//make an <img> tag, set its src to the image in the img folder
		this.item_on_page = document.createElement("img");
		this.item_on_page.src = "img/coin.png";
		this.item_on_page.style.position = "absolute";
		//store a RANDOM X AND Y VALUE THAT'S BETWEEN 0 AND THE EDGE OF THE PLaying 
		//area(500px x 300px). Different numers for each coin.
		this.x = Math.floor(Math.random()*500);
		this.y = Math.floor(Math.random()*500);
		this.item_on_page.style.left = this.x + "px";
		this.item_on_page.style.top = this.y + "px";

		//actually put the img tag on the page:
		document.body.appendChild(this.item_on_page);
	}
	/**
	*The destroy method removes the graphic on the page and unformat it.
	*/
	this.destory=function(){
		
	}

}
onload=init;

function init(){
	var coin1 = new Coin();
	coin1.create();

	var coin2 = new Coin();
	coin2.create();
	
	var coin3 = new Coin();
	coin3.create();
	
	var coin4 = new Coin();
	coin4.create();
	
	var coin5 = new Coin();
	coin5.create();
	

	// coin1.destroy();
}