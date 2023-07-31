import React, {useEffect} from 'react'
import {Loader} from 'semantic-ui-react'
import {HeaderPages, TableUsers} from '../../components/Admin'
import {useUser} from '../../hooks'


export  function UsersAdmin() {
  const {loading, users, getUsers} = useUser()

  useEffect(() => {
    getUsers()
  }, [])
  
  return (
    <>
      <HeaderPages title="Usuarios" btnTitle='Nuevo Usuario'></HeaderPages>
      {loading ? (
        <Loader active inline='center'>
          Cargando...
        </Loader>
      ) : (
        <TableUsers users={users}></TableUsers>
      )}
    </>
  )
}
