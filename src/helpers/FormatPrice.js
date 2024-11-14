import React from "react";

function FormatPrice({ price }) {
  const formattedPrice = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  }).format(price / 100);

  return formattedPrice;
}

export default FormatPrice;
