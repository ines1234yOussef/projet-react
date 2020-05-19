import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
class Cart extends React.Component{
	constructor(propos){
        super(propos);
        this.state = {
			
		
		}
	}
	
	


    render() {
        return (
 <div>


<section id="cart_items">
		<div class="container">
			
			<div class="table-responsive cart_info">
				<table class="table table-condensed">
					<thead>
						<tr class="cart_menu">
						
							<td></td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="cart_product">
								<a href=""><img src="assets/images/cart/one.png" alt="" /></a>
							</td>
							<td class="cart_description">
								
								
							</td>
							
							<td class="cart_quantity">
								<div class="cart_quantity_button">
									
									<input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2" />
									
								</div>
							</td>
							
							<td class="cart_delete">
								<a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
							</td>
						</tr>

						<tr>
							<td class="cart_product">
								<a href=""><img src="assets/images/cart/two.png" alt="" /></a>
							</td>
							
							
							<td class="cart_quantity">
								<div class="cart_quantity_button">
									
									<input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2" />
									
								</div>
							</td>
							
							<td class="cart_delete">
								<a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
							</td>
						</tr>
						<tr>
							<td class="cart_product">
								<a href=""><img src="assets/images/cart/three.png" alt="" /></a>
							</td>
							<td class="cart_description">
							</td>
							<td class="cart_price">
							</td>
							<td class="cart_quantity">
								<div class="cart_quantity_button">
									<input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2" />
								</div>
							</td>
							<td class="cart_total">
							</td>
							<td class="cart_delete">
								<a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section> 

</div>
    
        )
    }
}


     export default Cart;
