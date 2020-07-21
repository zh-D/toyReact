import { ToyReact, Component } from './ToyReact.js'

class Myconponent extends Component {
    render() {
        return <div>
            <span>Hello</span>
            <span>World</span>
            <div>
                {this.children}
            </div>
        </div>
    }

}

let a = <Myconponent name='a' id='ida'>
    <div>123123</div>
</Myconponent>

ToyReact.render(
    a,
    document.body
)

// console.log(a);
// document.body.appendChild(a)



