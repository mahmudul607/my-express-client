import { useLoaderData } from "react-router-dom";




const Phone = () => {
  
    const phone = useLoaderData();
   console.log(phone);
    return (
        <div>
            <h3>Brand:{phone.name}</h3>
            <img src={phone.image} alt="" />
        </div>
    );
};

export default Phone;