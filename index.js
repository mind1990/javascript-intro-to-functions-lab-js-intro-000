function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
  console.log(string.toLowerCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  switch(string) {
    case string.toLowerCase():
    return "I can't hear you!"
    case string.toUpperCase():
    return "YES INDEED!"
    default:
    return "I love you, too."
  }
}
