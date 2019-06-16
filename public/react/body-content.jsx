const Content = (
    <div className="body-content">
    <div id="about" className="mdc-layout-grid">
    <h1 className="mdc-layout-grid__title mdc-typography--headline3 mdc-layout-grid__cell--span-1">About</h1>
        <div className="mdc-layout-grid__inner">
            <p className="mdc-typography--body1 mdc-layout-grid__cell">
                Hello, My name is Colton Tipton and I like to program!, my goal is to learn and experience as much programming as possible. I started programming on the <a href="https://www.roblox.com" target="__blank">Roblox</a> platform back when I was a kid, roblox is also what inspired me to continue to learn and move on to more advanced languages. I spend a lot of my team on projects that involve web or app development. You can go to my <a href="#blog" target="__blank">Blog</a> or my <a href="https://github.com/ColtonTipton" target="__blank">GitHub</a> page if you want to know what I've been up to or been developing.
            </p>
            <div className="mdc-image mdc-layout-grid__cell"></div>
        </div>
    </div>
    <div id="portfolio" className="mdc-layout-grid">
    <h1 className="mdc-layout-grid__title mdc-typography--headline3 mdc-layout-grid__cell--span-1">Portfolio</h1>
    </div>
    <div id="resume" className="mdc-layout-grid">
    <h1 className="mdc-layout-grid__title mdc-typography--headline3 mdc-layout-grid__cell--span-1">Resume</h1>
    </div>
    <div id="blog" className="mdc-layout-grid">
    <h1 className="mdc-layout-grid__title mdc-typography--headline3 mdc-layout-grid__cell--span-1">Blog</h1>
    </div>
    </div>
)

ReactDOM.render(Content, document.querySelector('.main-content'))