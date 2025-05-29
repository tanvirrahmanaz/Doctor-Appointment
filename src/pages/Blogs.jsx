import React from 'react';

const Blogs = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Health Blogs</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Blog posts will be added here */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Coming Soon!</h2>
                        <p>Health and wellness blogs will be available here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;