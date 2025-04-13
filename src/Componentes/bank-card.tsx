"use client"

interface BankCardProps {
  bank: string
  accountNumber: string
  onClick: () => void
}

export default function BankCard({ bank, accountNumber, onClick }: BankCardProps) {
  return (
    <div className="bank-card" onClick={onClick}>
      <div className="bank-name">{bank}</div>
      <div className="account-number">
        <span className="label">Número de cuenta:</span>
        <span className="value">{accountNumber}</span>
      </div>
      <div className="card-footer">
        <span className="click-info">Clic para copiar</span>
      </div>
    </div>
  )
}
