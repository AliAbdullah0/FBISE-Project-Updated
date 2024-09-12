import React from 'react';
import { Link } from 'react-router-dom';

function Cards() {
    return (
        <>



        
            <div className='flex justify-between'>

                <div className='w-full'>
                    <div className='w-full flex gap-3 items-center'>
                        <div className='flex-row flex items-center justify-evenly w-full md:gap-2 flex-wrap gap-4'>
                            <div class="relative flex flex-col justify-center overflow-hidden sm:py-12">
                                <div
                                    class="group relative cursor-pointer overflow-hidden bg-blue-100 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                    <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                                    <div class="relative z-10 mx-auto max-w-md">
                                        <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                            </svg>
                                        </span>
                                        <div
                                            class="space-y-6 pt-6 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                            <p>A Tensor flow model to Recognize Image Content and display information about it.</p>
                                        </div>
                                        <div class="pt-6 text-base font-semibold leading-7">
                                            <p>
                                                <Link to='imagerecognition' class="text-sky-500 transition-all duration-300 group-hover:text-white">Try Model
                                                    &rarr;
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex flex-col justify-center overflow-hidden sm:py-12">
                                <div
                                    class="group relative cursor-pointer overflow-hidden bg-blue-100 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                    <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                                    <div class="relative z-10 mx-auto max-w-md">
                                        <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                            </svg>
                                        </span>
                                        <div
                                            class="space-y-6 pt-6 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                            <p>A Tensor flow model to extract info from Passage and answer questions about it.</p>
                                        </div>
                                        <div class="pt-6 text-base font-semibold leading-7">
                                            <p>
                                                <Link to='gpt' class="text-sky-500 transition-all duration-300 group-hover:text-white">Try Model
                                                    &rarr;
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="relative flex flex-col justify-center overflow-hidden sm:py-12">
                                <div
                                    class="group relative cursor-pointer overflow-hidden bg-blue-100 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                    <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
                                    <div class="relative z-10 mx-auto max-w-md">
                                        <span class="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-10 w-10 text-white transition-all">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                            </svg>
                                        </span>
                                        <div
                                            class="space-y-6 pt-6 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                            <p>A Real-Time Object Recognition Model to detect objects from video camera.</p>
                                        </div>
                                        <div class="pt-6 text-base font-semibold leading-7">
                                            <p>
                                                <Link to='objrec' class="text-sky-500 transition-all duration-300 group-hover:text-white">Try Model
                                                    &rarr;
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="relative flex flex-col justify-center overflow-hidden sm:py-12 text-white">
                                <div
                                    class="group relative cursor-pointer overflow-hidden bg-black px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                                    <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-white transition-all duration-300 group-hover:scale-[10]"></span>
                                    <div class="relative z-10 mx-auto max-w-md">
                                        <span class="grid h-20 w-20 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-white">
                                            <img src="src\assets\github.png" alt="" className='h-[90%]'/>
                                        </span>
                                        <div
                                            class="space-y-6 pt-5 text-base leading-7 text-white transition-all duration-300 group-hover:text-black">
                                            <p>Learn how we did it! Get the source code from here!</p>
                                        </div>
                                        <div class="pt-5 text-base font-semibold leading-7">
                                            <p>
                                                <Link to='https://github.com/AliAbdullah0/Source-Code-FBISE-Project' class="text-white transition-all duration-300 group-hover:text-white">Source Code
                                                    &rarr;
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div>
                    <div class="flex flex-col lg:flex-row gap-10  h-fit w-full p-10 mt-12">
                        <div class="flex flex-col gap-4 lg:w-1/2 w-full">
                            <img src="src\assets\facial-recognition.jpeg" alt="" className='w-full float-left rounded-2xl' />
                        </div>
                        <div class="flex flex-col gap-4 lg:w-1/2 w-full">
                            <h2 class="md:text-3xl text-xl font-semibold">Tensorflow for Text Recognition (NLP)</h2>
                            <p className='md:text-base text-sm'>TensorFlow provides a powerful framework for building Question and Answer (QnA) models, particularly through its tensorflow-text and TensorFlow Hub modules, which offer pre-trained models like BERT and other transformer-based architectures. These models have demonstrated state-of-the-art performance in many QnA tasks by leveraging natural language understanding (NLU) and deep learning techniques.These models can be used for both extractive QnA, where the answer is a span of text within a given context, and generative QnA, where the model generates a new answer.</p>
                            <h3 className='font-semibold underline'>Use Cases</h3>
                            <ul>
                                <li><span className='font-semibold'>Customer Support: </span>  Automating responses to frequently asked questions and providing immediate assistance to users, reducing the need for human intervention.</li>
                                <li><span className='font-semibold'>Educational Tools: </span>Assisting students with homework, explaining complex concepts, and providing additional learning resources or tutoring.</li>
                                <li><span className='font-semibold'>Legal Assistance: </span>Answering legal questions, providing information about legal procedures, and helping users understand legal documents.</li>
                            </ul>

                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row gap-10  h-fit w-full p-10 ">

                        <div class="flex flex-col gap-4  lg:w-1/2 w-full">
                            <h2 class="md:text-3xl text-xl font-semibold">Image Recognition with Tensorflow</h2>
                            <p className='md:text-base text-sm'>Before TensorFlow can detect objects in images, it needs a trained model. This model learns to recognize objects by looking at thousands of labeled images (for example, pictures of cats and dogs). The model figures out patterns, like the shape of a cat's ears or the fur pattern on a dog, and it learns to associate these patterns with the correct label.
                                When TensorFlow is given a new image to analyze, it breaks the image into smaller parts, like tiny squares (called pixels). Each pixel has a color value, and TensorFlow looks at these values to understand the image better.

                                <h3 className='font-semibold underline mt-2'>Use Cases</h3>
                                <ul className='flex flex-col gap-2 mt-2'>
                                    <li><span className='font-semibold'>Health Care:</span> TensorFlow can analyze medical images like X-rays, MRIs, or CT scans to help detect anomalies such as tumors or fractures..</li>
                                    <li><span className='font-semibold'>Autonomous Vehicles:</span> TensorFlow is used in self-driving cars to recognize and interpret road signs, pedestrians, other vehicles, and obstacles, helping the vehicle navigate safely..</li>
                                    <li><span className='font-semibold'>Product Search:</span>TensorFlow enables visual search capabilities, allowing customers to search for products by uploading pictures. The system identifies and matches products from a catalog.</li>
                                </ul>
                            </p>
                        </div>
                        <div class="flex flex-col md:gap-4 gap-3 lg:w-1/2 w-full float-right">
                            <img src="src\assets\image-recognition-using-ai.webp" alt="" className='w-full float-right rounded-2xl' />
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cards;
