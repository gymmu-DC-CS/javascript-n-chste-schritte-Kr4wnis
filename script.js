

export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement != "e"){
    if (currentElement != "E")
    result.push(currentElement)
    }
}
  return result.join("")
}

// export function aufgabe02(args) {
//   const input = args
//   const result = []

//   for (let i = 0; i < input.length; i++) {
//     const currentElement = input[i]
//     if (currentElement === "a") {
//       result.push("A")
//     }else {
//     result.push(currentElement)
//     }
// }
//   return result.join("")
// }

export function aufgabe02(args) {
  return args.toUpperCase()
}

export function aufgabe03(args) {
  const input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e"){
      result = result + 1
    }
    if (currentElement === "E"){
      result = result + 1
    }
}
  return result
}

export function aufgabe04(args) {
  const input = args
  let result = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " " && input[i-1] != "-"){
      result++
    }
    
}
  return result + 1
}


export function aufgabe05(args) {
  const input = args
  if (input.toLowerCase() === input) {
    return false
  } else {
    return true
  }
}

// Ufgob 6

export function aufgabe06(args) {
  const input = args
  if (input === "") {
    return false
  }
  for ( let i =0; i < input.lenght; i++) {
    const currentElement = input [i].toLowerCase()
    if (currentElement.charCodeAt() < 97 || currentElement.charCodeAt() > 122) {
      if (currentElement.charCodeAt() != 32) {
        return true
      }
    }
  }

  return false
}