'use strict';

/****************************************************

    @TODO:
    + add core test
    + add performance test
    + add openwebgames minimum support

****************************************************/

/**
 * get game support features
 *
 * @param {Void}
 * @return {Object}
 */
function getGameSupport(){

    // locals
    var div = document.createElement('div');
    var canvas = document.createElement('canvas');

    //=========================================================//
    //  STORAGE SUPPORT                                        //
    //=========================================================//

    /**
     * determine if current browser has IndexedDB storage support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasIndexedDb(){
        return !!('indexedDB' in window || 'mozIndexedDB' in window || 'webkitIndexedDB' in window || 'msIndexedDB' in window);
    }

    /**
     * determine if current browser has serviceWorker support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasServiceWorker(){
        return !!(navigator.serviceWorker);
    }

    //=========================================================//
    //  GRAPHICS SUPPORT                                       //
    //=========================================================//

    /**
     * determine if current browser has Canvas support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasCanvas(){
        var canvas = document.createElement('canvas');
        return !!(canvas && canvas.getContext && canvas.getContext('2d'));
    }

    /**
     * determine if current browser has WebGL1 support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasWebGl(){
        if ('WebGLRenderingContext' in window){
            var canvas = document.createElement('canvas');
            if (canvas){
                return !!(canvas.getContext('webgl'));
            }
        }
        return false;
    }

    /**
     * determine if current browser has WebGL2 support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasWebGl2(){
        if ('WebGL2RenderingContext' in window){
            var canvas = document.createElement('canvas');
            if (canvas){
                return !!(canvas.getContext('webgl', {version: 2}));
            }
        }
        return false;
    }

    //=========================================================//
    //  AUDIO SUPPORT                                          //
    //=========================================================//

    /**
     * determine if current browser has Audio support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasAudio(){
        return !!('AudioContext' in window || 'webkitAudioContext' in window);
    }

    //=========================================================//
    //  NETWORKING SUPPORT                                     //
    //=========================================================//

    /**
     * determine if current browser has TCP support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasTcp(){
        return !!('WebSocket' in window);
    }

    /**
     * determine if current browser has UDP support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasUdp(){
        return !!('RTCPeerConnection' in window || 'mozRTCPeerConnection' in window || 'webkitRTCPeerConnection' in window || 'msRTCPeerConnection' in window);
    }

    //=========================================================//
    //  DEVICE INPUT SUPPORT                                   //
    //=========================================================//

    /**
     * determine if current browser has gamepad support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasGamepad(){
        return !!('Gamepad' in window);
    }

    /**
     * determine if current browser has touch support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasTouch(){
        return !!('Touch' in window);
    }

    /**
     * determine if current browser has pointer support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasPointer(){
        return !!('onmousemove' in window);
    }

    /**
     * determine if current browser has keyboard support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasKeyboard(){
        return !!(KeyboardEvent);
    }

    //=========================================================//
    //  QUALITY OF EXPERIENCE SUPPORT                          //
    //=========================================================//

    /**
     * determine if current browser has fullscreen support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasFullscreen(){
        return !!(div && div.requestFullscreen || div.msRequestFullscreen || div.mozRequestFullScreen || div.webkitRequestFullscreen);
    }

    /**
     * determine if current browser has orientation support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasOrientation(){
        return !!('screen' in window && (window.screen.orientation || window.screen.mozOrientation || window.screen.webkitOrientation || window.screen.msOrientation));
    }

    /**
     * determine if current browser has battery support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasBattery(){
        return !!(navigator.battery || navigator.mozBattery || navigator.webkitBattery);
    }

    /**
     * determine if current browser has vibrate support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasVibrate(){
        return !!(navigator.vibrate);
    }

    /**
     * determine if current browser has page visibility support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasVisibility(){
        return !!('visibilityState' in document || 'hidden' in document);
    }

    /**
     * determine if current browser has geolocation support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasGeoLocation(){
        return !!(navigator.geolocation);
    }

    //=========================================================//
    //  PERFORMANCE CAPABILITIES                               //
    //=========================================================//

    /**
     * determine how many logical cores the current browser has access to
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
     * determine if current browser has performance measurement support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasPerformance(){
        return !!('performance' in window && performance.now);
    }

    /**
     * determine if current browser has SIMD support
     *
     * @param {Void}
     * @return {Boolean}
     */
    function hasSimd(){
        return !!('SIMD' in window);
    }

    function hasMathImul(){
        return !!('imul' in Math);
    }

    function hasMathFround(){
        return !!('fround' in Math);
    }

    function hasArrayBufferTransfer(){
        return !!('ArrayBuffer' in window && 'transfer' in ArrayBuffer);
    }

    function hasPointerLock(){
        return !!(div.requestPointerLock || div.mozRequestPointerLock || div.webkitRequestPointerLock || div.msRequestPointerLock);
    }

    function hasBlobConstructor(){
        try {
            var blob = new Blob();
            return !!(blob);
        } catch(e){
        }
        return false;
    }

    function hasBlobBuilder(){
        return !!(!hasBlobConstructor() && ('BlobBuilder' in window || 'MozBlobBuilder' in window || 'WebKitBlobBuilder' in window));
    }

    function hasSharedArrayBuffer(){
        return !!('SharedArrayBuffer' in window);
    }

    function hasWebWorkers(){
        return !!('Worker' in window);
    }

    function hasRequestAnimationFrame(){
        return !!('requestAnimationFrame' in window);
    }

    //=========================================================//
    //  RETURN FEATURE RESULTS                                 //
    //=========================================================//

    return {

        // storage
        storage: {
            indexeddb     : hasIndexedDb(),
            serviceworker : hasServiceWorker()
        },

        // graphics
        graphics: {
            canvas : hasCanvas(),
            webgl  : hasWebGl(),
            webgl2 : hasWebGl2()
        },

        // audio
        audio: {
            audio : hasAudio()
        },

        // networking
        networking: {
            tcp : hasTcp(),
            udp : hasUdp()
        },

        // device input
        input: {
            gamepad  : hasGamepad(),
            touch    : hasTouch(),
            pointer  : hasPointer(),
            keyboard : hasKeyboard()
        },

        // quality of experience
        experience: {
            fullscreen  : hasFullscreen(),
            orientation : hasOrientation(),
            battery     : hasBattery(),
            vibrate     : hasVibrate(),
            visibility  : hasVisibility(),
            geolocation : hasGeoLocation()
        },

        // performance capabilities
        performance: {
            cores                 : getLogicalCores(),
            performance           : hasPerformance(),
            simd                  : hasSimd(),
            imul                  : hasMathImul(),
            fround                : hasMathFround(),
            arraybuffertransfer   : hasArrayBufferTransfer(),
            pointerlock           : hasPointerLock(),
            blobconstructor       : hasBlobConstructor(),
            blobbuilder           : hasBlobBuilder(),
            sharedarraybuffer     : hasSharedArrayBuffer(),
            worker                : hasWebWorkers(),
            requestanimationframe : hasRequestAnimationFrame()
        }

    };

}

navigator.gameSupport = getGameSupport();

