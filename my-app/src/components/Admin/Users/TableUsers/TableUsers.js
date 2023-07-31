import React from 'react'
import {Table, Button, Icon, Tab, TableBody} from 'semantic-ui-react'
import { map } from 'lodash';
import './TableUsers.scss'

export  function TableUsers(props) {
    const {users} = props
  return (
    <Table className='table-users-admin'>
        <Table.Header>
            <Table.HeaderCell>
                Username
            </Table.HeaderCell>

            <Table.HeaderCell>
                Email
            </Table.HeaderCell>

            <Table.HeaderCell>
                Nombre
            </Table.HeaderCell>

            <Table.HeaderCell>
                Apellido
            </Table.HeaderCell>

            <Table.HeaderCell>
                Activo
            </Table.HeaderCell>

            <Table.HeaderCell>
                Staff
            </Table.HeaderCell>

            <Table.HeaderCell>
                
            </Table.HeaderCell>
        </Table.Header>

        <TableBody>
            {map(users, (user, index) => (
                <Table.Row key={index}>
                    <Table.Cell>
                        {user.username}
                    </Table.Cell>

                    <Table.Cell>
                        {user.email}
                    </Table.Cell>

                    <Table.Cell>
                        {user.first_name}
                    </Table.Cell>

                    <Table.Cell>
                        {user.last_name}
                    </Table.Cell>

                    <Table.Cell className='status'>
                        {user.is_active ? <Icon name='check'></Icon> : <Icon name='close'></Icon>}
                    </Table.Cell>

                    <Table.Cell className='status'>
                        {user.is_staff ? <Icon name='check'></Icon> : <Icon name='close'></Icon>}
                    </Table.Cell>

                    <Table.Cell>
                        <Actions user={user}></Actions>
                    </Table.Cell>
                </Table.Row>
            ))}
        </TableBody>
    </Table>
  )
}


function Actions(props){
    const {user} = props
return(
    <Table.Cell textAlign='right'>
        <Button icon onClick={() => console.log(`Editar Usuario ${user.email}`)}>
            <Icon name='pencil'></Icon>
        </Button>

        <Button icon negative onClick={ () => console.log(`Eliminar ${user.email}`)}>
            <Icon name='close'></Icon>
        </Button>
    </Table.Cell>
)
}