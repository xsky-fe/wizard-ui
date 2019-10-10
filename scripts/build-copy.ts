import fs from 'fs-extra';

const filterFunc = (src: string, dest:string):boolean => {
  if (src.includes('.tsx') || src.includes('.scss')) {
    return false
  }
  return true
}
fs.copy('src/components', 'esm/components', { filter: filterFunc }, (err: Error) => {
  if (err) return console.error(err)
  console.log('Copy to ems success!')
})

fs.copy('src/components', 'lib/components', { filter: filterFunc }, (err: Error) => {
  if (err) return console.error(err)
  console.log('Copy to lib success!')
})

