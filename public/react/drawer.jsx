const Drawer = (
    <div className="navbar-container smooth-scroll">
    <aside className="mdc-drawer mdc-drawer--dismissible">
        <div className="mdc-drawer__header">
        <img className="mdc-drawer-image" src="https://avatars2.githubusercontent.com/u/2636867" />
        <div className="mdc-drawer-wrapper">
            <h3 className="mdc-drawer__title">Colton Tipton</h3>
            <i className="material-icons mdc-list-item__graphic" aria-hidden="true">email</i>
            <h6 className="mdc-drawer__subtitle"><a href="mailto:tiptocr@gmail.com">tiptocr@gmail.com</a></h6>
        </div>
        </div>      
        <nav className="mdc-list">
            <a className="mdc-list-item mdc-list-item--activated" href="#about" aria-selected="true">
                <div className="mdc-list-item-content">
                    <i className="material-icons mdc-list-item__graphic" aria-hidden="true">help</i>
                    <span className="mdc-list-item__text">About</span>
                </div>
            </a>
            <a className="mdc-list-item mdc-list-item" href="#portfolio" aria-selected="true">
                <div className="mdc-list-item-content">
                    <i className="material-icons mdc-list-item__graphic" aria-hidden="true">folder</i>
                    <span className="mdc-list-item__text">Portfolio</span>
                </div>
            </a>
            <a className="mdc-list-item mdc-list-item" href="#resume" aria-selected="true">
                <div className="mdc-list-item-content">
                    <i className="material-icons mdc-list-item__graphic" aria-hidden="true">import_contacts</i>
                    <span className="mdc-list-item__text">Resume</span>
                </div>
            </a>
            <a className="mdc-list-item mdc-list-item" href="#blog" aria-selected="true">
                <div className="mdc-list-item-content">
                    <i className="material-icons mdc-list-item__graphic" aria-hidden="true">forum</i>
                    <span className="mdc-list-item__text">Blog</span>
                </div>
            </a>
        </nav>
    </aside>
    <div className="mdc-drawer-app-content">
    <header className="app-bar mdc-top-app-bar mdc-top-app-bar--short mdc-top-app-bar--short-collapsed" id="app-bar">
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <a className="demo-menu material-icons mdc-top-app-bar__navigation-icon">menu</a>
          <span className="mdc-top-app-bar__title">Colton Tipton</span>
        </section>
      </div>
    </header>

    <main className="main-content" id="main-content">
        
    </main>

  </div>
  </div>
)

ReactDOM.render(Drawer, document.getElementById('drawer'))