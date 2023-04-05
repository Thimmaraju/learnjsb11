

let x = "      raju        "

y = x.toLowerCase()

z=x.trim()
console.log(x)
console.log(z)

str2 = Number("60")

console.log(typeof(str2))


st3 = Number("120")

st4 = Number("60")

st5 = st3+st4

st6 = String(st5)

console.log(st6)

console.log(typeof(st6))


str7 = "This is javascript class"

console.log(str7.length)

console.log(str7[8])

console.log(str7.charAt(8))

arrnew = str7.split(" ")

console.log(arrnew)

str8 = str7.substring(5,7)

console.log(str8)
console.log(str7.charAt(0))

console.log(str7.slice(-5))


// const b = new String('hello'); // typeof - object 

// b= "hello" // typeof - string 

if(str7.includes("raju")){

    console.log("Partial matching string is available")
}