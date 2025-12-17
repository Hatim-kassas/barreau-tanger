

import { useState, useMemo } from 'react';
import { Sidebar } from '../components/dashboard/Sidebar';
import { Header } from '../components/dashboard/Header';
import { LawyersTable } from '../components/dashboard/LawyersTable';
import { Pagination } from '../components/dashboard/Pagination';
import { useLawyers } from '../hooks/useLawyers';
import { PAGINATION } from '../constants';

export const DashboardPage = () => {
  const { filteredLawyers, loading, searchLawyers } = useLawyers();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    searchLawyers(term);
    setCurrentPage(1); 
  };

  const currentLawyers = useMemo(() => {
    const indexOfLastLawyer = currentPage * PAGINATION.ITEMS_PER_PAGE;
    const indexOfFirstLawyer = indexOfLastLawyer - PAGINATION.ITEMS_PER_PAGE;
    return filteredLawyers.slice(indexOfFirstLawyer, indexOfLastLawyer);
  }, [filteredLawyers, currentPage]);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex" dir="rtl">
      <Sidebar />

      <div className="flex-1 p-8">
        <Header
          totalCount={filteredLawyers.length}
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />

        <LawyersTable lawyers={currentLawyers} loading={loading} />

        {!loading && filteredLawyers.length > 0 && (
          <div className="mt-6">
            <Pagination
              currentPage={currentPage}
              totalItems={filteredLawyers.length}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};