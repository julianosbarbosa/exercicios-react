import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Menber from './menber'
ReactDOM.render(
   
        <Family lastName='Silva'>
            <Menber name='Guilherme'/>
            <Menber name='Juliano'/>
            <Menber name='Lilia'/>
        </Family>
   
, document.getElementById('app'))