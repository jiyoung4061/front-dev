let Rect = function (x1, y1, x2, y2, color) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.color = color;
}
Rect.prototype.show = function () {
    // console.log("[width: "+ (this.x2-this.x1) +", height:" + (this.y2-this.y1) + ", color:" + this.color + "] 인 사각형을 그렸습니다.");
	// document.write("<div style='position: absolute; left:100px; top:100px; width:100px; height:50px; background-color:#f00;'></div>")
	
	const rectEl = document.createElement("div");
	rectEl.style.position = "absolute";
	rectEl.style.left = this.x1 + "px";
	rectEl.style.top = this.y1 + "px";
	rectEl.style.width = (this.x2-this.x1)+"px"; 
	rectEl.style.height = (this.y2-this.y1)+"px";
	rectEl.style.backgroundColor = this.color;
	
	document.body.appendChild(rectEl);
}
