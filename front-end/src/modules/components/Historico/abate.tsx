import CardGlobalComponent from "../GlobalComponents/cardGlobalComponent/CardGlobal"
import TableGlobalComponent from "../GlobalComponents/TableGlobalComponent/TableGlobal"

export default function HistoricoAbate() {
  return (
    <CardGlobalComponent>
      <TableGlobalComponent>
        <div>
          <h1>Historico</h1>
          <thead>
            <tr>
              <th>Total Abate</th>
              <th>Data</th>
              <th>Meta Dia</th>
              <th>Meta Esperada</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>00,00</td>
              <td>00/00/00</td>
              <td>0,00</td>
              <td>0,00</td>
            </tr>
            <tr>
              <td>00,00</td>
              <td>00/00/00</td>
              <td>0,00</td>
              <td>0,00</td>
            </tr>
            <tr>
              <td>00,00</td>
              <td>00/00/00</td>
              <td>0,00</td>
              <td>0,00</td>
            </tr>
            <tr>
              <td>00,00</td>
              <td>00/00/00</td>
              <td>0,00</td>
              <td>0,00</td>
            </tr>
            <tr>
              <td>00,00</td>
              <td>00/00/00</td>
              <td>0,00</td>
              <td>0,00</td>
            </tr>
            <tr>
              <td>00,00</td>
              <td>00/00/00</td>
              <td>0,00</td>
              <td>0,00</td>
            </tr>
          </tbody>
        </div>
      </TableGlobalComponent>
    </CardGlobalComponent>
  )
}
