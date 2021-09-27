export let APIKey = "AIzaSyBwi91E20zj7Lq2W1hsznTT46KQvspYHmc";
export async function getData(URL = "", data = {}, token) {
  const response = await fetch(URL, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  return response.json();
}
