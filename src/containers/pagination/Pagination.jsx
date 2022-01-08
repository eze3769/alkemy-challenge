import { useEffect, useState} from "react";
import HeroesList from "../../components/heroesList/HeroesList";
import ReactPaginate from 'react-paginate';
import { useContext } from "react";
import { appContext } from "../../context/HerosContext";


function Pagination({results}) {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 20

    const {addHeroe} = useContext(appContext)
    
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(results.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(results.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, results]);
    
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % results.length;
       
    setItemOffset(newOffset);
  };
    
    return (
        <>  
        <div className="p-3 d-flex justify-content-end">
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                previousClassName="page-item"
                nextClassName="page-item"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
            />
        </div>
           
        <HeroesList heroes={currentItems} addHeroe={addHeroe}/>
        
        <div class="p-3 d-flex justify-content-end">
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                previousClassName="page-item"
                nextClassName="page-item"
                previousLinkClassName="page-link"
                nextLinkClassName="page-link"
            />
        </div>
        </>
    )
}

export default Pagination
