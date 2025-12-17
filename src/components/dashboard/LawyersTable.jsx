
import { Edit2, Trash2 } from 'lucide-react';


export const LawyersTable = ({ lawyers, loading }) => {
  const handleEdit = (lawyer) => {
    console.log('تعديل المحامي:', lawyer);
  };
  const handleDelete = (lawyer) => {
    console.log('حذف المحامي:', lawyer);

  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="border-b border-slate-200">
        <div className="flex">
          <button className="px-6 py-4 text-slate-600 hover:bg-slate-50 transition-colors">
            المحامين الرسميين
          </button>
          <button className="px-6 py-4 bg-yellow-500 text-white font-bold border-b-4 border-yellow-600">
            المحامين المتمرنين
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : lawyers.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            لا توجد بيانات
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
              <tr>
                <th className="px-6 py-4 text-center font-bold">إسم المحامي</th>
                <th className="px-6 py-4 text-center font-bold">رقم المحامي</th>
                <th className="px-6 py-4 text-center font-bold">رقم الهاتف</th>
                <th className="px-6 py-4 text-center font-bold">الصفة</th>
                <th className="px-6 py-4 text-center font-bold">المدينة</th>
                <th className="px-6 py-4 text-center font-bold">تعديل أو حذف</th>
              </tr>
            </thead>
            <tbody>
              {lawyers.map((lawyer, index) => (
                <tr
                  key={lawyer.id}
                  className={`${
                    index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                  } hover:bg-yellow-50 transition-colors border-b border-slate-100`}
                >
                  <td className="px-6 py-4 text-center font-bold text-slate-800">
                    {lawyer.fullNameAr || lawyer.fullNameFr || '-'}
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-slate-800">
                    {lawyer.serialNb || '-'}
                  </td>
                  <td className="px-6 py-4 text-center text-slate-700">
                    {lawyer.landlinePhone || lawyer.mobilePhone || '-'}
                  </td>
                  <td className="px-6 py-4 text-center text-slate-700">
                    {lawyer.city || 'محتن'}
                  </td>
                  <td className="px-6 py-4 text-center text-slate-700">
                    {lawyer.city || '-'}
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleEdit(lawyer)}
                        className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                        title="تعديل"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(lawyer)}
                        className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                        title="حذف"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};