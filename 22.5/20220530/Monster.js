class Monser{
    constructor(name){
        this.name = name;
        this.atk= 10;
        this.def = 10;
        this.spd = 20;
    }
    attack(){
        console.log(this.name+"의 공격력은  : "+this.atk)
    }
    defense(){
        console.log(this.name+"의 방어력은  : "+this.def )
     }
    speed(){
        console.log(this.name+"의 이동속도는  : "+this.spd)
    }
}
let a = new Monser("괴물~!")

class Boss extends Monser {
    constructor(name){
        super(name)
        this.atk= this.atk * 3;
        this.def = 50;
        this.spd = 100;
    }
}
let b = new Boss ("보스킹왕짱~!")


class Mobs extends Monser {
    constructor(name){
        super(name)
        this.atk= 5;
        this.def = 2;
        this.spd = 10;
    }
}
let c = new Mobs ("잡몹들~!");

console.log(a)
a.attack()
a.defense()
a.speed()
console.log(b)
b.attack()
b.defense()
b.speed()
console.log(c)
c.attack()
c.defense()
c.speed()
