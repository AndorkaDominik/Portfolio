import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowLeft } from "react-icons/md";
import Vercel from '../../../assets/Blog/vercel.png'

const Rendering = () => {
    function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
    }

  return (
    <div className='rendering blog'>
        <div className='head'>
          <p className="date">Published on 10/9/2024</p>
          <Link to="/" onClick={scrollToTop}><MdKeyboardArrowLeft /> See all posts</Link>
        </div>
        <img src={Vercel} alt="" />
        <h1>Why I Switched to Vercel for My React App Deployment: A GitHub Pages Dilemma</h1>
        <p>In the journey of developing web applications, you often encounter unexpected roadblocks. Recently, while building a React app, I faced a frustrating issue with React Router and GitHub Pages. Specifically, I found myself forced to use <b>HashRouter</b> instead of the preferred <b>BrowserRouter</b>, and after researching the problem, the solution became clear: Vercel. Here’s what happened, why the issue occurs, and why Vercel was the ultimate fix.</p>
        <h1>The Problem with React Router and GitHub Pages</h1>
        <p>GitHub Pages is a fantastic free platform to host <b>static sites</b>. However, it only serves static files like index.html, styles.css, and bundle.js. This limitation makes it problematic for React apps using BrowserRouter, which is the recommended router for most modern single-page applications (SPAs).</p>
        <h2>What went wrong?</h2>
        <p>When I deployed my app with BrowserRouter, it worked perfectly on the root path (/). But as soon as I refreshed the page or navigated directly to another route (e.g., /about or /contact), I encountered a <b>404 error</b>. This happened because GitHub Pages doesn't know how to handle the routes and simply tries to load non-existent files for each route.</p>
        <h2>Why Only HashRouter Works on GitHub Pages</h2>
        <p>HashRouter saves the day but comes with a caveat. Instead of using clean URLs like <b>/about</b>, it adds a # symbol, creating routes like <b>/#/about</b>. Since everything after the hash (#) is never sent to the server, GitHub Pages simply loads index.html and leaves the client-side routing to React.</p>

        <h2>While this solution works, it's not ideal for production-level applications for a few reasons:</h2>
        <ul>
            <li><b>SEO Concerns</b>: Search engines typically don’t index content behind a #, which hurts your app’s discoverability.</li>
            <li><b>Unprofessional URLs</b>: The #/ in the URL looks messy and less polished.</li>
            <li><b>Future Limitations</b>: As your app grows, the limitations of HashRouter become more noticeable, especially for apps requiring clean URLs or complex routing logic.</li>
        </ul>
        <h1>Why I Moved to Vercel</h1>
        <p>The need for a better deployment solution became obvious, and that’s when I discovered Vercel. Unlike GitHub Pages, Vercel supports <b>server-side rendering</b> (SSR) and can handle client-side routing, which is crucial for React apps using BrowserRouter.</p>
        <h1>Here’s why Vercel was the perfect solution:</h1>

        <h2>1. Server-Side Rendering Support</h2>
        <p>Vercel has built-in <b>SSR</b> capabilities, meaning it can serve the correct HTML and JavaScript files regardless of the route. When the user navigates to /about, Vercel knows to send index.html, allowing React to handle the routing on the client side.</p>

        <h2>2. Clean URLs</h2>
        <p>With Vercel, I could finally use BrowserRouter without worrying about hash fragments in the URL. This results in clean, <b>SEO-friendly</b> URLs like /about and /contact.</p>

        <h2>3. Automatic Routing</h2>
        <p>Vercel intelligently manages routes and paths, ensuring that page refreshes or <b>direct URL</b> visits don’t break the app or result in 404 errors.</p>

        <h2>4. Seamless Deployment</h2>
        <p>Deploying on Vercel is incredibly easy. You simply connect your GitHub repository, and Vercel takes care of the rest. Every push to the main branch triggers an <b>automatic deployment</b>, making it ideal for continuous development.</p>
        
        
        
        
        
        <h2>Conclusion</h2>
        <p>While GitHub Pages is a convenient platform for simple static sites, it doesn’t handle React Router’s <b>BrowserRouter</b> well due to its limitations as a static file server. <b>HashRouter</b> is a quick fix, but it’s not a long-term solution if you want clean URLs and better SEO.</p>
        <p>Switching to Vercel gave me the flexibility and features I needed to deploy a fully functional React app with client-side routing. If you’re building modern React applications, I highly recommend considering Vercel or another platform that supports SSR. This small change made a massive difference in my development process, and I’ve never looked back.</p>
        <br />
        <p>If you’re struggling with similar issues, give Vercel a try—you’ll thank yourself later!</p>
        <h2></h2>
        <div className="grid">
            <Link to="/" className='blog-btn' onClick={scrollToTop}><MdKeyboardArrowLeft /> See all posts</Link>
        </div>


    </div>

  )
}

export default Rendering