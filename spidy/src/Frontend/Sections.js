import React from 'react';
import HomePage from './HomePage';
import ContactUs from './contactus';
import Products from './Products';
// Import any organization-specific modules or styles here

const MySection = () => {
    return (
        <section className="my-section">
            {/* Add content or components here */}
            <HomePage/>
            <ContactUs/>
            <Products/>
            {/* Add more content or components as needed */}
        </section>
    );
};

export default MySection;