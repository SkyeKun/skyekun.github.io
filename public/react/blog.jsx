const md = window.markdownit();


var Blogs = {
    ["Mar. 20, 2020"]: {
        Author: "Colton Ray Tipton",
        Link: "https://github.com/ColtonRayTipton",
        Headline: "New Updates!",
        Content: "Along with new updates comes with optimization, and fixes that were very much needed.\nUpdated:\n-Navigation Bar\n-Blog" 
    },
    ["Jun. 16, 2019"]: {
        Author: "Colton Ray Tipton",
        Link: "https://github.com/ColtonRayTipton",
        Headline: "New Website!",
        Content: "Hello! I present to you my new website!, Anyways this is just the beginning to many things I plan to develop, catch me on [Github]({link}), to get see updates on what I've been developing."
    }
}

const Content = (


<div className="blog-content">
    
    {
        Object.keys(Blogs).map(function(Date, index) {

            var Blog = Blogs[Date];
            var Author = Blog.Author
            var Link = Blog.Link
            var Headline = Blog.Headline
            var Content = Blog.Content

            return (

                <div className="mdc-layout-grid grid-content">
                    <div className="mdc-layout-grid__inner">
                        <div className="blog-title mdc-layout-grid__cell">
                            <span className="mdc-typography--headline4">{Headline}</span>
                            <span className="mdc-typography--headline5"></span>
                        </div>
                        <div className="mdc-typography--caption mdc-layout-grid__cell">
                            Written by <a href={Link} target="__blank">{Author}</a> @{Date}
                        </div>
                        <div className="blog-content-body mdc-typography--body1 mdc-layout-grid__cell">
                            <p className="blog-content-p">{Content}</p>
                        </div>
                    </div>
                    <hr className="mdc-list-divider" />
                </div>


            );

        })
    }
</div>
)

ReactDOM.render(Content, document.getElementById("Main"))

var Elements = document.getElementsByClassName('blog-content-p')
for (var i=0; i<Elements.length; i++)
    Elements[i].innerHTML = md.render(Elements[i].innerHTML)