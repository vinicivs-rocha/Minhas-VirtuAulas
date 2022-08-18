import React from 'react'
import './Content.css'

const Content = () => {
    return (
        <section className='course-content'>
            <h2>O que você vai aprender?</h2>
            <div className='content-grid'>
                <div className='grid-item'>
                    <img
                        src='./assets/images/listening-icon.svg'
                        alt='Ícone de listening'
                    />
                    <div className='item-description'>
                        <h3>Listening</h3>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Id neque alias accusamus deleniti praesentium
                            sunt eos a numquam quibusdam magnam, quam similique
                            sit dicta asperiores eaque, assumenda reiciendis
                            corporis quis?
                        </p>
                    </div>
                </div>
                <div className='grid-item'>
                    <img
                        src='./assets/images/writing-icon.svg'
                        alt='Ícone de writing'
                    />
                    <div className='item-description'>
                        <h3>Writing</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Necessitatibus voluptatum sapiente placeat
                            consectetur aspernatur vel qui aut, est possimus
                            ipsum facilis itaque officiis fugit ipsa id quae,
                            officia, neque iure!
                        </p>
                    </div>
                </div>
                <div className='grid-item'>
                    <img
                        src='./assets/images/reading-icon.svg'
                        alt='Ícone de reading'
                    />
                    <div className='item-description'>
                        <h3>Reading</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Assumenda non voluptatem in nam veritatis
                            reprehenderit, facilis deserunt. Perspiciatis
                            debitis minus hic voluptatum sunt at ipsa, cumque
                            laboriosam?
                        </p>
                    </div>
                </div>
                <div className='grid-item'>
                    <img
                        src='./assets/images/speaking-icon.svg'
                        alt='Ícone de speaking'
                    />
                    <div className='item-description'>
                        <h3>Speaking</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quidem qui perferendis beatae iusto. Soluta
                            consectetur error, at eveniet assumenda non atque
                            modi? Hic eos totam ipsum sit. Nam, commodi dolore!
                        </p>
                    </div>
                </div>
            </div>
            <a href='https://google.com' target='_blank' rel='noreferrer'>
                <button>Inscreva-se agora mesmo</button>
            </a>
        </section>
    )
}

export default Content
