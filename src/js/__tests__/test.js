import Magician from '../Magician';
import Daemon from '../Daemon';


test('Атака мага на 2 клетки без дурмана', () => {
  const magician = new Magician('Magic');
  magician.attack = 50;
  magician.stoned = false;
  const resultAttack = magician.attack(2);
  expect(resultAttack).toBe(45);
})

test('Атака демона на 4 клетки с дурманом', () => {
  const darkDaemon = new Daemon('Dark');
  darkDaemon.attack = 50;
  darkDaemon.stoned = true;
  const resultAttack = darkDaemon.attack(4);
  expect(resultAttack).toBe(25);
})

