import React, { useState } from 'react';
import {productData} from './Product.data';
import {Card, Button} from 'react-bootstrap';

const Products = () => {
    const [items, setItems] = useState(productData);

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
  return (
    <div>
        <h1 className='bg-info text-white'>Product List</h1>
        {items.map((item)=>(
            <div className='d-inline-flex' key={item.id}>
                <Card className="shadow p-3 m-2 bg-white rounded" style={{ width: '18rem', height: '35rem' }}>
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
        
    </div>
  );
}

export default Products
