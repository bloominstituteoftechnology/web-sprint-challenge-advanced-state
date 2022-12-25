import React from 'react'
import { useSelector } from 'react-redux'

export default function Message() {
  const messages = useSelector((state) => state.infoMessage)

  return <div id="message">{messages}</div>
}

