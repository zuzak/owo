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
  ' ( ´•̥̥̥ω•̥̥̥` )',
  ' ( ˘ ³˘)♥',
  ' ( ͡° ᴥ ͡°)',
  ' (^³^)',
  ' (´・ω・｀)',
  ' (ʘᗩʘ\')',
  ' (இωஇ )',
  ' (๑•́ ₃ •̀๑)',
  ' (• o •)',
  ' (•́︿•̀)',
  ' (⁎˃ᆺ˂)',
  ' (╯﹏╰）',
  ' (●´ω｀●)',
  ' (◠‿◠✿)',
  ' (✿ ♡‿♡)',
  ' (❁´◡`❁)',
  ' (　\'◟ \')',
  ' (人◕ω◕)',
  ' (；ω；)',
  ' (｀へ´)',
  ' ._.',
  ' :3',
  ' :3c',
  ' :D',
  ' :O',
  ' :P',
  ' ;-;',
  ' ;3',
  ' ;_;',
  ' <{^v^}>',
  ' >_<',
  ' >_>',
  ' UwU',
  ' XDDD',
  ' \\°○°/',
  ' ^-^',
  ' ^_^',
  ' ^•ﻌ•^',
  ' x3',
  ' x3',
  ' xD',
  ' ÙωÙ',
  ' ʕʘ‿ʘʔ',
  ' ʕ•ᴥ•ʔ',
  ' ミ(．．)ミ',
  ' ㅇㅅㅇ',
  ', fwendo',
  '（＾ｖ＾）',
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
  ' says': ' sez',
  'you': 'uu',
  'the ': 'da ',
  'The ': 'Da ',
  'THE ': 'DA ',
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
