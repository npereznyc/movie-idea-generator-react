import movieBoss from '../assets/movieboss.png'
import button from '../assets/send-btn-icon.png'
import '../styles/SetupContainer.css'
import React, { useState } from 'react'
import loadingImage from '../assets/loading.svg'

function SetupContainer() {
    const [userInput, setUserInput] = useState('')
    const [movieBossText, setMovieBossText] = useState('')
    const [loading, setLoading] = useState(false)

    const handleButtonClick = () => {
        if (userInput) {
            setLoading(true)
            setMovieBossText('Ok, just wait a second while my digital brain digests that...')
            // fetchBotReply(userInput)
            // fetchSynopsis(userInput)
        }
    }
    const handleInputChange = (event) => {
        setUserInput(event.target.value)
    }

    return (
        <section id="setup-container">
            <div class="setup-inner">
                <img src={movieBoss} />
                <div class="speech-bubble-ai" id="speech-bubble-ai">
                    <p id="movie-boss-text">
                        Give me a one-sentence concept and I'll give you an eye-catching title, a synopsis the studios will love, a movie poster...
                        AND choose the cast!
                    </p>
                </div>
            </div>
            <div class="setup-inner setup-input-container" id="setup-input-container">
                <textarea id="setup-textarea" placeholder="An evil genius wants to take over the world using AI." onChange={handleInputChange}></textarea>
                <button class="send-btn" id="send-btn" aria-label="send" onClick={handleButtonClick}>
                    <img src={button} alt="send" />
                </button>
                <div id="setupInputContainer">{loading && <img src={loadingImage} className="loading" id="loading" />}</div>
                <p>{movieBossText}</p>
            </div>
        </section>
    )
}

export default SetupContainer;