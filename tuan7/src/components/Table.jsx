import React, { useState, useEffect } from 'react';
import {EditModal} from './EditModal';
import {AddModal} from './AddModal';

const statusColor = {
  'New': 'text-blue-500 bg-blue-100',
  'In-progress': 'text-yellow-600 bg-yellow-100',
  'Completed': 'text-green-600 bg-green-100'
};

const Table = () => {
  const [infoData, setInfoData] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/table")
      .then((response) => response.json())
      .then((data) => setInfoData(data))
      .catch((error) => console.error("Lỗi khi tải dữ liệu:", error));
  }, []);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleSave = () => {
    fetch(`http://localhost:4000/table/${selectedUser.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedUser),
    })
      .then((response) => response.json())
      .then((updatedUser) => {
        const updatedData = infoData.map((item) =>
          item.id === updatedUser.id ? updatedUser : item
        );
        setInfoData(updatedData);
        setIsEditModalOpen(false);
      })
      .catch((error) => console.error("Lỗi khi cập nhật dữ liệu:", error));
  };

  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  const handleUserAdded = (newUser) => {
    setInfoData([...infoData, newUser]);
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-4 p-3">
        <img src="File text 1.png" alt="overview icon" className="w-5 h-5" />
        <h5 className="text-lg font-semibold">Detailed Report</h5>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-3 py-1 text-pink-600 border border-pink-500 rounded-lg">
            <img src="Download.png" alt="Import icon" />
            <span>Import</span>
          </button>
          <button className="flex items-center gap-1 px-3 py-1 text-pink-600 border border-pink-500 rounded-lg">
            <img src="Move up.png" alt="Export icon" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div>
        <table className="min-w-full text-l p-2">
          <thead>
            <tr className="text-left text-gray-600 bg-gray-100 border-b">
              <th className="py-2 pl-4">
                <input type="checkbox" />
              </th>
              <th className="py-2">CUSTOMER NAME</th>
              <th className="py-2">COMPANY</th>
              <th className="py-2">ORDER VALUE</th>
              <th className="py-2">ORDER DATE</th>
              <th className="py-2">STATUS</th>
              <th className="py-2"></th>
            </tr>
          </thead>
          <tbody>
            {infoData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="pl-4">
                  <input type="checkbox" />
                </td>
                <td className="flex items-center gap-2 py-2">
                  <img src={row.avatar} alt="" className="w-8 h-8 rounded-full" />
                  <span className='font-bold'>{row.name}</span>
                </td>
                <td>{row.company}</td>
                <td>{row.value}</td>
                <td>{row.date}</td>
                <td>
                  <span className={`px-3 py-2 rounded-full text-sm font-medium ${statusColor[row.status]}`}>
                    {row.status}
                  </span>
                </td>
                <td>
                  <button onClick={() => handleEditClick(row)}>
                    <img src="create.png" alt="Edit icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-4">
        <button
          className="w-35 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-100"
          onClick={handleAddClick}
        >
          Add customer
        </button>
      </div>

      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSave}
        user={selectedUser}
        setUser={setSelectedUser}
      />

      <AddModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onUserAdded={handleUserAdded}
      />
    </div>
  );
}

export default Table;