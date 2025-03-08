//css loader
export function loadCSS(filename) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    
    if (filename.includes("/")) {
      link.href = filename;
    } else {
      link.href = `styles/${filename}.module.css`;
    }
    document.head.appendChild(link);
  }