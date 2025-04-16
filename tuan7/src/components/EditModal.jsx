import React from 'react';
export function EditModal(){
    const EditModal = ({ isOpen, onClose, onSave, user, setUser }) => {
        if (!isOpen) return null;
      
        const handleChange = (e) => {
          setUser({ ...user, [e.target.name]: e.target.value });
        };
      
        return (
          <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg">
              <h2 className="text-2xl font-bold mb-6 text-pink-500">Edit Customer</h2>
      
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  placeholder="Customer Name"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  name="company"
                  value={user.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  name="orderValue"
                  value={user.value}
                  onChange={handleChange}
                  placeholder="Order Value"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  name="orderDate"
                  value={user.date}
                  onChange={handleChange}
                  placeholder="Order Date"
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="text"
                  name="status"
                  value={user.status}
                  onChange={handleChange}
                  placeholder="Status (e.g., New, In-progress, Completed)"
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
      
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={onSave}
                  className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        );
      };
}



export default EditModal;