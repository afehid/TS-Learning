const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};


//Type Alias
type Drink = [string, boolean, number];
// we make annotations here to avoid missing with order
const cola: [string, boolean, number] = ['brown', true, 40];
const Sprite: Drink = ['brown', true, 40];
