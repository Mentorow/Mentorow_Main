import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import ReactPaginate from "react-paginate";
const PaginationButtons=(props)=>{
        console.log(props.pageCount)
        
        return(
                <div>
                        <ReactPaginate breakLabel={<span className="mr-4">...</span>}
                                        nextLabel={
                                                <span className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-md"><BiSolidChevronRight/></span>
                                        }
                        // onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        onPageChange={props.handlePageClick}
                        pageCount={props.pageCount}
                        previousLabel={
                                <span className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md"><BiSolidChevronLeft/></span>
                        }
                        containerClassName="flex items-center justify-center gap-2"
                        pageClassName="block border border-solid border-gray-300 flex items-center justify-center"
                        activeClassName="bg-blue-400"
                        />
                        </div>
        )
}
 export default PaginationButtons;