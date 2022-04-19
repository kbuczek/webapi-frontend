const auth = "fd9ba9e1-0788-4e8f-ac46-a43df43e205e";

const myFetch = async (
  url: string,
  method: string = "POST",
  body: object = {}
) => {
  const response = await fetch(url, {
    method: method,
    // cors: "no-cors;",
    headers: { "Content-Type": "application/json", Authorization: auth },
    body: JSON.stringify(body),
  });

  if (response.status !== 200) {
    throw new Error("cannot fetch data");
  }

  const data = await response.json();
  return data;
};

export default myFetch;
