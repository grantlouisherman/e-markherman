import React from 'react';
import 'card.css';

export default const LinkCard = ({ title, link }) => (
  <div class="col-sm-6">
       <div class="card">
         <div class="card-block">
           <h6 class="card-title">{ title }</h6>
           <a href=`${link}` class="btn btn-primary">Go To Page</a>
         </div>
       </div>
   </div>
)
