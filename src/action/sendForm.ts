export default async function sendForm(formData: FormData) {
  const FORM_ENDPOINT =
    "https://public.herotofu.com/v1/602f7b20-4252-11ee-b711-0fdc810d0d65";
  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  // Handle response if necessary
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Form response was not ok");
  } else {
    return data;
  }
}
