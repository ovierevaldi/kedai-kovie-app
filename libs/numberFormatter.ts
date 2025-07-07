function formatPrice(value: number){
  if(value >= 1000000)
    return (value / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';

  if(value >= 1000)
    return (value / 1000).toFixed(1).replace(/\.0$/, '') + 'K';

  return value.toString();
};

function formatPriceForBill(value: number){
  return 'Rp. ' + value.toLocaleString('id-ID', {
    minimumFractionDigits: 2
  })
};

function formatAmount(amount: number){
  return amount.toString()+'x'
}

export { formatAmount, formatPrice, formatPriceForBill };

