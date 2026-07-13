Object.defineProperty(window, "API_GET_DATA", {
    configurable: false,
    writable: false,
    enumerable: true,
    value: (location.href.includes("index") ? location.href.split("index")[0] : location.href.includes("#") ? location.href.split("#")[0] : location.href) + "jsondata/spatialworks.json",
});