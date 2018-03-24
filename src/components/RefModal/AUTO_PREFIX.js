let lastID = 0

export default function (prefix = 'ID') {
  lastID += 1
  return `${prefix}${lastID}`
}
