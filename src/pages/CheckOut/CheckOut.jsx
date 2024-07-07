import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const CheckOut = () => {

    const services = useLoaderData();
    const { title, price, _id, img} = services;
    const {user}=useContext(AuthContext);

    const handleBookService = e => {
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const date=form.date.value;
        const email=user?.email;
        const booking={
            customerName: name,
            email,
            img,
            date,
            service: title,
            service_id:_id,
            price,
        }

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                alert('service book successfully')
            }
        })
    }

    return (
        <div>
            <h2 className="text-center text-4xl font-bold">Check Out</h2>
            <h2 className="text-xl text-center font-semibold my-5">Book Services: {title}</h2>
            <div className="p-20 bg-gray-100">
                <form onSubmit={handleBookService} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name='date' defaultValue={user?.displayName}  className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name='email' defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" name='phone' defaultValue={'$' + price} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-warning btn-block" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default CheckOut;