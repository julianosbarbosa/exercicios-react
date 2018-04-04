import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'


ReactDOM.render(
    <Family lastName='Barbosa'>
        <Member name='Juliano' />
        <Member name='Adelma' />
        <Member name='Mauro' />
    </Family>

, document.getElementById('app'))