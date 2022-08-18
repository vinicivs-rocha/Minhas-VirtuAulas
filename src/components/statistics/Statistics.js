import React from 'react'
import './Statistics.css'

const Statistics = () => {
    return (
        <section className='good-statistics'>
            <h3>Tudo o que você precisa para se tornar fluente</h3>
            <div className='statistic-cards'>
                <div className='card'>
                    <img src='./assets/images/plus.png' alt='Sinal de mais' />
                    <div className='number-container'>
                        <h2>200</h2>
                        <p>Alunos</p>
                    </div>
                </div>
                <div className='card'>
                    <img src='./assets/images/plus.png' alt='Sinal de mais' />
                    <div className='number-container'>
                        <h2>50</h2>
                        <p>Aulas</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='number-container'>
                        <h2>4</h2>
                        <p>Competências</p>
                    </div>
                </div>
            </div>
            <a href='https://google.com' target='_blank' rel='noreferrer'>
                <button>Inscreva-se agora mesmo</button>
            </a>
        </section>
    )
}

export default Statistics
