import { formatter, calculateInvestmentResults } from "../util/investment.js";

function TableResult({ input }) {
  const data = calculateInvestmentResults(input);
  const initialInvestment =
    data[0].valueEndOfYear - data[0].interest - data[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invesment Value</th>
          <th>Invesment (year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((dataItem) => {
          const totalInterested =
            dataItem.valueEndOfYear -
            dataItem.annualInvestment * dataItem.year -
            initialInvestment;

          const totalAmountInvestment =
            dataItem.valueEndOfYear - totalInterested;
          return (
            <tr key={dataItem.year}>
              <td>{dataItem.year}</td>
              <td>{formatter.format(dataItem.valueEndOfYear)}</td>
              <td>{formatter.format(dataItem.interest)}</td>
              <td>{formatter.format(totalInterested)}</td>
              <td>{formatter.format(totalAmountInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableResult;
