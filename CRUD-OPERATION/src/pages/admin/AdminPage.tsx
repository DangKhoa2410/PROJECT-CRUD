import Button from "../../components/Button"
import Header from "../../components/Header"
import Sidebar from "../../components/SideBar"
import TableComponent from "../../components/Table"
import AddEditForm from "../../components/AddEditForm"
import { useState, useEffect, useCallback } from 'react'
import { urlListUsers } from "../../script/constants/url"
import { getData, deleteData } from "../../script/services/authApi"
import { ListUserRow } from "../../interfaces/listUsers"
import { postData } from "../../script/services/dataApi"
import { useNavigate } from 'react-router-dom';
const AdminPage = () => {
  const navigate = useNavigate()
  const [listData, setListData] = useState<ListUserRow[]>([]);
  const [hide, setHide] = useState(false);
  const [modalTitle, setModalTitle] = useState("Box Add");
  const [nameUser, setNameUser] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const columns = async () => {
      const data = await getData(urlListUsers)

      setListData(data)
    }
    columns()
  }, [])

  const handleForm = useCallback(() => {
    setModalTitle("Box Add");
    setHide(true);
  }, []);

  const handleSubmit = async (e?:any) => {
    e.preventDefault()
    const list: ListUserRow = {
      nameUser,
      email,
      phone,
      date
    }

    const data = await postData(urlListUsers, list)
    console.log('Check Data: ', data)
    listData.push(list)
    setHide(false);
  }

  const handleEdit = useCallback(() => {
    setModalTitle("Box Edit");
    setHide(true);
    setIsEditing(true);
  }, []);

  const handleEditSubmit = (e?: any) => {
    e.preventDefault();
    setHide(false);
  }

  const onHideForm = useCallback(() => {
    setHide(false)
  }, []);

  const handleRemoveSubmit = async (list: ListUserRow, index: number) => {
    await deleteData(list.id || '')
    setListData(prevLists => prevLists.filter(t => t.id !== list.id))
    console.log(index)
  }

  const logOutBtn = () => {
    navigate('/')
  }
  const dataList = { nameUser, email, phone, date }
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>

      <div className="flex-1">
        <div className="flex justify-end">
          <Header isShow onClickLogout={logOutBtn}/>
        </div>

        <div className="bg-gray-white mt-5 px-10">
          <div className="flex justify-between pt-5">
            <h1 className="text-black font-medium">
              Admin asboard
            </h1>

            <Button onClick={handleForm} className="border-0 bg-yellow-dark text-white font-normal px-10 text-xl" text="Add new Student" />
          </div>
          <hr className="my-5" />

          <TableComponent onClickRemove={handleRemoveSubmit} rows={listData} onEdit={handleEdit} />

        </div>
        {
          hide && (
            <div>
              <AddEditForm editList={handleEditSubmit} isEditing={isEditing} onChangeUserName={(e) => setNameUser(e.target.value)} onChangeEmailUser={(e) => setEmail(e.target.value)} onChangePhoneUser={(e) => setPhone(e.target.value)} onChangeDate={(e) => setDate(e.target.value)} list={dataList} addUser={handleSubmit} title={modalTitle} onHideModal={onHideForm} />
            </div>
          )
        }
      </div>
    </div>
  )
};

export default AdminPage;
