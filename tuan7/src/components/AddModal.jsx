import React, { useState } from 'react';

export function AddModal(){
    const AddModal = ({ isOpen, onClose, onUserAdded }) => {
        const [newUser, setNewUser] = useState({
          name: '',
          company: '',
          value: '',
          date: '',
          status: '',
          avatar: '',
        });
      
        const handleChange = (e) => {
          setNewUser({ ...newUser, [e.target.name]: e.target.value });
        };
      
        const handleImageChange = (e) => {
          const file = e.target.files[0];
          if (file) {
            setNewUser({ ...newUser, avatar: file.name }); 
          }
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          fetch('http://localhost:4000/table', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
          })
            .then((response) => response.json())
            .then((data) => {
              onUserAdded(data);
              onClose();
            })
            .catch((error) => console.error('Error:', error));
        };
      
        if (!isOpen) return null;
      
        return (
          <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg">
              <h2 className="text-2xl font-bold mb-6 text-pink-500">Add Customer</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleChange}
                  placeholder="Customer Name"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <input
                  type="text"
                  name="company"
                  value={newUser.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <input
                  type="number"
                  name="value"
                  value={newUser.value}
                  onChange={handleChange}
                  placeholder="Order Value"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <input
                  type="date"
                  name="date"
                  value={newUser.date}
                  onChange={handleChange}
                  placeholder="Order Date"
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                />
                <select
                  name="status"
                  value={newUser.status}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="New">New</option>
                  <option value="In-progress">In-progress</option>
                  <option value="Completed">Completed</option>
                </select>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-4 py-2 border rounded-lg"
                />
                {newUser.avatar}
                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      };
}

