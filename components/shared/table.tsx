const Table = () => {
  return (
    <div className="p-4 border-2 border-bill-french-gray bg-bill-white bg-opacity-60  border-opacity-50 rounded-xl overflow-auto shadow-sm">
      <table className="table-auto border-collapse w-full ">
        <thead className="border-bill-french-gray border-b-2 border-opacity-50">
          <tr>
            <th className="w-20 p-3 text-lg font-semibold tracking-wide text-left">
              No.
            </th>
            <th className="p-3 text-lg font-semibold tracking-wide text-left">
              Artist
            </th>
            <th className="w-24 p-3 text-lg font-semibold tracking-wide text-left">
              Year
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="border-b border-bill-french-gray border-opacity-50">
            <td className="p-3 text-sm text-black whitespace-nowrap">1</td>
            <td className="p-3 text-sm text-black whitespace-nowrap">
              Malcolm Loykier
            </td>
            <td className="p-3 text-sm text-black whitespace-nowrap">1961</td>
          </tr>
          <tr className="border-b border-bill-french-gray border-opacity-50">
            <td className="p-3 text-sm text-black whitespace-nowrap">2</td>
            <td className="p-3 text-sm text-black whitespace-nowrap">
              Lionel Messi
            </td>
            <td className="p-3 text-sm text-black whitespace-nowrap">1987</td>
          </tr>
          <tr>
            <td className="p-3 text-sm text-black whitespace-nowrap">3</td>
            <td className="p-3 text-sm text-black whitespace-nowrap">
              Andrea Iniesta
            </td>
            <td className="p-3 text-sm text-black whitespace-nowrap">1982</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
