import React, { Component } from 'react'
import { connect } from 'react-redux'
import { retrieveApplicant } from "../actions/applicantActions";

export class Applicant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applicantItem: null,
        }
    }
    componentDidMount() {
        this.props.retrieveApplicant();
    }
    render() {

        const imageStyle = {
            size: "10px",
        }
        return (
            <div>
                {
                    !this.props.applicant ? (
                        <div>No Data yet</div>
                    ) :
                        <div className="applicant">
                            {
                                this.props.applicant.map((person) =>

                                    <div><div style={imageStyle}><img src={person.image} alt={person.firstname} /></div>
                                        <div>{person.firstname + " " + person.middlename + " " + person.lastname}
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    applicant: state.applicant.applicant,
})

const mapDispatchToProps = {
    retrieveApplicant
}

export default connect(mapStateToProps, mapDispatchToProps)(Applicant)
