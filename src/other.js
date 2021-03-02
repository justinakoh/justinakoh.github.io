import './App.css';

function App() {
    return (
        <div className="App">
            <div className="about-me">
                <header className="name">
                    <p>Justina Koh</p>
                    <p>Producing #beautiful code since 2014</p>
                </header>
                <body>
                <p>
                    I'm a software engineer who is passionate about creating beautiful software that is users love to
                    use, and developers love to maintain.
                    Why? Because there is nothing worse than old, outdated software which is
                </p>
                <p>
                    Find me on Github (link) and LinkedIn (link)
                </p>
                </body>
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
                    An app created to help increase awareness about cybersecurity and safety online
                </p>
                <p>
                    Organise Me
                </p>
                <p>
                    A place for you to brainstorm new ideas
                </p>
                </body>
            </div>
        </div>
    );
}

export default App;
