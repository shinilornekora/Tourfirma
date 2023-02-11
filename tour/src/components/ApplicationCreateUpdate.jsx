import React, { Component } from 'react';
import CustomersService from './HANDLERS';

const customersService = new CustomersService();

class ApplicationCreateUpdate extends Component {
      constructor(props) {
        super(props);    
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.pk)
        {
          customersService.getCustomer(params.pk).then((c)=>{
            this.refs.hotelName.value = c.hotel_Name;
          })
        }
      }

      handleCreate(){
        customersService.createCustomer(
          {
            "hotel_Name": this.refs.hotelName.value,
            // "last_name": this.refs.lastName.value,
            // "email": this.refs.email.value,
            // "phone": this.refs.phone.value,
            // "address": this.refs.address.value,
            // "description": this.refs.description.value
          }          
        ).then((result)=>{
          alert("Customer created!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleUpdate(pk){
        customersService.updateCustomer(
          {
            "pk": pk,
            "hotel_Name": this.refs.hotelName.value,
        }          
        ).then((result)=>{
          console.log(result);
          alert("Customer updated!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
        });
      }
      handleSubmit(event) {
        const { match: { params } } = this.props;

        if(params && params.pk){
          this.handleUpdate(params.pk);
        }
        else
        {
          this.handleCreate();
        }

        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>First Name:</label>
              <input className="form-control" type="text" ref='hotel_Name' />
            </div>
          </form>
        );
      }  
}

export default ApplicationCreateUpdate;