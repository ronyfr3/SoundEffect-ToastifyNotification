import React from 'react'
import swiftly from './audio/swiftly-610.mp3'
import { Howl } from 'howler';


function ToastSound() {
    const soundplay=()=>{
        // Setup the new Howl.
        const sound = new Howl({
            src: [swiftly],
            autoplay: false,
            loop: false,
            volume: 0.3
        });
        // Play the sound.
        sound.play();
        }
    return (
        <div>
           <button onClick={soundplay}>Notify Sound</button>
        </div>
    )
}

export default ToastSound
