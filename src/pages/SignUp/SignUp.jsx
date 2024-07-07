import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const SignUp = () => {

    const {createUser}=useContext(AuthContext);


    const handleSignUp= e =>{
        e.preventDefault();
        const form=e.target;
        // const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;

        createUser(email,password)
        .then(result =>{
            const user=result.user;
            console.log(user);
        })
        .catch(console.error())
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card py-16 border w-full max-w-sm shrink-0 shadow-2xl">
                <h1 className="text-4xl font-semibold text-center ">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="w-full input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="w-full input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p className='pl-10'>Already have an account? <Link className='text-orange-400 font-bold' to='/login'>Login</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;