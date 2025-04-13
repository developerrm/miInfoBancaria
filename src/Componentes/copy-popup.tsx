"use client"

import { useState } from "react"

interface CopyPopupProps {
  accountNumber: string
  idNumber: string
  onClose: () => void
}

export default function CopyPopup({ accountNumber, idNumber, onClose }: CopyPopupProps) {
  const [copyMessage, setCopyMessage] = useState("")

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopyMessage(`¡${type} copiado al portapapeles!`)

      // Reset message after 2 seconds
      setTimeout(() => {
        setCopyMessage("")
      }, 2000)
    } catch (err) {
      setCopyMessage("Error al copiar")
    }
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h3>Copiar información</h3>

        <div className="copy-options">
          <button className="copy-button" onClick={() => copyToClipboard(accountNumber, "Número de cuenta")}>
            Copiar número de cuenta
          </button>

          <button className="copy-button" onClick={() => copyToClipboard(idNumber, "Número de cédula")}>
            Copiar número de cédula
          </button>
        </div>

        {copyMessage && <div className="copy-message">{copyMessage}</div>}
      </div>
    </div>
  )
}
