import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Head>
        {/*META CHARSET */}
        <meta charSet="UTF-8" />
        {/*META VIEWPORT */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*META EDGE */}
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {/*TITLE */}
        <title>Salvador Martinez | Frontend developer</title>
        {/*META DESCRIPTION */}
        <meta
          name="description"
          content="I build responsive front-end web applications. Let's build something together"
        />
        {/*META KEYWORDS */}
        <meta
          name="keywords"
          content="HTML, CSS, JAVASCRIPT, JS, WEB DEVELOPMENT, REACT"
        />
        {/*META AUTHOR */}
        <meta name="author" content="Salvador Martinez" />
        {/*ICON */}
        <link rel="icon" href={'/SM.ico'} />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  )
}
