import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/* Generate a rounded-white-box favicon from logo.png at runtime */
function setRoundedFavicon() {
  const SIZE    = 64
  const RADIUS  = 14
  const PADDING = 6

  const canvas = document.createElement('canvas')
  canvas.width  = SIZE
  canvas.height = SIZE
  const ctx = canvas.getContext('2d')

  const img = new Image()
  img.onload = () => {
    /* Draw white rounded-rect background */
    ctx.beginPath()
    ctx.moveTo(RADIUS, 0)
    ctx.lineTo(SIZE - RADIUS, 0)
    ctx.quadraticCurveTo(SIZE, 0, SIZE, RADIUS)
    ctx.lineTo(SIZE, SIZE - RADIUS)
    ctx.quadraticCurveTo(SIZE, SIZE, SIZE - RADIUS, SIZE)
    ctx.lineTo(RADIUS, SIZE)
    ctx.quadraticCurveTo(0, SIZE, 0, SIZE - RADIUS)
    ctx.lineTo(0, RADIUS)
    ctx.quadraticCurveTo(0, 0, RADIUS, 0)
    ctx.closePath()
    ctx.fillStyle = '#ffffff'
    ctx.fill()
    ctx.clip()

    /* Draw logo inside the clipped rounded area */
    ctx.drawImage(img, PADDING, PADDING, SIZE - PADDING * 2, SIZE - PADDING * 2)

    /* Replace the favicon link */
    let link = document.querySelector("link[rel~='icon']")
    if (!link) {
      link = document.createElement('link')
      link.rel = 'icon'
      document.head.appendChild(link)
    }
    link.type = 'image/png'
    link.href = canvas.toDataURL('image/png')
  }
  img.src = '/logo.png'
}

setRoundedFavicon()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
