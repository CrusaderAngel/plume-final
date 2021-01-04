import React, {useEffect} from 'react';
import { DefaultRootState, useDispatch, useSelector } from 'react-redux';
import {fetchAllUseComponentsData} from '../../redux/actions/useActions';
import './Use.css';

export const Use: React.FC = () => {

  const dispatch = useDispatch();
  const useComponentsData = useSelector((state:any) => state.useComponentsData);
  const {loading, data} = useComponentsData;
  console.log(data)

  useEffect(() => {
    dispatch(fetchAllUseComponentsData());
  }, [dispatch]
  );

  return(
    <section id="use">
      <h2 id="section-header">ЧЕМ ПОЛЕЗНА</h2>
      <div id="use-content-wrapper">
        <p className="use-content">
          Учу двигаться свободно и без боли. Исправляю осанку и движение.
          Возвращаю в ресурсное состояние. Знаю, как вылечить грыжи без
          операции и корсета. Помогу стать гибким, но не завернуться в узел
          или сесть на шпагат.
        </p>
        <p className="use-content">
          Провожу тренировки по умному фитнесу, миофасциальному релизу,
          стретчингу и йоге. Составляю программу из разных направлений под
          цели клиента. За 4 года не провела ни одной одинаковой тренировки.
        </p>
        <p className="use-content">
          Ко мне обращаются, чтобы привести тело в форму и укрепить здоровье.
          Например, если хочется бегать, но болят колени, сводит икры или
          тянет в пояснице.
        </p>
        <p className="use-content">
          Я против крайностей и насилия над собой, например бешеной сушки. Не
          смогу помочь, если вы хотите, чтобы вас заставляли заниматься и
          жестко гоняли. <i>Я верна принципу к телу с любовью.</i>
        </p>
      </div>
    </section>
  );
};