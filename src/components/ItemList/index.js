import React from 'react'
import "./style.css"

function ItemList({title, description, html_url}) {
  return (
    <div className='item_list'>
    <strong><a href={html_url} target="_blank" rel="noofollow">{title}</a></strong>
    <p> {description}</p>
    <hr />
    </div>
  );
}
export default ItemList;