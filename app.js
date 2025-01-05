// JavaScript to process input and generate output
document.getElementById('inputForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from reloading the page

  // Get the input value
  const name = document.getElementById('nameInput').value;

  // Process input (build output)
  //const greeting = `Hello, ${name}! Welcome to the page.`;
  const greeting = getRedirectedUrl(name);

  // Pass back the output to HTML
  document.getElementById('outputMessage').textContent = greeting;
});


const getRedirectedUrl = async (shortUrl) => {
  try {
    const response = await fetch(shortUrl, { method: "HEAD", redirect: "follow" });
    console.log("Input url = " + shortUrl)
    console.log("It Redirects you to URL = ", response.url);
    console.log("=======================================================")
    console.log("=======================================================")
    //console.log("Response Data:", response);
  } catch (error) {
    console.error("Error:", error.message);
  }
};