import React from 'react';
import PropTypes from 'prop-types';

function CartItem({item, value}) {
	const {img, title, id, price, total, count} = item;
	const {increment, decrement, removeItem} = value;
	return (
		 <div className="row my-2 text-capitalize text-center">
		   <div className="col-10 mx-auto col-lg-2">
		      <img src={img} alt="product" className="img-fluid" style={{width:'4rem', height:'4rem'}} />
		   </div>
		   <div className="col-10 mx-auto col-lg-2 mt-3">
		      <span className="d-lg-none">product:</span>
		      {title}
		   </div>
		   <div className="col-10 mx-auto col-lg-2 mt-3">
		      <span className="d-lg-none">pice:</span>
		      ${price}
		   </div>
		   <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
		     <div className="d-flex justify-content-center">
		       <div>
		         <span className="btn btn-black mx-1 mt-3" onClick={()=>decrement(id)}>-</span>
		         <span className="btn btn-black mx-1 mt-3">{count}</span> 
		         <span className="btn btn-black mx-1 mt-3" onClick={()=>increment(id)}>+</span>
		       </div>
		     </div>	      
		   </div>
		{/*quantity column ends*/}
		   <div className="col-10 mx-auto col-lg-2 mt-3">
		      <div className="cart-icon">
		        <i className="fas fa-trash" onClick={()=>removeItem(id)}></i>
		      </div>
		   </div>
		   <div className="col-10 mx-auto col-lg-2 mt-3">
		      <strong>item total: ${total}</strong>
		   </div>
		 </div>
		);
}

export default CartItem;