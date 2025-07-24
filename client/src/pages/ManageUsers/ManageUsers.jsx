
import './ManageUsers.css'
import UsersForm from '../../components/UsersForm/UsersForm'
import UsersList from '../../components/UsersList/UsersList'
export default function ManageUsers() {
  return (
     <div className="users-container text-light">
            <div className="left-column">
                <UsersForm />
            </div>
            <div className="right-column">
                <UsersList/>
            </div>
        </div>
  )
}
