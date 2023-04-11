import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
            <h1 className='text-center py-20 text-4xl font-bold' > Blog</h1>
        </div>
        <div className='w-[75%] mx-auto'>
            <div className='flex flex-col gap-5 mt-5 border rounded shadow p-5'>
                <h2 className='font-bold text-xl'>When should you use context API?</h2>
                <p>The Context API in React is used for managing the state of an application and passing data down the component tree without the need for props drilling.If you find yourself passing the same props through different levels of your component hierarchy, or if you have a lot of state that needs to be accessed by multiple components, using the Context API can make your code cleaner and more manageable.</p>
            </div>
            <div className='flex flex-col gap-5 mt-5 border rounded shadow p-5'>
                <h2 className='font-bold text-xl'>What is a custom hook?</h2>
                <p>Custom hook is a function in React that allows you to extract common logic from components and reuse it across your application. custom hooks are a powerful tool in React that can help you create reusable and composable code, reduce code duplication, and make your codebase more maintainable.</p>
            </div>
            <div className='flex flex-col gap-5 mt-5 border rounded shadow p-5'>
                <h2 className='font-bold text-xl'>What is useRef?</h2>
                <p>useRef is a hook in React, which allows functional components to access and store mutable values that persist across component renderings. It returns an object with a current property, which can be used to store and access a mutable value. The value stored in the current property can be updated without causing a component re-render.</p>
            </div>
            <div className='flex flex-col gap-5 mt-5 border rounded shadow p-5'>
                <h2 className='font-bold text-xl'>What is useMemo?</h2>
                <p>useMemo is a hook in React that allows you to optimize the performance of your functional components by memoizing the results of expensive calculations.The basic idea behind useMemo is that it will only recompute the memoized value when one of its dependencies changes. This can help avoid expensive calculations being repeated unnecessarily on each component render.</p>
            </div>
            
        </div>

        </div>
        
    );
};

export default Blog;