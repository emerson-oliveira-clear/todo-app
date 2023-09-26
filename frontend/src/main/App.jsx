import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import '../template/Custom.css'

import React from 'react'
import Menu from '../template/Menu'
import Routes from './Routes'

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>

)

/* 
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'
import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'
export default props =>(
    <div className='container'>
        <Menu />
       <Routes></Routes>
    </div>
)
*/