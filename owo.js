const randomItem = require('random-item')
const replaceString = require('replace-string')

const prefixes = [
  '<3 ',
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
  ' UwU',
  ' ʕʘ‿ʘʔ',
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
  ' Sigh.',
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
  'the ': 'da '
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
