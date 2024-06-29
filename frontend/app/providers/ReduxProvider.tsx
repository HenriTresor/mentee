'use client'
import GlobalStyle from '@/globalStyle'
import store from '@/store'
import React from 'react'
import { Provider } from 'react-redux'

type Props = {

  children: React.ReactNode
}

function ReduxProvider({children}: Props) {
  return (
    <Provider store={store}>
      {children}
      <GlobalStyle />
    </Provider>
  )
}

export default ReduxProvider 