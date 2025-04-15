import StatusBadge from "../StatusBadge/StatusBadge";
import icon_textfield from "../../assets/img/icon_textfield.png";
const data = [
  { name: "Elizabeth Lee", company: "AvatarSystems", value: "$359", date: "10/07/2023", status: "New" },
  { name: "Carlos Garcia", company: "SmoozeShift", value: "$747", date: "24/07/2023", status: "New" },
  { name: "Elizabeth Bailey", company: "Prime Time", value: "$564", date: "08/08/2023", status: "In-progress" },
  { name: "Ryan Young", company: "DataStream", value: "$769", date: "01/05/2023", status: "Completed" },
];

const DataTable = () => (
  <div className="bg-white p-4 rounded-xl shadow">
    <div className="flex justify-between mb-5">
      <div className="flex w-2xl">
       <img src={icon_textfield} alt="" />
      <h2 className="text-lg text-black-700 font-bold">Detailed Report</h2>
      </div>
     
      <div className="space-x-2">
        <button className="bg-pink-100 text-pink-600 px-4 py-1 rounded-md">Import</button>
        <button className="bg-pink-100 text-pink-600 px-4 py-1 rounded-md">Export</button>
      </div>
    </div>
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left text-gray-500 border-b">
          <th className="py-2">Customer Name</th>
          <th>Company</th>
          <th>Order Value</th>
          <th>Order Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="border-b hover:bg-gray-50">
            <td className="py-2">{row.name}</td>
            <td>{row.company}</td>
            <td>{row.value}</td>
            <td>{row.date}</td>
            <td><StatusBadge status={row.status} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default DataTable;
