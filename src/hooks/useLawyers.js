
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { COLLECTIONS, ERROR_MESSAGES } from '../constants';



export const useLawyers = () => {

  const [lawyers, setLawyers] = useState([]);
  const [filteredLawyers, setFilteredLawyers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLawyers = async () => {
    setLoading(true);
    setError(null);

    try {
      const lawyersCollection = collection(db, COLLECTIONS.USERS);
      
      const querySnapshot = await getDocs(lawyersCollection);
      
      const lawyersData = querySnapshot.docs.map(doc => ({
        id: doc.id,      
        ...doc.data()     
      }));

      setLawyers(lawyersData);
      setFilteredLawyers(lawyersData);
    } catch (err) {
      console.error('خطأ في جلب البيانات:', err);
      setError(ERROR_MESSAGES.FETCH_ERROR);
    } finally {
      setLoading(false);
    }
  };


  const searchLawyers = (searchTerm) => {
    if (!searchTerm || searchTerm.trim() === '') {
      setFilteredLawyers(lawyers);
      return;
    }

    const searchLower = searchTerm.toLowerCase();
    
    const filtered = lawyers.filter(lawyer => {
      return Object.values(lawyer).some(value => {
        if (value === null || value === undefined) return false;
        return value.toString().toLowerCase().includes(searchLower);
      });
    });

    setFilteredLawyers(filtered);
  };

  useEffect(() => {
    fetchLawyers();
  }, []);


  return {
    lawyers,
    filteredLawyers,
    loading,
    error,
    searchLawyers,
    refetch: fetchLawyers
  };
};