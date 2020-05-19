import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import e from 'cors';
import Cart from './Cart';

class  Catégories extends React.Component{
	constructor(propos){
        super(propos);
        this.state = {
            name:"",
			category_id:"",
			position:"",
			sku:"",
			label: "Image",
			media_type: "Image",
			position:1,
			base64EncodedData:"",
			type:"image/jpg",
			name:"",
			image:"",
			small_image:"",
			Thumbnail:"",
			disabled:false,
			file:"",
			id:"",

			data:[]
		}
	}

  
	  componentDidMount(){
		const user = {
			
			category_id:this.state.category_id,
			sku:this.state.sku,
	}
		
		    const config = {
			headers: {
			'Content-Type': 'application/json',
			'Authorization':'Bearer fwa2dq5vl6l6cp1cqc6j8ogkvrd2coad'
			},
			}
       axios.get(`http://projetmagento.com/rest/V1/categories/${this.props.id}/products`,config,user)
		.then(response => { 
			console.log(response.data)

			
			this.setState({
				data:response.data
			})
		})
		.catch(error => {
			console.log(error.response)
		});
			}
                  componentWillMount(){
					const user = {


				         		entry: {
								media_type: this.state.media_type,
								label:this.state.label,
								position:this.state.position,
								disabled:this.state.disabled,
								id:this.state.id,
								sku:this.state.sku,

								types:{
									image: this.state.image,
									small_image:this.state.small_image,
									thumbnail:this.state.thumbnail,

								},
								content: {
									base64EncodedData: this.state.base64EncodedData,
									type: this.state.type,
									name: this.state.name,

								},


							},


						
					
						 
					}
					 	const config = {
						headers: {
						'Content-Type': 'application/json',
						'Authorization':'Bearer fwa2dq5vl6l6cp1cqc6j8ogkvrd2coad'
						},
						}
					console.log("done"+this.state.sku)
	/*	axios.get(`http://projetmagento.com/rest/V1/products/Informatiques/media `,config,user)
			.then(response => { 
				console.log(response.data)
	
				
				this.setState({
					data2:response.data
				})
			})
			.catch(error => {
				console.log(error.response)
			});*/
				}

	
				

	

 render(){

	
		return ( 
			<div >
							
							
			{ (this.state.data )? this.state.data.map((el, index) => 
			
			<ul >
			
				 <li>



				<li><Link to={`/Products/${el.sku}`}><i class="fa fa-lock"></i> {el.sku}  </Link> <br/></li>
				
				</li>
			
			</ul>
			 ):<em></em>}							
			 
			 
			 
	
</div>
			 
			 
	

			
				
		)}}


export default Catégories ;


