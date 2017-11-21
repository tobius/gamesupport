'use strict';

/**
 * @todo
 * - add core test
 * - add performance test
 * - add openwebgames minimum support
 * - add WebAssembly support
 * - rewrite all comments to answer (what is this feature and why would I use it?)
 * - add destroy cleanups
 */

/**
 * get game support features
 *
 * @requires window
 * @param {Void}
 * @return {Object}
 */
function getGameSupport(){

	/**
	 * generate private div element
	 * @var {DOMElement}
	 */
    var div = document.createElement('div');

	/**
	 * generate private canvas element
	 * @var {DOMElement}
	 */
    var canvas = document.createElement('canvas');

    /**
     * determine if browser has IndexedDB storage support
	 *
	 * IndexedDB is a low-level API for client-side storage of significant
	 * amounts of structured data, including files/blobs. This API uses indexes
	 * to enable high-performance searches of this data. While Web Storage is
	 * useful for storing smaller amounts of data, it is less useful for
	 * storing larger amounts of structured data.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasIndexedDb(){
        return !!('indexedDB' in window || 'mozIndexedDB' in window || 'webkitIndexedDB' in window || 'msIndexedDB' in window);
    }

    /**
     * determine if browser has serviceWorker support
	 *
	 * The ServiceWorker interface of the ServiceWorker API provides a
	 * reference to a service worker. Multiple browsing contexts (e.g. pages,
	 * workers, etc.) can be associated with the same service worker, each
	 * through a unique ServiceWorker object.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasServiceWorker(){
        return !!(window.navigator.serviceWorker);
    }

    /**
     * determine if browser has Canvas support
	 *
	 * The CanvasRenderingContext2D interface is used for drawing rectangles,
	 * text, images and other objects onto the canvas element. It provides the
	 * 2D rendering context for the drawing surface of a <canvas> element.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasCanvas(){
        //var canvas = document.createElement('canvas');
        return !!(canvas && canvas.getContext && canvas.getContext('2d'));
    }

    /**
     * determine if browser has WebGL1 support
	 *
	 * The WebGLRenderingContext interface provides the OpenGL ES 2.0 rendering
	 * context for the drawing surface of an HTML <canvas> element.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasWebGl(){
        if ('WebGLRenderingContext' in window){
            //var canvas = document.createElement('canvas');
            if (canvas){
                return !!(canvas.getContext('webgl'));
            }
        }
        return false;
    }

    /**
     * determine if browser has WebGL2 support
	 *
	 * The WebGLRenderingContext interface provides the OpenGL ES 2.0 rendering
	 * context for the drawing surface of an HTML <canvas> element.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasWebGl2(){
        if ('WebGL2RenderingContext' in window){
            //var canvas = document.createElement('canvas');
            if (canvas){
                return !!(canvas.getContext('webgl', {version: 2}));
            }
        }
        return false;
    }

    /**
     * determine if browser has Audio support
	 *
	 * The AudioContext interface represents an audio-processing graph built
	 * from audio modules linked together, each represented by an AudioNode. An
	 * audio context controls both the creation of the nodes it contains and
	 * the execution of the audio processing, or decoding.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasAudio(){
        return !!('AudioContext' in window || 'webkitAudioContext' in window);
    }

    /**
     * determine if browser has TCP support
	 *
	 * The WebSocket object provides the API for creating and managing a
	 * WebSocket connection to a server, as well as for sending and receiving
	 * data on the connection.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasTcp(){
        return !!('WebSocket' in window);
    }

    /**
     * determine if browser has UDP support
	 *
	 * The RTCPeerConnection interface represents a WebRTC connection between
	 * the local computer and a remote peer. It provides methods to connect to
	 * a remote peer, maintain and monitor the connection, and close the
	 * connection once it's no longer needed.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasUdp(){
        return !!('RTCPeerConnection' in window || 'mozRTCPeerConnection' in window || 'webkitRTCPeerConnection' in window || 'msRTCPeerConnection' in window);
    }

    /**
     * determine if browser has gamepad support
	 *
	 * The Gamepad interface of the Gamepad API defines an individual gamepad
	 * or other controller, allowing access to information such as button
	 * presses, axis positions, and id.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/Gamepad
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasGamepad(){
        return !!('Gamepad' in window);
    }

    /**
     * determine if browser has touch support
	 *
	 * The Touch interface represents a single contact point on a
	 * touch-sensitive device. The contact point is commonly a finger or stylus
	 * and the device may be a touchscreen or trackpad.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/Touch
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasTouch(){
        return !!('Touch' in window);
    }

    /**
     * determine if browser has pointer support
	 *
	 * The MouseEvent interface represents events that occur due to the user
	 * interacting with a pointing device (such as a mouse). Common events
	 * using this interface include click, dblclick, mouseup, mousedown.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasPointer(){
        return !!('onmousemove' in window);
    }

    /**
     * determine if browser has keyboard support
	 *
	 * KeyboardEvent objects describe a user interaction with the keyboard.
	 * Each event describes a key; the event type (keydown, keypress, or keyup)
	 * identifies what kind of activity was performed.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasKeyboard(){
        return !!('KeyboardEvent' in window);
    }

    /**
     * determine if browser has fullscreen support
	 *
	 * The Fullscreen API provides an easy way for web content to be presented
	 * using the user's entire screen. The API lets you easily direct the
	 * browser to make an element and its children, if any, occupy the
	 * fullscreen, eliminating all browser user interface and other
	 * applications from the screen for the duration.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasFullscreen(){
        return !!(div && div.requestFullscreen || div.msRequestFullscreen || div.mozRequestFullScreen || div.webkitRequestFullscreen);
    }

    /**
     * determine if browser has orientation support
	 *
	 * The Screen.orientation property give the current orientation of the
	 * screen.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasOrientation(){
        return !!('screen' in window && (window.screen.orientation || window.screen.mozOrientation || window.screen.webkitOrientation || window.screen.msOrientation));
    }

    /**
     * determine if browser has vibrate support
	 *
	 * Vibration is described as a pattern of on-off pulses, which may be of
	 * varying lengths. The pattern may consist of either a single integer,
	 * describing the number of milliseconds to vibrate, or an array of
	 * integers describing a pattern of vibrations and pauses. Vibration is
	 * controlled with a single method: Navigator.vibrate().
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasVibrate(){
        return !!(navigator.vibrate);
    }

    /**
     * determine if browser has page visibility support
	 *
	 * The Document.visibilityState read-only property returns the visibility
	 * of the document, that is in which context this element is now visible.
	 * It is useful to know if the document is in the background or an
	 * invisible tab, or only loaded for pre-rendering.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilityState
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasVisibility(){
        return !!('visibilityState' in document || 'hidden' in document);
    }

    /**
     * determine if browser has geolocation support
	 *
	 * The Geolocation interface represents an object able to programmatically
	 * obtain the position of the device. It gives Web content access to the
	 * location of the device. This allows a Web site or app to offer
	 * customized results based on the user's location.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/Geolocation
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasGeoLocation(){
        return !!(navigator.geolocation);
    }

    /**
     * determine how many logical cores the browser has access to
	 *
	 * The NavigatorConcurrentHardware.hardwareConcurrency read-only property
	 * returns the number of logical processors available to run threads on the
	 * user's computer.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency
     *
     * @param {Void}
     * @return {Integer}
     */
    function getLogicalCores(){
        var cores = -1;
        if ('hardwareConcurrency' in navigator){
            cores = navigator.hardwareConcurrency;
        }
        return cores;
    }

    /**
     * determine if browser has performance measurement support
	 *
	 * The Performance interface provides access to performance-related
	 * information for the current page. It's part of the High Resolution Time
	 * API, but is enhanced by the Performance Timeline API, the Navigation
	 * Timing API, the User Timing API, and the Resource Timing API.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/Performance
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasPerformance(){
        return !!('performance' in window && window.performance.now);
    }

	/**
	 * determine if browser has Math.imul() support
	 *
	 * The Math.imul() function returns the result of the C-like 32-bit
	 * multiplication of the two parameters.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul
	 *
	 * @param {Void}
	 * @return {Boolean}
	 */
    function hasMathImul(){
        return !!('imul' in Math);
    }

	/**
	 * determine if browser has Math.fround() support
	 *
	 * The Math.fround() function returns the nearest single precision float
	 * representation of a number.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround
	 *
	 * @param {Void}
	 * @return {Boolean}
	 */
    function hasMathFround(){
        return !!('fround' in Math);
    }

	/**
	 * determine if browser as Array Buffer support
	 *
	 * The ArrayBuffer object is used to represent a generic, fixed-length raw
	 * binary data buffer. You cannot directly manipulate the contents of an
	 * ArrayBuffer; instead, you create one of the typed array objects or a
	 * DataView object which represents the buffer in a specific format, and
	 * use that to read and write the contents of the buffer.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
	 *
	 * @param {Void}
	 * @return {Boolean}
	 */
    function hasArrayBufferTransfer(){
        return !!('ArrayBuffer' in window && 'transfer' in ArrayBuffer);
    }

	/**
	 * determine if browser has Pointer Lock support
	 *
	 * Pointer lock lets you access mouse events even when the cursor goes past
	 * the boundary of the browser or screen.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/Pointer_Lock_API
	 *
	 * @param {Void}
	 * @return {Boolean}
	 */
    function hasPointerLock(){
        return !!(div.requestPointerLock || div.mozRequestPointerLock || div.webkitRequestPointerLock || div.msRequestPointerLock);
    }

	/**
	 * determine if browser has Blob support
	 *
	 * A Blob object represents a file-like object of immutable, raw data.
	 * Blobs represent data that isn't necessarily in a JavaScript-native
	 * format. The File interface is based on Blob, inheriting blob
	 * functionality and expanding it to support files on the user's system.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/Blob
	 *
	 * @param {Void}
	 * @return {Boolean}
	 */
    function hasBlob(){
        try {
            var blob = new Blob();
            return !!(blob);
        } catch(e){
        }
        return false;
    }

	/**
	 * determine if browser has Shared Array Buffer support
	 *
	 * The SharedArrayBuffer object is used to represent a generic,
	 * fixed-length raw binary data buffer, similar to the ArrayBuffer object,
	 * but in a way that they can be used to create views on shared memory.
	 * Unlike an ArrayBuffer, a SharedArrayBuffer cannot become detached.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer
	 *
	 * @param {Void}
	 * @return {Boolean}
	 */
    function hasSharedArrayBuffer(){
        return !!('SharedArrayBuffer' in window);
    }

	/**
	 * determine if browser has Web Workers support
	 *
	 * Web Workers makes it possible to run a script operation in background
	 * thread separate from the main execution thread of a web application. The
	 * advantage of this is that laborious processing can be performed in a
	 * separate thread, allowing the main (usually the UI) thread to run
	 * without being blocked/slowed down.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API
	 *
	 * @param {Void}
	 * @return {Boolean}
	 */
    function hasWebWorkers(){
        return !!('Worker' in window);
    }

	/**
	 * determine if browser has RequestAnimationFrame support
	 *
	 * The window.requestAnimationFrame() method tells the browser that you
	 * wish to perform an animation and requests that the browser call a
	 * specified function to update an animation before the next repaint. The
	 * method takes a callback as an argument to be invoked before the repaint.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
	 *
	 * @param {Void}
	 * @return {Boolean}
	 */
    function hasRequestAnimationFrame(){
        return !!('requestAnimationFrame' in window);
    }

	/**
	 * game support results
	 * @var {Object}
	 */
	var gameSupport = {

        // storage
		indexeddb: hasIndexedDb(),
		serviceworker: hasServiceWorker(),

        // graphics
		canvas: hasCanvas(),
		webgl: hasWebGl(),
		webgl2: hasWebGl2(),

        // audio
		audio: hasAudio(),

        // networking
		tcp: hasTcp(),
		udp: hasUdp(),

        // device input
		gamepad: hasGamepad(),
		touch: hasTouch(),
		pointer: hasPointer(),
		keyboard: hasKeyboard(),

        // quality of experience
		fullscreen: hasFullscreen(),
		orientation: hasOrientation(),
		vibrate: hasVibrate(),
		visibility: hasVisibility(),
		geolocation: hasGeoLocation(),

        // performance capabilities
		cores: getLogicalCores(),
		performance: hasPerformance(),
		imul: hasMathImul(),
		fround: hasMathFround(),
		arraybuffertransfer: hasArrayBufferTransfer(),
		pointerlock: hasPointerLock(),
		blob: hasBlob(),
		sharedarraybuffer: hasSharedArrayBuffer(),
		worker: hasWebWorkers(),
		requestanimationframe: hasRequestAnimationFrame(),
    };

	/**
	 * determine if browser has support for a particular feature key
	 *
	 * @param {String} key
	 * @return {Boolean}
	 */
	function has(key){
		return gameSupport[key];
	}

	// add convenience aliases
	gameSupport.has = has;

	// ready for use
	return gameSupport;
}

navigator.gameSupport = getGameSupport();

