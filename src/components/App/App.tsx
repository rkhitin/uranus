import React from 'react'
import styled from '@emotion/styled'

import Routing from './Routing'

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const App: React.FC = () => {
  return (
    <Wrapper>
      <Routing />
    </Wrapper>
  )
}

export default App
