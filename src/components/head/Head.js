import React, { useState } from 'react'
import './Head.css'

const Head = () => {
    const [showPromoVideo, setShowPromoVideo] = useState(false)
    return (
        <section className='head-section'>
            <header>
                <img
                    srcSet='./assets/images/mock-logo.png 50w,
                                ./assets/images/mock-logo-100px.png 100w'
                    sizes='(max-width: 767px) 50px,
                               (min-width: 768px) 100px'
                    src='./assets/images/mock-logo.png'
                    alt='Logo das Minhas VirtuAulas'
                />
            </header>
            <div className='head-description'>
                <div className='text-content'>
                    <h1 className='course-name'>
                        Aulas de Inglês e Espanhol online
                    </h1>
                    <p className='course-slogan'>
                        Vá do zero até sua primeira conversa como um falante
                        fluente
                    </p>
                    <button onClick={() => setShowPromoVideo(true)}>
                        <img
                            src='./assets/images/head-section-button-play-icon.svg'
                            alt='Ícone de reprodução'
                        />
                        <span>Assista o vídeo</span>
                    </button>
                </div>
                <img
                    src='./assets/images/teacher-photo-mock.svg'
                    alt='Foto do professor'
                />
            </div>
            {showPromoVideo ? (
                <div className='video-container'>
                    <iframe
                        width='560'
                        height='315'
                        src='https://www.youtube.com/embed/YEaSxhcns7Y'
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                    <button onClick={() => setShowPromoVideo(false)}>
                        <img
                            src='./assets/images/cross-icon.png'
                            alt='Ícone de fechamento'
                        />
                    </button>
                </div>
            ) : (
                <></>
            )}
        </section>
    )
}

export default Head
