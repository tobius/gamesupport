
# navigator.gameSupport

A very lightweight JavaScript feature detection library for web game developers

```
[~] console.log(navigator.gameSupport);

{
    "storage": {
        "indexeddb": true,
        "serviceworker": true
    },
    "graphics": {
        "canvas": true,
        "webgl": true,
        "webgl2": true
    },
    "audio": {
        "audio": true
    },
    "networking": {
        "tcp": true,
        "udp": true
    },
    "input": {
        "gamepad": true,
        "touch": false,
        "pointer": true,
        "keyboard": true
    },
    "experience": {
        "fullscreen": true,
        "orientation": true,
        "battery": true,
        "vibrate": true,
        "visibility": true,
        "geolocation": true
    },
    "performance": {
        "cores": -1,
        "performance": true,
        "simd": true,
        "imul": true,
        "fround": true,
        "arraybuffertransfer": false,
        "pointerlock": true,
        "blobconstructor": true,
        "blobbuilder": false,
        "sharedarraybuffer": true,
        "worker": true,
        "requestanimationframe": true
    }
}
```

## LICENSE

MIT

