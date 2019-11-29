zoomreset = () => {
    viewport = document.querySelector("meta[name='viewport']");
    viewport.content = "width=device-width, maximum-scale=15.0";  
}

setTimeout(zoomreset, 10);