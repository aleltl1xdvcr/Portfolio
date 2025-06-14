
import { manageStore } from "./get-store";
import { query } from "./query";

export function getResults(type, page, lang) {
  if (type === 'ssr') {
    const q = ''
    const p = 0
    return query(q, p)
      .then(res => {
        return res
      })
      .catch(error => console.error(error))
  }
  if (type === 'client') {
    const qx = manageStore('get', 'state_query_search')
    const q = !qx || typeof qx !== 'string' ? '' : qx
    const p = !page || typeof page !== 'number' ? 0 : page
    return query(q, p, lang)
      .then((res) => {
        return res
      })
      .catch(error => console.error(error))
  }
}