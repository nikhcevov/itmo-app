export default function (dom) {
  return Array.from(dom.window.document.querySelectorAll('.groups > a')).map(group => group.textContent)
}
