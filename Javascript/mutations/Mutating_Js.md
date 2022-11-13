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

### Remember: 
Strings and numbers are immutable values in js

You can't do this:

```
>const name = 'Byron'
>name[0] = "T"
```
Here whilst there would be no errors Byron would remain the string (you wouldn't get 'Tyron')  

# Arrays
`arr.pop()`          should be: `arr.filter(element => element !== 'hi')` you can also use: `arr.slice()`.  
`arr.push('hi')`     should be: `[...arr, 'hi']`.  
`arr[0] = 'hi'`      should be: `arr.map(el => el === 'hi' ? 'bye': el)`.  
`arr.shift()`        should be: `arr.filter(element => element !== 'hi')`.  
`arr.unshift('hi')`  should be: `['hi', ...arr]`.  

## Updating Arrays Imumtably with setState()

```
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

  const [list, setList] = useState(
    initialList
  );

  function handleToggle(artworkId, nextSeen) {
    setList(list.map(artwork => {
      if (artwork.id === artworkId) {
        return { ...artwork, seen: nextSeen };
      } else {
        return artwork;
      }
    }));
  }
```

# Objects
`obj.name = 'Sam'`   should be: `{...obj, name:'Sam'}`<br>
`obj.age = 30`       should be: `{...obj, age:30}`<br>
`delete obj.name`    should be: `{...state, age: undefined}`<br>

## Updating Objects Imumtably with setState()
```
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }
```