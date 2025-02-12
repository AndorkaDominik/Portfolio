import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowLeft } from "react-icons/md";
import Code1 from "../../../assets/Blog/code (1).png";
import Code2 from "../../../assets/Blog/code (2).png";
import HighlightIMG from '../../../assets/Blog/highlight.png'

const Highlight = () => {
    function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  }
  return (
    <div className='highlight blog'>
        <div className='head'>
            <p className="date">Published on 18/9/2024</p>
            <Link to="/" onClick={scrollToTop}><MdKeyboardArrowLeft /> See all posts</Link>
        </div>
        <img src={HighlightIMG} alt="" />
        <h1>Enhancing Code Readability with react-syntax-highlighter: A Game Changer for My Java Teaching Website</h1>
        <p>Creating a website to teach Java programming has been an exciting journey. However, I encountered a <b>significant challenge</b>: the default color scheme for code tags was far less vibrant and readable compared to popular editors like VSCode. This issue made it difficult for users to follow along with the code examples effectively.</p>
        <a href="https://andorkadominik.github.io/LearnJava/#/" className='link' target='_blank'>Check out website</a>
        <h2>The Challenge with Default Code Styles</h2>
        <p>When displaying code snippets on my site, the lack of visual appeal and readability was apparent. Default styles made the code appear <b>plain</b> and <b>monotonous</b>, which could easily lead to confusion or disengagement among learners. The need for a more engaging and readable presentation of code became clear.</p>
        <img src={Code2} alt="" className='bright' />
        <h2>What Was the Problem?</h2>
        <p>The problem was simple yet significant: the default code styling did not provide the syntax highlighting that makes code easy to read and understand. Without colors that distinguish different elements of the code, users might struggle to parse the structure and meaning of the code snippets.</p>

        <h2>Discovering <b>react-syntax-highlighter</b></h2>
        <p>In my quest for a solution, I discovered react-syntax-highlighter. This library proved to be a fantastic tool for enhancing the appearance of code blocks on my website. By adding <b>colorful syntax</b> highlighting based on the language of the code, it transformed plain text into a vibrant, easy-to-read format.</p>

        <img src={Code1} alt="" />


        <h1>Why <b>react-syntax-highlighter</b> Was the Perfect Solution</h1>
        <h2>1. Enhanced Readability</h2>
        <p>With react-syntax-highlighter, code snippets become more engaging and easier to read. Different parts of the code are color-coded according to their function (e.g., <b>keywords</b>, <b>strings</b>, <b>comments</b>), making it much simpler for users to follow along.</p>
        <h2>2. Improved User Experience</h2>
        <p>Colorful code blocks not only look better but also improve the overall <b>user experience</b>. Learners can quickly identify and understand different elements of the code, which helps in grasping concepts more effectively.</p>
        <h2>3. Easy Integration</h2>
        <p> Integrating react-syntax-highlighter into my React app was straightforward. The library offers various <b>themes</b> and <b>customization</b> options, allowing me to choose the style that best fits my website’s design.</p>

        <h2>Conclusion</h2>
        <p>While the default code styling was functional, it lacked the visual appeal and clarity needed for an effective learning experience. react-syntax-highlighter addressed this issue perfectly, offering colorful, readable, and engaging code displays that greatly enhanced the usability of my website.</p>
        <p>If you’re working on a project that involves displaying code snippets, I highly recommend giving <b>react-syntax-highlighter</b> a try. It made a significant difference in my project and has been a valuable addition to my development toolkit. Your users will thank you for it!</p>
        <br />
        <p>If you have any similar challenges or need advice on integrating code highlighting in your projects, feel free to reach out!</p>
        <h2></h2>
        <div className="grid">
            <Link to="/" className='blog-btn' onClick={scrollToTop}><MdKeyboardArrowLeft /> See all posts</Link>
        </div>


    </div>
  )
}

export default Highlight;