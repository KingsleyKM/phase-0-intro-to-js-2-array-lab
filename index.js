// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
// cats.push('Ralph')
// const destructivelyAppendCat =[...cats,'Ralph']
// function destructivelyAppendCat(name){
//     cats.push(destructivelyAppendCat)
// }
// destructivelyAppendCat('Ralph');
const  destructivelyAppendCat = () => {
    cats.push('Ralph')
}
const destructivelyPrependCat = () => {
    cats.unshift('Bob')
}
const destructivelyRemoveFirstCat = () => {
    cats.shift()
} 
const destructivelyRemoveLastCat = () => {
    cats.pop()
}
const appendCat = () => {
    return [...cats,"Broom"]
}
const prependCat = () => {
    return ["Arnold",...cats]
}
const removeLastCat = () => {
    return cats.slice(0,2)
}
const removeFirstCat = () => {
    return cats.slice(1)
}
