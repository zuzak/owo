const randomItem = require('random-item')
const replaceString = require('replace-string')

const prefixes = [
  '<3 ',
  '0w0 ',
  'H-hewwo?? ',
  'HIIII! ',
  'Haiiii! ',
  'Huohhhh. ',
  'OWO ',
  'OwO ',
  'UwU '
]

const suffixes = [
  ' :3',
  ' (●´ω｀●)',
  ' UwU',
  ' (✿ ♡‿♡)',
  ' ÙωÙ',
  ' ʕʘ‿ʘʔ',
  ' ʕ•̫͡•ʔ',
  ' >_>',
  ' ^_^',
  '..',
  ' Huoh.',
  ' ^-^',
  ' ;_;',
  ' ;-;',
  ' xD',
  ' x3',
  ' :D',
  ' :P',
  ' ;3',
  ' XDDD',
  ', fwendo',
  ' ㅇㅅㅇ',
  ' (人◕ω◕)',
  '（＾ｖ＾）',
  ' x3',
  ' ._.',
  ' (　\'◟ \')',
  ' (• o •)',
  ' (；ω；)',
  ' (◠‿◠✿)',
  ' >_<'
]

const substitutions = {
  'r': 'w',
  'l': 'w',
  'R': 'W',
  'L': 'W',
//  'ow': 'OwO',
  'no': 'nu',
  'has': 'haz',
  'have': 'haz',
  'you': 'uu',
  'the ': 'da ',
  'The ': 'Da '
}

const badWords = [ // words we should avoid replacing
  'wog',
  'wogs',
]

const addAffixes = (str) => randomItem(prefixes) + str + randomItem(suffixes)
const filterBadWords = (str, orig) => {
  if (!orig) throw new Error('Missing original string to filter back to')
  badWords.forEach((word) => {
    const regex = new RegExp(`\\b${word}\\b`, 'i')
    const match = regex.exec(str)
    if (match) {
      const originalWord = orig.substr(match.index, word.length)
      const DELIMITER = ''
      const splitStr = str.split(DELIMITER)
      splitStr.splice(match.index, originalWord.length, originalWord)
      str = splitStr.join(DELIMITER)
    }
  })
  return str
}
const substitute = (str) => {
  const replacements = Object.keys(substitutions)
  replacements.forEach((x) => {
    str = replaceString(str, x, substitutions[x])
  })
  return str
}
const owo = (str) => addAffixes(filterBadWords(substitute(str), str))

module.exports = {
  addAffixes,
  substitute,
  filterBadWords,
  owo
}
