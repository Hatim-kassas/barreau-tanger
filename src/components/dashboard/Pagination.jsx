

import { PAGINATION } from '../../constants';


export const Pagination = ({ currentPage, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / PAGINATION.ITEMS_PER_PAGE);

  if (totalPages <= 1) return null;

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const getPageNumbers = () => {
    const maxButtons = Math.min(PAGINATION.MAX_PAGE_BUTTONS, totalPages);
    const pageNumbers = [];
    
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);
    
    if (endPage - startPage < maxButtons - 1) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center gap-4 p-6 bg-slate-50 border-t border-slate-200">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg hover:from-yellow-600 hover:to-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
      >
        عرض التالي
      </button>

      <div className="flex items-center gap-2">
        {getPageNumbers().map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={`w-10 h-10 rounded-lg font-bold transition-all duration-300 ${
              currentPage === pageNum
                ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg'
                : 'bg-white text-slate-700 hover:bg-slate-100'
            }`}
          >
            {pageNum}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg hover:from-yellow-600 hover:to-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
      >
        عرض السابق
      </button>
    </div>
  );
};