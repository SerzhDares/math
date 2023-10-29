export default class Character {

    constructor(name, attackValue, stonedState) {
        this.name = name;
        this.attackValue = attackValue;
        this.stonedState = stonedState;
    }

    get attack() {
        return (distance) => {
            let resultAttack = this.attackValue * (1.1 - 0.1*distance);
            if(this.stonedState) {
                resultAttack = resultAttack - Math.log2(distance) * 5;
            }
            return Math.round(resultAttack);
        }
    }

    set attack(resultAttackValue) {
        this.attackValue = resultAttackValue;
    }

    get stoned() {
        return this.stonedState;
    }

    set stoned(state) {
        this.stonedState = state;
    }

}