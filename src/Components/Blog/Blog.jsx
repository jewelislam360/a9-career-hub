import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
            <h1 className='text-center py-20 text-4xl font-bold' > Blog</h1>
        </div>
        <div>
            <div className='flex flex-col gap-5 mt-5'>
                <h2 className='font-bold text-xl'>When should you use context API?</h2>
                <p>The Context API in React is used for managing the state of an application and passing data down the component tree without the need for props drilling.If you find yourself passing the same props through different levels of your component hierarchy, or if you have a lot of state that needs to be accessed by multiple components, using the Context API can make your code cleaner and more manageable.</p>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        </div>
        
    );
};

export default Blog;