import React, { useState, useEffect } from 'react';
import Avatar from "../assets/img/Avatar.png";
import Avatar1 from "../assets/img/Avatar (1).png";
import Avatar2 from "../assets/img/Avatar (2).png";
import Avatar3 from "../assets/img/Avatar (3).png";
import Avatar4 from "../assets/img/Avatar (4).png";
import Avatar5 from "../assets/img/Avatar (5).png";
import EditIcon from "../assets/img/create.png";
import File from "../assets/img/icon_textfield.png";
import Download from "../assets/img/Download.png";
import MoveUp from "../assets/img/Move up.png";

const statusColor = {
  'New': 'text-blue-500 bg-blue-100',
  'In-progress': 'text-yellow-600 bg-yellow-100',
  'Completed': 'text-green-600 bg-green-100'
};

const Table = () => {
  const [infoData, setInfoData] = useState([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/table")
      .then((res) => res.json())
      .then((data) => setInfoData(data))
      .catch((error) => console.error("Lỗi khi tải dữ liệu:", error));
  }, []);

  const avatarMap = {
    avatar: <img src={Avatar} alt="" className="w-8 h-8 rounded-full" />,
    avatar1: <img src={Avatar1} alt="" className="w-8 h-8 rounded-full" />,
    avatar2: <img src={Avatar2} alt="" className="w-8 h-8 rounded-full" />,
    avatar3: <img src={Avatar3} alt="" className="w-8 h-8 rounded-full" />,
    avatar4: <img src={Avatar4} alt="" className="w-8 h-8 rounded-full" />,
    avatar5: <img src={Avatar5} alt="" className="w-8 h-8 rounded-full" />,
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleSave = () => {
    fetch(`http://localhost:4000/table/${selectedUser.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(selectedUser),
    })
      .then((res) => res.json())
      .then((updatedUser) => {
        const updatedData = infoData.map((item) =>
          item.id === updatedUser.id ? updatedUser : item
        );
        setInfoData(updatedData);
        setIsEditModalOpen(false);
      })
      .catch((error) => console.error("Lỗi khi cập nhật dữ liệu:", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-4 p-3">
        <img src={File} alt="overview icon" className="w-5 h-5" />
        <h5 className="text-lg font-semibold">Detailed Report</h5>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 px-3 py-1 text-pink-600 border border-pink-500 rounded-lg">
            <img src={Download} alt="Import icon" />
            <span>Import</span>
          </button>
          <button className="flex items-center gap-1 px-3 py-1 text-pink-600 border border-pink-500 rounded-lg">
            <img src={MoveUp} alt="Export icon" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <table className="min-w-full text-l p-2">
        <thead>
          <tr className="text-left text-gray-600 bg-gray-100 border-b">
            <th className="py-2 pl-4"><input type="checkbox" /></th>
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
              <td className="pl-4"><input type="checkbox" /></td>
              <td className="flex items-center gap-2 py-2">
                {avatarMap[row.avatar]}
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
                  <img src={EditIcon} alt="Edit icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-30">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Customer</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={selectedUser.name || ''}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Company</label>
                <input
                  type="text"
                  name="company"
                  value={selectedUser.company || ''}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Order Value</label>
                <input
                  type="text"
                  name="value"
                  value={selectedUser.value || ''}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Order Date</label>
                <input
                  type="date"
                  name="date"
                  value={selectedUser.date || ''}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Status</label>
                <select
                  name="status"
                  value={selectedUser.status || ''}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                >
                  <option value="New">New</option>
                  <option value="In-progress">In-progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
