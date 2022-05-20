import { Box, Tab, Tabs, Heading } from "grommet";
import React, { useEffect, useState } from "react";
import { getValidations, getPayments } from "../../API/admin";
import "../../App.css";

const AdminRequests = () => {
    const [ profilevalidation, setProfileValidation ] = useState([]);
    const [ paymentvalidation, setPaymentValidation ] = useState([]);

    useEffect(() => {
        getValidations().then((res) => {
            setProfileValidation(res);
        });
        getPayments().then((res) => {
            setPaymentValidation(res);
        });
    },[])

    const renderHeader = (table) => {
        return (
            table == "Profile" ? 
                <thead className="table-header">
                    <tr>
                    <td>ID</td>
                    <td>Profile ID</td>
                    <td>Type</td>
                    <td>Namne</td>
                    <td>Image</td>
                    <td>Actions</td>
                    </tr>
                </thead>
            : <thead className="table-header">
                <tr>
                <td>ID</td>
                <td>User ID</td>
                <td>Order ID</td>
                <td>Status</td>
                <td>Actions</td>
                </tr>
            </thead>
        )
    }

    const renderProfileValidation = () => {
        if (!profilevalidation) {
            return (
                <tr>
                    <td>Loading Profiles...</td>
                </tr>
            );
          }
        if (profilevalidation.length === 0) {
            return (
                <tr>
                    <td>No profiles available</td>
                </tr>
            );
        }

        return profilevalidation.map((validation, index) => {
            return <tr className="table-data-list">
                <td className="number">{validation.id}</td>
                <td className="number">{validation.UserId}</td>
                <td className="number">{validation.OrderId}</td>
                <td>{validation.isAccepted}</td>
            </tr>
        })

        
    }

    const renderPaymentValidation = () => {
        if (!paymentvalidation) {
            return (
                <tr>
                    <td>Loading Payments...</td>
                </tr>
            );
        }
        if (paymentvalidation.length === 0) {
            return (
                <tr>
                    <td>No payments available</td>
                </tr>
            );
        }
        
        return paymentvalidation.map((payment, index) => {
            return <tr className="table-data-list" key={index} >
                <td className="number">{payment.id}</td>
                <td className="number">{payment.UserId}</td>
                <td className="number">{payment.OrderId}</td>
                <td className="number">{payment.isAccepted.toString()}</td>
            </tr>
        })
        
    }

    return (
        <div className="container">
            <Heading 
                    alignSelf="center"
                    margin={{bottom:"medium",top:"medium"}}
                    fill
                >Validations
            </Heading>
            <Tabs
                alignControls="center"
            >
                <Tab title="Profile Validations">
                    <table className="requests-table" >
                        {renderHeader("Profile")}
                        <tbody className="table-data">
                            {renderProfileValidation()}
                        </tbody>
                    </table>

                    
                </Tab>
                <Tab title="Payment Validations">
                    <table className="requests-table" >
                        {renderHeader("Payments")}
                        <tbody className="table-data">
                            {renderPaymentValidation()}
                        </tbody>
                    </table>
                </Tab>
            </Tabs>
        </div>
        
    );
}

export default AdminRequests