
import classes from '../components.module.css'

//const Input = (props) => {
//    const { ...otherProps } = props
//    return <input className={classes.inputCustom} {...otherProps} />
//}
class Input extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        const { ...otherProps } = this.props
        return(
            <Input className={classes.inputCustom} {...otherProps} />
        )
    }
} 

export default Input;