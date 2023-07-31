import React, {useEffect, useState} from 'react'
import {Loader} from 'semantic-ui-react'
import {HeaderPages, TableUsers} from '../../components/Admin'
import { BasicModal } from '../../components/Common';
import {useUser} from '../../hooks'


export  function UsersAdmin() {
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState(null)
  const [contentModal, setContentModal] = useState(null)
  const {loading, users, getUsers} = useUser()

  useEffect(() => {
    getUsers()
  }, [])

  const openCloseModal = () => setShowModal((prev) => !prev)
  
  return (
    <>
      <HeaderPages title="Usuarios" btnTitle='Nuevo Usuario' btnClick={openCloseModal}></HeaderPages>
      {loading ? (
        <Loader active inline='center'>
          Cargando...
        </Loader>
      ) : (
        <TableUsers users={users}></TableUsers>
      )}
      <BasicModal show={showModal} onClose={openCloseModal} title='Crear Usuario' children={<h2>Content...</h2>}></BasicModal>
    </>
  )
}
