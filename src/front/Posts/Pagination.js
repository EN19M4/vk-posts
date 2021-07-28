import React from 'react'

export const Pagination = ({postsPerPage , totalPosts, setPage, Page}) => {
    const pageNum = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNum.push(i)
    }
    return (
        <div>
            <ul className = "pagination" >
                {
                    pageNum.map(number => (
                        <li  className = "pageItem" key={number}>
                            <a href = {"!#"} className = "linkPage" onClick = {() => setPage(number) }>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
