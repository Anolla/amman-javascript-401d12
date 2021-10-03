import { connect } from "react-redux";
import { increment, decrement, reset } from '../store/votes';


const VotesCounter = props => {
    return (
        <section>
            <ul>
                {props.counter.candidates.map(candidate =>
                    <li onClick={() => props.increment(candidate.name)} key={candidate.name}>{candidate.name} : {candidate.votes}</li>)}
            </ul>
            <button onClick={props.reset}>Reset</button>
        </section>
    );
}

const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = { increment, decrement, reset };


// const mapDispatchToProps = { 
//     increment: () => dispatch(increment()),
//     increment: () => dispatch(increment()),
//     increment: () => dispatch(increment()),
//  };

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);
