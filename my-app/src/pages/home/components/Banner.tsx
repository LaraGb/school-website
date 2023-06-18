import React from 'react'
import StylizedLinkBtn from '../../../shared/components/stylized_link_btn/StylizedButton'
import Animation from '../../../shared/components/animation/Animation'
import * as animationData from '../../../assets/animations/104987-animated-online-education.json';
import WideWrapping from '../../../shared/components/wide_wrapping/WideWrapping';

const Banner = () => {
    return (
        <div className='background back relative'>
            <div className='absolute inset-0 blur-xl h-[580px]' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgb(173 209 247 / 26%) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}></div>
            <div className='relative'>
                <WideWrapping>
                    <div className="px-4 py-20 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex items-center">
                        <div className='flex-none space-y-5 max-w-xl'>
                            <a href="javascript:void(0)" className='inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white'>
                                <span className='inline-block rounded-full px-3 py-1 text-white bg-primary'>
                                    News
                                </span>
                                <p className='flex items-center'>
                                    Read the launch post from here
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                                    </svg>
                                </p>
                            </a>
                            <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                                Build your SaaS exactly how you want
                            </h1>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                            </p>
                            <div className='flex items-center gap-x-3 sm:text-sm'>
                                <StylizedLinkBtn label='Get Start' path='/about' isHighlighted={true}/>
                                <StylizedLinkBtn label='Veja Nossos Posts' path='/blog'/>
                            </div>
                        </div>
                        <div className='flex-1 hidden md:block'>
                          <img src="https://otus.com/wp-content/uploads/2022/06/Homepage-Header.png" alt="" />
                        </div>
                    </div>
                </WideWrapping>
            </div>
        </div>
    )

}

export default Banner
