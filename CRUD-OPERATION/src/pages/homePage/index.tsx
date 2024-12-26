import Button from "../../components/Button"
import Header from "../../components/Header"
import Sidebar from "../../components/SideBar"
import TableComponent from "../../components/Table"
const HomePage = () => {
  const valueSelect = [
    {
      value: 'Name',
    },
    {
      value: 'Email',
    },
    {
      value: 'Phone',
    },
    {
      value: 'Date of admission',
    },
    {
      value: 'Actions',
    },
  ]

  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>

      <div className="flex-1">
        <div className="flex justify-end">
          <Header />
        </div>

        <div className="bg-gray-white mt-5 px-10">
          <div className="flex justify-between pt-5">
            <h1 className="text-black font-medium">
              Student List
            </h1>

            <Button className="border-0 bg-yellow-dark text-white font-normal px-10 text-xl" text="Add new Student" />
          </div>
          <hr className="my-5" />

          <TableComponent />
        </div>
      </div>
    </div>
  )
}

export default HomePage