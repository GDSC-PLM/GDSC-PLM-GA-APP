import React, { useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const preloader = document.getElementById("pre-loader");

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 1500);
  }
  return !loading && <div>Hello World</div>;
}

export default App;
