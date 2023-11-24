const formatCurrency = (number: number) =>
    new Intl.NumberFormat("id-ID").format(number);

export default formatCurrency;
