import moveiBoss from '../assets/movieboss.png'
import button from '../assets/send-btn-icon.png'
function SetupContainer() {
    return (
        <section id="setup-container">
            <div class="setup-inner">
                <img src={moveiBoss}/>
                    <div class="speech-bubble-ai" id="speech-bubble-ai">
                        <p id="movie-boss-text">
                            Give me a one-sentence concept and I'll give you an eye-catching title, a synopsis the studios will love, a movie poster...
                            AND choose the cast!
                        </p>
                    </div>
            </div>
            <div class="setup-inner setup-input-container" id="setup-input-container">
                <textarea id="setup-textarea" placeholder="An evil genius wants to take over the world using AI."></textarea>
                <button class="send-btn" id="send-btn" aria-label="send">
                    <img src={button} alt="send"/>
                </button>
            </div>
        </section>
    )
}

export default SetupContainer;