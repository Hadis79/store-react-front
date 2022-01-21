
import style from './filter.module.css'

const Filter = ({filteringData}) => {
  
  return (
    <div className={style.filter}>
      <select name="filter" onChange={(e)=>filteringData({
        createdAt:e.target.value
      })}>
        <option value="asc">old</option>
        <option value="desc">new</option>
      </select>
    </div>
  );
};

export default Filter;
