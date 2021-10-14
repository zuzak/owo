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
  ' ( ˘ ³˘)♥',
  ' ( ͡° ᴥ ͡°)',
  ' (´・ω・｀)',
  ' (ʘᗩʘ\')',
  ' (இωஇ )',
  ' (๑•́ ₃ •̀๑)',
  ' (• o •)',
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
  ' :D',
  ' :P',
  ' ;-;',
  ' ;3',
  ' ;_;',
  ' :O',
  ' <{^v^}>',
  ' >_<',
  ' >_>',
  ' UwU',
  ' XDDD',
  ' \\°○°/',
  ' ^-^',
  ' ^_^',
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
  'THE ': 'THE ',
}

const addAffixes = (str) => randomItem(prefixes) + str + randomItem(suffixes)
const substitute = (str) => {
  const replacements = Object.keys(substitutions)
  replacements.forEach((x) => {
    str = replaceString(str, x, substitutions[x])
  })
  return str
}
const owo = (str) => addAffixes(substitute(str))

module.exports = {
  addAffixes,
  substitute,
  owo
}
