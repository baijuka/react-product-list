import ReactPaginate from 'react-paginate';
import React, { useState, useEffect } from 'react';
import {productData} from './Product.data';
import {Card, Button} from 'react-bootstrap';

const Products = () => {
    const [items, setItems] = useState([]);
    const totalItems = productData.length;
    let limit = 8;
    const [pageCount] = useState(Math.ceil(totalItems / limit));
    let currentPage = 1;
    
    // setPageCount(Math.ceil(totalItems / limit));

    useEffect(()=> {
        const getFirstData = productData.slice(0, limit)
        setItems(getFirstData);
    },[])

    const decQty = (id)=> {
        const newItem = items.map((item)=> 
                        item.id === id && item.qty > 1 ? { ...item, qty: item.qty-1 }: item
        );
        setItems(newItem);
    }
    const incQty = (id)=> {
        const newItem = items.map((item)=> 
        item.id === id ? {...item, qty: item.qty+1}: item
        );
        setItems(newItem);
    }

    const fetchItems = () => {
        const indexStart = currentPage * limit - limit;
        const indexEnd = currentPage* limit
        console.log(indexStart, indexEnd);
        const data = productData.slice(indexStart, indexEnd)
        return data
    }

    const handlePageClick = (data) => {
        currentPage = data.selected + 1
        const pageItems =  fetchItems(currentPage)

        setItems(pageItems)
    }

  return (
    <div>
        <h1 className='bg-info text-white'>Product List</h1>
        {items.map((item)=>(
            <div className='d-inline-flex' key={item.id}>
                <Card className="shadow p-3 m-2 bg-white rounded" style={{ width: '18rem', height: '38rem' }}>
                <Card.Img className='p-2'  style={{ width: '100%', height: '10rem' }} variant="top" src={require(`./assets/${item.image}.jpg`)} />
                <Card.Body>
                    <Card.Title className="text-primary">{item.model}</Card.Title>
                    <Card.Text>
                    {item.desc}
                    </Card.Text>
                    <h5>£{item.price}</h5>
                    <div>
                        <p>Qty: <Button onClick={()=>decQty(item.id)} className='m1 btn-secondary'>-</Button>  {item.qty} <Button onClick={()=>incQty(item.id)} className='m1  btn-secondary'>+</Button> </p>
                    </div>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
                </Card>
            </div>
        ))}
        
        <ReactPaginate 
            previousLabel = {'Previous'}
            nextLabel = {'Next'}
            breakLabel = {'...'}
            pageCount = {pageCount}
            marginPagesDisplayed = {3}
            pageRangeDisplayed = {3}
            onPageChange = {handlePageClick}
            containerClassName = {'pagination justify-content-center'}
            pageClassName = {'page-item'}
            pageLinkClassName= {'page-link'}
            previousClassName = {'page-item'}
            previousLinkClassName = {'page-link'}
            nextClassName = {'page-item'}
            nextLinkClassName = {'page-link'}
            breakClassName = {'page-item'}
            breakLinkClassName = {'page-link'}
            activeClassName = {'active'}
        />
    </div>
  );
}

export default Products
