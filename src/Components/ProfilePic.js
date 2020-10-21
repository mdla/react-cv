import React, {
    Component
} from 'react';

class ProfilePic extends Component {

    constructor(props) {
        super(props);
        this.state={
            path: null,
            alt: null
        };
    }

    render() {
        if (this.props)
            return <img className = "profile-pic"
                    src = {process.env.PUBLIC_URL + this.props.path}
                    alt = {this.props.alt}/>
        else
            return <span> Vacio </span>
    }

}

export default ProfilePic;