import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-[#d39e4e]'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="me.jpg" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">"I recently purchased a new smartphone from this store, and I am beyond satisfied with both the product and the service. The quality is top-notch, and the delivery was quicker than expected. Will definitely be shopping here again!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-[#d39e4e] mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#d39e4e' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Abdul Qadir</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Our Regular Client</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="data:image/jpeg;base64,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" />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">The gadgets here are amazing! I ordered a pair of noise-canceling headphones, and they work like a charm. The customer service was also very responsive. Highly recommend this site for any electronics purchase</p>
                                <span className="inline-block h-1 w-10 rounded bg-[#d39e4e] mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#d39e4e' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Muhammad Usman</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">First Client Review</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66fZcGjzGtSWEbiL-x_3i-CKvGZEC0ZTr0w&s" />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">"Great prices, fast shipping, and excellent product quality! I bought a gaming laptop, and it's perfect for my needs. The website is easy to navigate, and checkout was smooth. A++ service!"</p>
                                <span className="inline-block h-1 w-10 rounded bg-[#d39e4e] mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#d39e4e' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Abdul Ahad</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">Regular Client</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial