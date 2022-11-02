# Mutations in Js

The main take away is that mutating an object or array means that we are creating new object or array and thus pointing to a new space in memory.
## Objects
```
const profile = { name: 'Byron };
profile.name = 'Bill';
>profile
returns{name: "Bill"}
```

```
profile.age = 30;
profile.name = 'Bill';
>profile
returns>{name: "Bill", age:30}
```
## Arrays

```
arr.pop()
arr.push()
arr.shift()
arr.unshift()
```

## Remember: 
Strings and numbers are immutable values in js

You can't do this:

```
>const name = 'Byron'
>name[0] = "T"
```
Here whilst there would be no errors Byron would remain the string

# Arrays
`arr.pop()`          should be: `arr.filter(element => element !== 'hi')`
`arr.push('hi')`     should be: `[...arr, 'hi']`
`arr[0] = 'hi'`      should be: `arr.map(el => el === 'hi' ? 'bye': el)`
`arr.shift()`        should be: `arr.filter(element => element !== 'hi')`
`arr.unshift('hi')`  should be: `['hi', ...arr]`


# Objects
`obj.name = 'Sam'`   should be: `{...obj, name:'Sam'}`
`obj.age = 30`       should be: `{...obj, age:30}`
`delete obj.name`    should be: `{...state, age: undefined}`