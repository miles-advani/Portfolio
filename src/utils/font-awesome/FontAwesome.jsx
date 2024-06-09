import { useEffect } from "react";

function FontAwesome() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://kit.fontawesome.com/${import.meta.env.VITE_REACT_APP_FONTAWESOME_KEY}.js`;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component doesn't render anything
}

export default FontAwesome;
