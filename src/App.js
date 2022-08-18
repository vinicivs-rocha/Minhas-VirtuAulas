import React, { useState } from 'react'
import Head from './components/head/Head'
import Statistics from './components/statistics/Statistics'
import Feedbacks from './components/feedbacks/Feedbacks'
import Content from './components/content/Content'
import './App.css'

const App = () => {
    return (
        <>
            <Head />
            <Statistics />
            <Feedbacks />
            <Content />
        </>
    )
}

export default App

