import React from "react";

interface AddressFormProps {
    placeholder: string;
    label: string;
}

const AddressForm: React.FC<AddressFormProps> = ({ placeholder, label }) => {
    return (
        <div className="flex flex-1 flex-col gap-4">
            <div className="text-sm font-bold">{label}</div>
            <input type="text" placeholder={placeholder} className='w-full border border-gray-300 rounded-md p-3 shadow focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150 ease-in-out' />
        </div>
    );
};

export default AddressForm;