
import React from 'react'
import axios from 'axios'

export default class InnList extends React.Component {
	state = {
		inns: [],
	}

	componentDidMount() {
		axios.get('http://127.0.0.1:8000/api/admin/').then(res => {
			this.setState({inns: res.data}); 
		})
	}

	handleCreate(query){
		let self = this
		axios.post('http://127.0.0.1:8000/api/manager/', query).then(()=>{});
	}



	render() {
		return (  
		<div>
			{this.state.inns.map(inn => 
  	  			<div className="page__application">
    	      			<div className="page__applicationName">
      	    				<div>
							Гостиница <span key={inn.id}>{inn.hotelName}</span>
		    				</div>
        	        			<div className="page__applicationPlaces">
          	            			<span>
			  	    				Свободных мест
							</span>
            	      			<span>
				    				<span key={inn.id}>{inn.quantityFree}</span>
			      			</span>
          	        			</div>
       	    			</div>
      				<button type="submit" onClick={(e)=>
						this.handleCreate({"hotelName": inn.hotelName, "tourop": "Планировщик костя"})}
							className="page__giveApplication">Подать заявку!</button>
  	  			</div>)}
		</div>);
	}
}