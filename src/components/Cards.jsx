import React from 'react';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <>
        <div className='w-full flex gap-3 items-center p-3 mt-6'>
            <div className='flex-row flex items-center justify-evenly w-full md:gap-2 flex-wrap gap-4'>
                <div className='shadow-md flex flex-col md:min-h-[40vh] items-center justify-between gap-3 rounded-3xl md:w-[80%] w-1/2 lg:w-[30%]'> 
                   <div className='flex flex-col items-center justify-center mt-10 gap-4'>
                   <h2 className='md:text-[3ch] font-semibold border-b-blue-500 border-b-2 text-wrap'>Image Recognition</h2>
                    <p className='w-full p-2 text-center md:text-sm text-xs lg:text-base font-light'> Commonly used in security systems, smartphones, and surveillance, facial recognition has become increasingly accurate with advancements in AI and machine learning.It offers enhanced security, privacy and data security.</p>
                    <button className='bg-blue-500 text-white  p-2 rounded-3xl font-semibold w-1/3  hover:transtion duration-150  hover:bg-blue-500 hover:text-white shadowmd'><Link to='imagerecognition'>Try It Out!</Link></button>
                    </div>
                    <div className='w-full h-4 bg-blue-500 rounded-b-3xl'></div>
                </div>
                <div className='shadow-md flex flex-col min-h-[40vh] items-center justify-between gap-3 rounded-3xl md:w-[80%] w-1/2 lg:w-[30%]'>
                <div className='flex flex-col items-center justify-center mt-10 gap-4'>
                   <h2 className='md:text-[3ch] font-semibold border-b-blue-500 border-b-2 text-wrap'>Text GPT</h2>
                    <p className='w-full p-2 text-center text-xs md:text-sm lg:text-base font-light'> .A QnA (Question and Answer) model works by understanding a question posed by the user and finding the most relevant answer from a given context, dataset, or knowledge base.These focus on retrieving an answer from a given document or database. Technologies like Elasticsearch, Lucene, and models like BERT can be used to find relevant text.</p>
                    <button className='bg-blue-500 text-white  p-2 rounded-3xl font-semibold w-1/3  hover:transtion duration-150  hover:bg-blue-500 hover:text-white shadowmd'><Link to='/gpt'>Try It Out!</Link></button>
                    </div>
                    <div className='w-full h-4 bg-blue-500 rounded-b-3xl'></div>
                </div>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-10 bg-[#f5f5e5] h-fit w-full p-10 mt-12">
            <div class="flex flex-col gap-4 lg:w-1/2 w-full">
                <img src="src\assets\facial-recognition.jpeg" alt="" className='w-full float-left'/>
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
        <div class="flex flex-col lg:flex-row gap-10 bg-[#f5f5e5] h-fit w-full p-10 ">
           
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
                <img src="src\assets\image-recognition-using-ai.webp" alt="" className='w-full float-right'/>
            </div>
        </div>
    </>
  );
}

export default Cards;
