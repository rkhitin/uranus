import React from 'react'
import { Router, Route } from 'react-router-dom'

import Map from 'components/Map'
import Welcome from 'components/Welcome'
import PersonalDataForm from 'components/PersonalDataForm'
import Prophecy from 'components/Prophecy'

import RouterPaths from '../../router-paths'
import history from '../../history'

const Routing: React.FC = () => (
  <Router history={history}>
    <React.Fragment>
      <Route exact path={RouterPaths.base} component={Welcome} />
      <Route path={RouterPaths.personalDataFrom} component={PersonalDataForm} />
      <Route path={RouterPaths.map} component={Map} />
      <Route path={RouterPaths.prophecy} component={Prophecy} />
    </React.Fragment>
  </Router>
)

export default Routing
