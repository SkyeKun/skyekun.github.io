const md = window.markdownit();
const author = "Colton Tipton"
const link = "https://github.com/ColtonTipton"
const image_link = "https://avatars2.githubusercontent.com/u/2636867"

const Content = (
<div className="blog-content">
<div className="mdc-layout-grid grid-content">
<div className="mdc-layout-grid__inner">
    <div className="blog-title mdc-layout-grid__cell">
        <span className="mdc-typography--headline4">New Website!</span>
        <span className="mdc-typography--headline5"></span>
    </div>
    <div className="mdc-typography--caption mdc-layout-grid__cell">
        Written by <a href={link} target="__blank">{author}</a> @Jun. 16, 2019
    </div>
    <div className="blog-content-body mdc-typography--body1 mdc-layout-grid__cell">
        <img src={image_link} ></img>
        <p className="blog-content-p">
        Hello! I present to you my new website!, Anyways this is just the beginning to many things I plan to develop, catch me on [Github]({link}), to get see updates on what I've been developing.
        </p>
    </div>
</div>
<hr className="mdc-list-divider" />
</div>
</div>
)

ReactDOM.render(Content, document.getElementById("body"))

var Elements = document.getElementsByClassName('blog-content-p')
for (var i=0; i<Elements.length; i++)
    Elements[i].innerHTML = md.render(Elements[i].innerHTML)
