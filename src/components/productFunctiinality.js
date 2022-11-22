export const ajaxCart = async (url, data) => {
  try {
    let res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'x-store-access-key': 'f0090d45803c0cf58b7bff7761a9465d'
      },
      body: JSON.stringify(data)
    })
    res = await res.json();
    return res;
  } catch (e) {
    console.log(e);
  }
}