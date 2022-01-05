
import style from './pagination.module.css'

import {range} from 'lodash'

const Pagination = ({totalData,currentPage,perPage,onChangePage}) => {
    
const pageCount=Math.ceil(totalData/perPage)
console.log(pageCount,totalData);

const pages=range(1,pageCount+1)
    return ( 
        <>
        <div>
        <div className={style.container} >
           {
               pages.map(page=>{

                   return<div className={style.pagination}> <span className={style.pageNum} onClick={()=>onChangePage(page)}>{page}</span></div>
               })
           }
        </div>
        </div>
        </>
     );
}
 
export default Pagination;