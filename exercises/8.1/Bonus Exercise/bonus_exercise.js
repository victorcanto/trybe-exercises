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
  return damageValue;
};

const warriorDamage = () => {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const damageValue = getRandomInt(
    warrior.strength,
    warrior.strength * warrior.weaponDmg
  );
  return damageValue;
};

const mageDamage = () => {
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const damageValue = getRandomInt(mage.intelligence, mage.intelligence * 2);

  const mageStatus = { damage: damageValue, consumedMana: 15 };

  if (mage.mana < 15) {
    mageStatus.damage = 0;
    mageStatus.consumedMana = 0;
  }
  return mageStatus;
};

const gameActions = {
  warriorTurn: (warriorDamage) => {
    warrior.damage = warriorDamage();
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (mageDamage) => {
    const mageStatus = mageDamage();
    mage.damage = mageStatus.damage;
    mage.mana -= mageStatus.consumedMana;
    dragon.healthPoints -= mage.damage;
  },
  dragonTurn: (dragonDamage) => {
    dragon.damage = dragonDamage();
    warrior.healthPoints -= dragon.damage;
    mage.healthPoints -= dragon.damage;
  },
  battleResult: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.battleResult());
