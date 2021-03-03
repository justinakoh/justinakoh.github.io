import './App.css';

function App() {
    return (
        <div className="App">
            <div className="name item">
                <p>Justina Koh</p>
            </div>
            <div className="slogan item">
                <p>Producing #beautiful code since 2014</p>
            </div>
            <div className="about-me">
                <div className="description-text">
                    <p>
                        I'm a software engineer who is passionate about creating beautiful software that users love to
                        use, and developers love to maintain.
                        <br/><br/>
                        Why? Because there is nothing worse than old, outdated software which is hard to use, hard to read,
                        and hard to maintain.
                    </p>
                </div>
                <div className="subtext">
                    <p>Find me on </p>
                    <a href="https://github.com/justinakoh" target="_blank" className="body-link twitter-link"
                       unselectable="on">Github</a>
                    <p>or Linkedin</p>
                    <a href="https://nz.linkedin.com/in/justina-koh" target="_blank" className="body-link twitter-link"
                       unselectable="on">Linkedin</a>
                </div>
            </div>
            <div className="projects">
                <header className="name">
                    <p>Here are some of my projects that I've created</p>
                </header>
                <body>
                <p>
                    Cybersafe
                </p>
                <p>
                    An app created to help increase awareness about cybersecurity and safety online. Feeling brave?
                    Click on the link to see what you can see about your tech online.
                </p>
                <p>
                    Organise Me
                </p>
                <p>
                    A place for you to brainstorm new ideas. Kanban style.
                </p>
                </body>
            </div>
            <div className="about-me">
                <p className="about-me header">About Me</p>
                <div className="description-text">
                    <p>
                        Currently, I am a final-year honours student at Victoria University of Wellington. I specialise in
                        Software Engineering and have particular passion for Cybersecurity.
                    </p>
                    <p>
                        I think that the best ideas are inspired by the things around us - the people around us, the nature
                        around us. To me, the best ideas are the simplest and most usable be everyone.
                    </p>
                    <p>
                        When I'm not online, I enjoy baking, 
                    </p>
                </div>
            </div>
        </div>
        //    Put in button for hectic goose mess
    );
}

export default App;
