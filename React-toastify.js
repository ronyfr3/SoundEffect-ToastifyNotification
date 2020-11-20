    import React from 'react'
    import { Zoom } from 'react-toastify';  // Slide, Zoom, Flip, Bounce
    import { ToastContainer,toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    import './Toastify.css'
    import swiftly from './audio/swiftly-610.mp3'
    import { Howl } from 'howler';
    // https://fkhadra.github.io/react-toastify/introduction/ 

    function ReactsToastify() {
        //sound effect
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
            //....end of sound effect sound


            //react-notify start func
        const notifyImage = ()=>{
            return(
            <div className='doremi'>
                <img src='https://th.bing.com/th/id/OIP.LyLbJl1jeyDp9ueJ_7auZQHaNL?w=182&h=324&c=7&o=5&pid=1.7' alt=''/>
                <h3>Payment</h3>
                <h3>Success</h3>
            </div>
            )}
        const notification = () =>{
            toast.success(notifyImage(),{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Zoom
                });
            }
            //react-notify end func ...
            const combineTwoFunction=()=>{
                soundplay()
                notification()
            }
        return (
            <div>
                <button onClick={combineTwoFunction}>Toastify-Notify</button>
                <ToastContainer />
            </div>
        )
    }
    
    export default ReactsToastify
    