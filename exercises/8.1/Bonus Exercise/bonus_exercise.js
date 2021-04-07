const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  // ref: http://devfuria.com.br/javascript/gerar-numero-randomico-entre-2-numeros-quaisquer/ para a funcao getRandomInt
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const damageValue = getRandomInt(15, dragon.strength);
  dragon.damage = damageValue;
  return damageValue;
};

dragonDamage();

const warriorDamage = () => {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const damageValue = getRandomInt(
    warrior.strength,
    warrior.strength * warrior.weaponDmg
  );
  warrior.damage = damageValue;
  return damageValue;
};

warriorDamage();
