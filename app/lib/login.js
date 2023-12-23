const data = [];

export default function getSession() {
  let id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  while (data.map(d => d.id).includes(id)) {
    id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  }
  data.push({ id });
  return id;
}
