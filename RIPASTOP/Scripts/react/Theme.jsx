﻿
class ThemeToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {           
            stylePath: '/Content/light.css'           
        };
        this.toggleTheme = this.toggleTheme.bind(this);
    }
    componentWillMount() {
        if (store.get('stylePath')) {
            this.setState({ stylePath: store.get('stylePath') });
        } 
    }   
    toggleTheme() {

        if (this.state.stylePath == '/Content/light.css') {
            var toggle =  '/Content/dark.css'
        } else {
            var toggle = '/Content/light.css'
        }
       
        this.setState({ stylePath: toggle });
        store.set('stylePath', toggle);
    }
    render() {
        return (
            <div>
                <link rel="stylesheet" type="text/css" href={this.state.stylePath} />
                <a onClick={this.toggleTheme} ><img className='themetoggle' src="/Content/mode.png" /></a>
            </div>
        );
    }
}

ReactDOM.render(
    <ThemeToggle />,
    document.getElementById('theme')
);