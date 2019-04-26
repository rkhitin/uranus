import React from 'react'
import { Link } from 'react-router-dom'

import RouterPaths from '../../router-paths'

const Welcome = () => (
  <div>
    Welcome
    <Link to={RouterPaths.personalDataFrom}>next</Link>
  </div>
)

export default Welcome
