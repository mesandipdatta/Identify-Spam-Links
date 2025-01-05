const getRedirectedUrl = async (shortUrl) => {
    try {
      const response = await fetch(shortUrl, { method: "HEAD", redirect: "follow" });
      console.log("Redirected URL:", response.url);
      console.log("=======================================================")
      console.log("=======================================================")
      console.log("Redirected URL:", response);
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
