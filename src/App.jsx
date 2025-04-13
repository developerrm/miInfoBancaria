"use client";

import { useState } from "react";
import BankCard from "./Componentes/bank-card";
import CopyPopup from "./Componentes/copy-popup";
import "./styles.css";

export default function BankAccounts() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedData, setSelectedData] = useState({
    accountNumber: "",
    idNumber: "",
  });

  // User information
  const userData = {
    name: "Juan Pérez",
    idNumber: "123456789",
  };

  // Bank accounts data
  const bankAccounts = [
    {
      bank: "Banco Nacional",
      accountNumber: "1234-5678-9012-3456",
    },
    {
      bank: "Banco Popular",
      accountNumber: "9876-5432-1098-7654",
    },
    {
      bank: "Banco de Costa Rica",
      accountNumber: "5678-1234-5678-9012",
    },
  ];

  const handleCardClick = (accountNumber) => {
    setSelectedData({
      accountNumber,
      idNumber: userData.idNumber,
    });
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bank-accounts-container">
      <h1>Información de Pago</h1>

      <div className="user-info">
        <h2>Nombre: {userData.name}</h2>
        <h3>Cédula: {userData.idNumber}</h3>
      </div>

      <div className="cards-container">
        {bankAccounts.map((account, index) => (
          <BankCard
            key={index}
            bank={account.bank}
            accountNumber={account.accountNumber}
            onClick={() => handleCardClick(account.accountNumber)}
          />
        ))}
      </div>

      {showPopup && (
        <CopyPopup
          accountNumber={selectedData.accountNumber}
          idNumber={selectedData.idNumber}
          onClose={closePopup}
        />
      )}
    </div>
  );
}
