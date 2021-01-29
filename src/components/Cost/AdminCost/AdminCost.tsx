import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCostComponentsData } from '../../../redux/actions/costActions';
import './AdminCost.css';

export const AdminCost: React.FC = () => {
  const dispatch = useDispatch();
  const costComponentsData = useSelector((state: any) => state.costComponentsData);
  const { loading, data } = costComponentsData;
  useEffect(() => {
    dispatch(fetchAllCostComponentsData());
  }, [dispatch]
  );

  return (
    <>
    </>
  );
};