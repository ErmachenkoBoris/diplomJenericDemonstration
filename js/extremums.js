export function Extremum(radious, depth, x, y) {
    this.radius = radious;
    this.x = x;
    this.y = y;
    this.depth = depth;
    this.color = lightenDarkenColor(extrenumColor, -depth*50);
}

export function generateaddNewExtremum(canvasWidth, canvasHeight) {
    let radious = 10 + Math.random() * 30;
    let depth = Math.random() * 2;
    let x = parseInt(Math.random() * canvasWidth);
    let y = parseInt(Math.random() * canvasHeight);
    let extrenum = new Extremum(radious, depth, x, y);
    return extrenum;
}

export function lightenDarkenColor(col, amt) {

    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col,16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if  (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if  (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

}
export const extrenumColor = "#FFF3FE";
