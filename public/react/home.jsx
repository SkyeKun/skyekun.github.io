const List = {
    About: {
        Link: "#about",
        Icon: "help"
    },
    Resume: {
        Link: "#resume",
        Icon: "import_contacts"
    },
    Blog: {
        Link: "#blog",
        Icon: "forum"
    }
}

const Content = (

    <div className="MainContainer">
        <aside className="mdc-drawer mdc-drawer--dismissible">
            <div className="mdc-drawer__header">
            <img className="mdc-drawer__image" src="https://avatars2.githubusercontent.com/u/2636867"/>
            <h3 className="mdc-drawer__title">Colton Tipton</h3>
            </div>
            <div className="mdc-list">
                <a className="mdc-list-item" id="text-email" href="mailto:tiptocr@gmail.com" aria-current="page">
                    <i className="material-icons mdc-list-item__graphic" id="header-email" aria-hidden="true">email</i>
                    <span className="mdc-list-item__text">tiptocr@gmail.com</span>
                </a>
            </div>
            <div className="mdc-list">
                {
                    Object.keys(List).map(function(Name, index) {

                        var Item = List[Name]
                        
                        return (
                            <a className="mdc-list-item" href={Item.Link} aria-current="page">
                                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">{Item.Icon}</i>
                                <span className="mdc-list-item__text">{Name}</span>
                            </a>
                        )

                    })
                }
            </div>
        </aside>
        <div className="mdc-drawer-app-content">
            <main className="main-content" id="main-content">
                <div className="main-container">
                    <div className="container mdc-layout-grid" id="about">
                    <h1 className="mdc-layout-grid__title mdc-typography--headline3 mdc-layout-grid__cell--span-1">About</h1>
                    <div className="mdc-layout-grid__inner">
                        <p className="mdc-typography--body1 mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
                        Hello! My name is Colton Ray Tipton, I am an E-1 (Private) as an 0621 (Radio Operator) in the United States Marine Corps. My hobbies include programming, video games, anime, and reading manga. My goal in life is to succeed at everything I do. You can go to my <a className="button-active" href="#blog">Blog</a> or my <a className="button-active" target="__blank" href="https://github.com/ColtonTipton">GitHub</a> page to learn what I've been developing or doing.
                        </p>
                    </div>
                    </div>
                    <div className="container mdc-layout-grid" id="resume">
                    <h1 className="mdc-layout-grid__title mdc-typography--headline3 mdc-layout-grid__cell--span-1">Resume</h1>
                    <embed className="mdc-layout-grid__cell--span-1 pdf" src= "public/files/Resume.pdf"></embed>
                    </div>
                    <div className="container mdc-layout-grid" id="blog">
                    <h1 className="mdc-layout-grid__title mdc-typography--headline3 mdc-layout-grid__cell--span-1">Blog</h1>
                    <iframe className="mdc-layout-grid__cell iframe_blog" src="blog.html" name="iframe_blog"></iframe>
                    </div>
                </div>
            </main>
        </div>
    </div>
);

ReactDOM.render(Content, document.getElementById("Main"));