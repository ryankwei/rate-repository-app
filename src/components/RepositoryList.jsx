import React, { useState } from 'react';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
const RepositoryList = () => {
  const [order, setOrder] = useState('DESC');
  const [criteria, setCriteria] = useState('CREATED_AT');
  const [searchTerm, setSearchTerm] = useState('');
  const { repositories, fetchMore } = useRepositories(order, criteria, searchTerm);
  console.log("Got repositories", repositories);
  const onSearchChange = (value) => {
    console.log("Received from container: " + value);
    setSearchTerm(value);
  };
  const onSelectChange = (value) => {
    if(value === 'highest') {
      setOrder('DESC');
      setCriteria('RATING_AVERAGE');
    }
    if(value === 'lowest') {
      setOrder('ASC');
      setCriteria('RATING_AVERAGE');
    }
    if(value === 'latest') {
      setCriteria('CREATED_AT');
      setOrder('DESC');
    }
  };
  const onEndReach = () => {
    console.log('fetch more called');
    fetchMore();
  };
  return (
    <RepositoryListContainer repositories={repositories} onSelectChange={onSelectChange} onSearchChange={onSearchChange} onEndReach={onEndReach} />
  );
};

export default RepositoryList;