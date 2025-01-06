// JavaScript to process input and generate output
document.getElementById('inputForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from reloading the page

  // Get the input value - SAMPLE https://tinyurl.com/nhbds76x
  const name = document.getElementById('nameInput').value;
  console.log("======== 1 ===========")
  console.log(name)

  // Process input (build output)
  //const greeting = `Hello, ${name}! Welcome to the page.`;
  const greeting = getRedirectedUrl(name);

  // Pass back the output to HTML
  document.getElementById('outputMessage').textContent = greeting;
});


const getRedirectedUrl = async (shortUrl) => {
  try {
    const response = await fetch(shortUrl, { method: "HEAD", redirect: "follow", mode: 'no-cors' });
    console.log("======== 2 ===========")
    console.log("Output Response --->", response)   
    const redirectUrl = response.url
    return redirectUrl
  } catch (error) {
    // console.error("Error:", error.message);
    const errorMsg = "error"
    return errorMsg
  }
};