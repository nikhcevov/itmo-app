export default function (dom) {
  const answer = dom.window.document.querySelector('#d_dmessagetext')
  return answer && answer.textContent && answer.textContent.replace(/\n+/g, '')
}
