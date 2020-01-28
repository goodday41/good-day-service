import React from 'react'
import Styles from '../../styles/components/common/Table.module.scss'

export default props => {
  const { rows } = props

  return (
    <div className={Styles.root}>
      <table className={Styles.table}>
        {rows.map(row => (
          <tr key={row.title} className={Styles.row}>
            <th scope="row" className={Styles.cellTitle}>
              {row.title}
            </th>
            <td className={Styles.cellData}>{row.data}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}
