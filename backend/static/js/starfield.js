const canvas=document.getElementById("starfield");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const stars=[];
const STAR_COUNT= 200;

class Star{
    constructor(){
        this.x=Math.random()*canvas.width;
        this.y=Math.random()*canvas.height;
        this.radius=Math.random()*3;
        this.speed=Math.random()*0.5+0.2;
        this.alpha=Math.random();
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        ctx.fillStyle=`rgba(255,255,255,${(this.alpha)})`;
        ctx.shadowBlur= 5;
        ctx.shadowColor="white";
        ctx.fill();
    }
    update(){
        this.y-=this.speed;
        if(this.y<1) this.y=canvas.height;
        this.draw();
    }
}

for (let i=0; i<STAR_COUNT; i++){
    stars.push(new Star());
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    stars.forEach(star => star.update());
    requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize",()=>{
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
})