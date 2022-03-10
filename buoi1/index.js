// //ex1
// {
//     const obj1 = { x: 20, y: 30 };

//     function cloneDeep(obj) {
//         return JSON.parse(JSON.stringify(obj))
//     }
//     const obj2 = cloneDeep(obj1)
//     obj2.x = 10

//     console.log(obj1)
//     console.log(obj2)
// }

// //ex2
// {
//     const macbooks = ['macbook2015', { model: 'macbook2014' }, 'macbook2017'];
//     const apples = [...macbooks];
//     apples[0] = 'air';
//     apples[1].model = 'm1';

//     console.log(macbooks)
//     console.log(apples)
// }

// //ex3
// {
//     var text = 'outside';
//     function show() {
//       console.log(text) //1
//       var text = 'inside';
//     }
//     show()
// }

// //ex4
// {
//     let arr = [1, 2, 3, 4, 5, 6, 7];
//     function inBetween(small, big)
//     {
//         return (value) => {return value >= small && value <= big}
//     }

//     function inArray(arr)
//     {
//         return (value) => {return arr.includes(value)}
//     }
//     alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
//     alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
// }

{
    function Counter() {
        let count = 0;
      
        this.up = function() {
          return ++count;
        };
        this.down = function() {
          return --count;
        };
      }
      
      let counter = new Counter();
      
      alert( counter.up() ); // ?
      alert( counter.up() ); // ?
      alert( counter.down() ); // ?
      
}