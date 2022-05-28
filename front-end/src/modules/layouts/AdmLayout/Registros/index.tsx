import TableGlobalComponent from "../../../components/GlobalComponents/TableGlobalComponent/TableGlobal"

export default function RegistroComponent() {
  return (
    <TableGlobalComponent>
      <div>
        <h1>Registros</h1>
        <h1></h1>
        <thead>
          <tr>
            <th>Nome</th>
            <th>DataCadas</th>
            <th>Unidade</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>00,00</td>
            <td>00/00/00</td>
            <td>0,00</td>
            <td>0,00</td>
          </tr>
        </tbody>
      </div>

      <div>
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
        </tbody>
      </div>
    </TableGlobalComponent>
  )
}
