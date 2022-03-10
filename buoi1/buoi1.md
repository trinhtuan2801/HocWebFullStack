## Ex 1
---
```
const obj1 = { x: 20, y: 30 };
function cloneDeep(obj) {
    return JSON.parse(JSON.stringify(obj))
};
const obj2 = cloneDeep(obj1);
obj2.x = 10;

console.log(obj1);
console.log(obj2);
```

## Ex2
---
>*Kết quả:*
```
console.log(macbooks)
['macbook2015', {model: 'm1'}, 'macbook2017']

console.log(apples)
['air', {model: 'm1'}, 'macbook2017']
```
>*Giải thích:*
apples[1] là reference type trỏ đến ô nhớ của macbooks[1] 

## Ex3
---
>*Kết quả:* undefined
>
>*Giải thích:* hoisting
JS chuyển khai báo lên trên cùng của scope -> biến text trong function được khởi tạo với giá trị undefined -> text được in ra 'undefined' -> text được gán giá trị 'inside'

## Ex4
---
```
function inBetween(small, big)
{
    return (value) => {return value >= small && value <=big}
}

function inArray(arr)
{
    return (value) => {return arr.includes(value)}
}
```

## Ex5
---
>*Kết quả*
```
    alert( counter.up() ); // 1
    alert( counter.up() ); // 2
    alert( counter.down() ); // 1
```
>*Giải thích:*

+ let counter = new Counter() -> tạo đối tượng mới với từ khóa this là chính nó -> có thể đối xử như một class
+ this.up hay this.down -> thay đổi chính biến count trong đối tượng

## Ex6
---
>*Kết quả:*
```
hello
hi
world
```
>*Giải thích:*
1.  CallStack.push(console.log("hello")) 
    -> log "hello" 
    -> CallStack.pop(console.log("hello")) 
2.  CallStack.push(setTimeOut(callback)) 
    -> callback timer được gửi đến Web APIs 
    -> CallStack.pop(setTimeOut(callback))
3.  CallStack.push(console.log("hi")) 
    -> log "hi" 
    -> CallStack.pop(console.log("hi"))
4.  timer chạy hết
    -> EventQueue.enqueue(callback)
5.  EventLoop mới, CallStack trống, EventQueue có callback
    -> EventQueue.dequeue(callback)
    -> CallStack.push(callback)
    -> log "world"
    -> CallStack.pop(callback)
