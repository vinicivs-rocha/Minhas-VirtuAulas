import React from 'react'
import './Feedbacks.css'

const Feedbacks = () => {
    return (
        <section className='costumer-feedbacks'>
            <div className='header'>
                <img src='./assets/images/slash.svg' alt='Barra de separação' />
                <h2>Inscreva-se no curso que está mudando a vida dos alunos</h2>
            </div>
            <div className='feedbacks'>
                <div className='feedback-card'>
                    <header>
                        <img
                            src='./assets/images/joao-photo.svg'
                            alt='Foto do João'
                        />
                        <img
                            src='./assets/images/quote.svg'
                            alt='Ícone de aspas'
                        />
                    </header>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Asperiores porro cumque possimus, quam doloremque
                        rem nam excepturi. Harum delectus, tempore voluptatum
                        iusto rem qui! Odit facere ducimus rerum eos quae!
                    </p>
                    <span>João da Silva</span>
                </div>
                <div className='feedback-card'>
                    <header>
                        <img
                            src='./assets/images/maria-photo.svg'
                            alt='Foto da Maria'
                        />
                        <img
                            src='./assets/images/quote.svg'
                            alt='Ícone de aspas'
                        />
                    </header>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Asperiores porro cumque possimus, quam doloremque
                        rem nam excepturi. Harum delectus, tempore voluptatum
                        iusto rem qui! Odit facere ducimus rerum eos quae!
                    </p>
                    <span>Maria Bezerra</span>
                </div>
                <div className='feedback-card'>
                    <header>
                        <img
                            src='./assets/images/davi-photo.svg'
                            alt='Foto do Davi'
                        />
                        <img
                            src='./assets/images/quote.svg'
                            alt='Ícone de aspas'
                        />
                    </header>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Asperiores porro cumque possimus, quam doloremque
                        rem nam excepturi. Harum delectus, tempore voluptatum
                        iusto rem qui! Odit facere ducimus rerum eos quae!
                    </p>
                    <span>Davi Torres</span>
                </div>
                <div className='feedback-card'>
                    <header>
                        <img
                            src='./assets/images/ana-photo.svg'
                            alt='Foto da Ana'
                        />
                        <img
                            src='./assets/images/quote.svg'
                            alt='Ícone de aspas'
                        />
                    </header>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Asperiores porro cumque possimus, quam doloremque
                        rem nam excepturi. Harum delectus, tempore voluptatum
                        iusto rem qui! Odit facere ducimus rerum eos quae!
                    </p>
                    <span>Ana Vasconcelos</span>
                </div>
            </div>
            <a href=''>
                <button>Inscreva-se agora mesmo</button>
            </a>
        </section>
    )
}

export default Feedbacks
