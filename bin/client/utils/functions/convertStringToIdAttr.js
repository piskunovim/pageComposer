export default function convertStringToIdAttr ( str ) {
  return str.replace(/\s/g, '-').toLowerCase()
}