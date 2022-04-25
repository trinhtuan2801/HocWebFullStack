const fetchData = async (url) => {
  let response = await fetch(url)
  return response
}

export default fetchData