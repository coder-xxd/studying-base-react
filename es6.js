const courses = [
    {
        name: 'JavaScript',
        coin: 680,
        isFinite: true,
    },
    {
        name: 'PHP',
        coin: 980,
        isFinite: true,
    },
    {
        name: 'Ruby',
        coin: 860,
        isFinite: false,
    }
]

Array.prototype.every2 = function(callback) {
    var output = true;

    for (var index in this) {
        if (this.hasOwnProperty(index)) {
        var result = callback(this[index], index, this);

        if (!result) {
                output = false;
                break;
            }
        }
    }

    return output;
}

// var result = courses.every2(function(course,index, array) {
//     return course.coin > 500 && course.isFinite;
// })

// console.log(result)


// var array = ['JavaScript', 'PHP', 'Ruby'];

// var [a, b, ...newArray] = array;

// console.log(a);
// console.log(newArray)


var course = {
    name: 'JavaScript',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'ReactJS'
    }
}

var { name: parentName, children: { name: childrenName}, ... rest} = course;

console.log(parentName);
console.log(rest);


// addEventListener('name event', callback)
var root = document.getElementById('root');
const courses = [
    {
        name: 'HTML, CSS'
    },
    {
        name: 'Responsive'
    },
    {
        name: 'ReactJS'
    }
];









