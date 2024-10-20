import getDbConnection from '@/lib/db'
import React from 'react'

const Dashboard = async () => {

    const sql = await getDbConnection();

    const response = await sql `SELECT version()`;
  return (
    <div>Dashboard {response[0].version}</div>
  )
}

export default Dashboard