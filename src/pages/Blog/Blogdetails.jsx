import React from 'react';

const Blogdetails = () => {
    return (
        <div className='mx-4  md:mx-16 my-6 p-3 '>
            <h1 className='text-3xl text-center font-medium'>Some important viva question & answer</h1>
            <hr className='bg-black h-1 mt-3 mb-6' />
            <div>
                <h1 className='text-2xl font-medium'>1. Tell us the differences between uncontrolled and controlled components?</h1>
                <ul className='list-disc ml-5'>
                    <h1 className='text-green-500 font-bold'>Answer:</h1>
                    <li className='ml-5 my-1'>Uncontrolled components are components that manage their own state internally. On the other hand, controlled components are components that rely on external state management</li>
                    <li className='ml-5 my-1'>Uncontrolled components are allows for validation and error handling. On the other hand, controlled components are limited validation capabilities</li>
                    <li className='ml-5 my-1'>Uncontrolled components are allows for complex data processing. On the other hand, controlled components are limited data processing capabilities</li>
                    <li className='ml-5 my-1'>Uncontrolled components are provides more control and flexibility. On the other hand, controlled components are provides simpler and more concise code</li>
                    <li className='ml-5 my-1'>Uncontrolled components value is updated through callbacks passed from the parent component. On the other hand, controlled components value is updated directly through the DOM using <strong>"ref"</strong></li>

                </ul>
            </div>
            <div>
                <h1 className='text-2xl font-medium'>2. How to validate React props using PropTypes?</h1>
                <ul className='list-disc ml-5'>
                    <h1 className='text-green-500 font-bold'>Answer:</h1>
                    <li className='ml-5 my-1'> <strong>Install PropTypes:</strong>  You can install PropTypes as a separate package using a package manager like npm or yarn. This package is already included in React so you don't need to install it separately if you are using React.</li>
                    <li className='ml-5 my-1'> <strong>Import PropTypes:</strong>  In the component file, import PropTypes as follows</li>
                    <li className='ml-5 my-1'> <strong>Define propTypes:</strong>  Define the propTypes for the component by adding a propTypes object to the component's code.</li>
                    <li className='ml-5 my-1'> <strong>Check propTypes:</strong>  When the component is rendered, React will check the propTypes defined for that component and issue a warning in the console if any of the defined propTypes do not match the actual props passed to the component</li>


                </ul>
            </div>
            <div>
                <h1 className='text-2xl font-medium'>3. Tell us the difference between nodejs and express js?</h1>
                <ul className='list-disc ml-5'>
                    <h1 className='text-green-500 font-bold'>Answer:</h1>
                    <li className='ml-5 my-1'> <strong>Functionality:</strong>  Node.js is a JavaScript runtime that allows you to execute JavaScript code outside of a web browser. This means you can use Node.js to build a wide variety of applications, including servers, command-line tools, desktop applications, and more. Express.js, on the other hand, is a web application framework built on top of Node.js that is specifically designed to make it easier to build web applications and APIs.</li>
                    <li className='ml-5 my-1'> <strong>Routing:</strong>  While Node.js provides a basic HTTP server, it does not include built-in support for routing requests to different parts of your application. Express.js, on the other hand, includes powerful routing capabilities that allow you to easily handle different types of HTTP requests (GET, POST, PUT, DELETE, etc.) and map them to specific actions in your application.</li>
                    <li className='ml-5 my-1'> <strong>Flexibility:</strong>  Node.js is a general-purpose runtime that can be used for a wide variety of applications, while Express.js is specifically designed for building web applications and APIs. This means that while Express.js provides a lot of built-in functionality for building web applications, it may not be the best choice for applications with different requirements.</li>


                </ul>
            </div>
            <div>
                <h1 className='text-2xl font-medium'>4. What is a custom hook, and why will you create a custom hook?</h1>
                <ul className='list-disc ml-5'>
                    <h1 className='text-green-500 font-bold'>Answer:</h1>
                    <li className='ml-5 my-1'> A custom hook is a reusable function that contains stateful logic and can be used to improve the readability, modularity, and maintainability of your code. You may develop a unique hook to reuse logic across several components, hide complexity, and improve the testability of your code.</li>

                </ul>
            </div>
        </div>
    );
};

export default Blogdetails;