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
                    src = {this.props.path}
                    alt = {this.props.alt}/>
        else
            return <p> Vacio </p>
    }

}

export default ProfilePic;