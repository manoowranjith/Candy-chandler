var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];
var chocolates_add_pink = [
    "pink","pink","pink","pink","pink","green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];
var chocolates_remove = [
    "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];
var chocolates_dispense = [
    "red", "silver", "purple", "silver", "crimson"
];
var chocolates_dispenseColor=[
    'green',   'green',   'green',   'silver',  'blue',    'crimson',
    'purple',  'red',     'crimson', 'purple',  'purple',  'green',
    'pink',    'blue',    'red',     'silver',  'crimson', 'purple',
    'silver',  'silver',  'red',     'green',   'red',     'silver',
    'pink',    'crimson', 'purple',  'green',   'red',     'silver',
    'crimson', 'pink',    'silver',  'blue',    'pink',    'crimson',
    'crimson', 'crimson', 'red',     'purple',  'purple',  'green',
    'blue',    'red',     'crimson', 'silver',  'purple',  'purple',
    'purple',  'red',     'purple',  'red',     'blue',    'silver',
    'green',   'crimson', 'silver',  'blue',    'crimson', 'purple',
    'green',   'green',   'red',     'silver',  'crimson', 'blue',
    'green',   'red',     'red',     'blue',    'silver',  'crimson',
    'purple',  'green',   'red',     'blue',    'red',     'purple',
    'silver',  'blue',    'silver',  'crimson', 'silver',  'blue',
    'purple',  'purple',  'green',   'blue',    'blue',    'red',
    'red',     'silver',  'purple',  'silver',  'crimson'
  ]
  var chocolates_num= [13, 17, 13, 15, 17, 16,  9]
  var chocolates_sort=['silver', 'silver', 'silver', 'silver', 'silver', 'silver', 'silver', 'silver', 'silver', 'silver', 'silver', 'silver', 'silver', 'silver', 'silver', 'silver', 'silver', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'purple', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'red', 'crimson', 'crimson', 'crimson', 'crimson', 'crimson', 'crimson', 'crimson', 'crimson', 'crimson', 'crimson', 'crimson', 'crimson', 'crimson', 'crimson', 'crimson', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'pink', 'pink', 'pink', 'pink', 'pink', 'pink', 'pink', 'pink', 'pink']
  var chocolates_change = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "red", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "red", "crimson", "purple", "green", "red", "silver",
    "crimson", "red", "silver", "blue", "red", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "red", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];
var chocolates_change_count=['pink', 'pink', 'pink', 'silver', 'blue', 'crimson', 'purple', 'red', 'crimson', 'purple', 'purple', 'pink', 'pink', 'blue', 'red', 'silver', 'crimson', 'purple', 'silver', 'silver', 'red', 'pink', 'red', 'silver', 'pink', 'crimson', 'purple', 'pink', 'red', 'silver', 'crimson', 'pink', 'silver', 'blue', 'pink', 'crimson', 'crimson', 'crimson', 'red', 'purple', 'purple', 'pink', 'pink', 'blue', 'red', 'crimson', 'silver', 'purple', 'purple', 'purple', 'red', 'purple', 'red', 'blue', 'silver', 'pink', 'crimson', 'silver', 'blue', 'crimson', 'purple', 'pink', 'pink', 'pink', 'red', 'silver', 'crimson', 'blue', 'pink', 'red', 'red', 'pink', 'blue', 'silver', 'pink', 'crimson', 'purple', 'pink', 'red', 'blue', 'red', 'purple', 'silver', 'blue', 'pink', 'silver', 'crimson', 'silver', 'blue', 'purple', 'purple', 'pink', 'blue', 'blue', 'red', 'red', 'silver', 'purple', 'silver', 'crimson',13]
describe('1: MORE! MORE! MORE! ',()=>{
    it('addChocolates()',()=>{

        expect(typeof addChocolates).toBe('function');
        expect(addChocolates(chocolates.slice(),'pink',5)).toEqual(chocolates_add_pink)
    })
  
})

describe('2: LESS! LESS! LESS!  ',()=>{
    it('removeChocolates()',()=>{

        expect(typeof removeChocolates).toBe('function');
        expect(removeChocolates(chocolates.slice(),5)).toEqual(chocolates_remove)
    })
})

describe('3: One is not enough!   ',()=>{
    it('dispenseChocolates()',()=>{

        expect(typeof dispenseChocolates).toBe('function');
        expect(dispenseChocolates(chocolates.slice(),5)).toEqual(chocolates_dispense)
    })
})

describe('4: My favourite color is   ',()=>{
    it('dispenseChocolatesOfColor()',()=>{

        expect(typeof dispenseChocolatesOfColor).toBe('function');
        expect(dispenseChocolatesOfColor(chocolates.slice(),5,'pink')).toEqual(chocolates_dispenseColor)
    })
})

describe('5: LED my chocos!    ',()=>{
    it('noOfChocolates()',()=>{

        expect(typeof noOfChocolates).toBe('function');
        expect(noOfChocolates(chocolates.slice())).toEqual(chocolates_num)
    })
})

describe('6: Lets stack em up!     ',()=>{
    it('sortChocolateBasedOnCount()',()=>{

        expect(typeof sortChocolateBasedOnCount).toBe('function');
        expect(sortChocolateBasedOnCount(chocolates.slice())).toEqual(chocolates_sort)
    })
})

describe('7: They taste the same!      ',()=>{
    it('changeChocolateColor()',()=>{

        expect(typeof changeChocolateColor).toBe('function');
        expect(changeChocolateColor(chocolates.slice(),5,'pink','red')).toEqual(chocolates_change)
    })
})

describe('8: Convert these heretics!       ',()=>{
    it('changeChocolateColorAllOfxCount()',()=>{

        expect(typeof changeChocolateColorAllOfxCount).toBe('function');
        expect(changeChocolateColorAllOfxCount(chocolates.slice(),'green','pink')).toEqual(chocolates_change_count)
    })
})