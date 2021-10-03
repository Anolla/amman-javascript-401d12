import { connect } from "react-redux";

const Status = props => {
    return (
        <section>
            total votes: {props.totalVotes}
        </section>
    )
};

const mapStateToProps = state => ({
    totalVotes: state.counter.totalVotes
});

export default connect(mapStateToProps)(Status);
