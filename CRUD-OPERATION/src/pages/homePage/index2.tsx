const HomePage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-[#F9F5F2] border-r border-gray-300 p-4">
        <div className="text-center mb-8">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h3 className="mt-2 font-bold">Karthi Madesh</h3>
          <p className="text-sm text-orange-500">Admin</p>
        </div>
        <nav className="space-y-4">
          <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-orange-500">
            <span className="material-icons">home</span>
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-orange-500">
            <span className="material-icons">menu_book</span>
            <span>Course</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-orange-500">
            <span className="material-icons">school</span>
            <span>Students</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-orange-500">
            <span className="material-icons">payment</span>
            <span>Payment</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-orange-500">
            <span className="material-icons">bar_chart</span>
            <span>Report</span>
          </a>
          <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-orange-500">
            <span className="material-icons">settings</span>
            <span>Settings</span>
          </a>
        </nav>
        <div className="mt-auto">
          <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-orange-500">
            <span className="material-icons">logout</span>
            <span>Logout</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold">Students List</h1>
          <button className="bg-yellow-400 text-white py-2 px-4 rounded hover:bg-yellow-500">
            ADD NEW STUDENT
          </button>
        </div>

        {/* Table */}
        <div className="bg-white shadow-md rounded">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border-b text-left text-sm font-semibold text-gray-600">Name</th>
                <th className="p-3 border-b text-left text-sm font-semibold text-gray-600">Email</th>
                <th className="p-3 border-b text-left text-sm font-semibold text-gray-600">Phone</th>
                <th className="p-3 border-b text-left text-sm font-semibold text-gray-600">
                  Enroll Number
                </th>
                <th className="p-3 border-b text-left text-sm font-semibold text-gray-600">
                  Date of Admission
                </th>
                <th className="p-3 border-b text-center text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {Array(8)
                .fill(null)
                .map((_, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-3 border-b">
                      <div className="flex items-center space-x-2">
                        <img
                          src="https://via.placeholder.com/40"
                          alt="Profile"
                          className="w-8 h-8 rounded-full"
                        />
                        <span>Karthi</span>
                      </div>
                    </td>
                    <td className="p-3 border-b">karthi@gmmail.com</td>
                    <td className="p-3 border-b">7305477760</td>
                    <td className="p-3 border-b">1234567305477760</td>
                    <td className="p-3 border-b">08-Dec, 2021</td>
                    <td className="p-3 border-b text-center">
                      <button className="text-yellow-500 hover:text-yellow-600">
                        <span className="material-icons">edit</span>
                      </button>
                      <button className="text-red-500 hover:text-red-600 ml-2">
                        <span className="material-icons">delete</span>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
