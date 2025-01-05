// Node.js version of app.js.
// To run this js code in the cli itself for dry test run.

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
  
  // Get the shortened URL from command-line arguments
  const shortUrl = process.argv[2]; // The first argument after the script name
  if (!shortUrl) {
    console.error("Please provide a shortened URL as an argument.");
    process.exit(1);
  }
  
  getRedirectedUrl(shortUrl);
