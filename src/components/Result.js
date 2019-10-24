import React from 'react';

const Result = ({score, playAgain}) => {
    return(
        <div className="row">
            <div className="col-sm-12 text-center">
                <h2  style={{margin: '40px 0'}}>You scored <b>{score} / 5</b> correct answers!</h2>
                <button className="btn btn-default c-btn" style={{margin: '20px 0'}} onClick={playAgain}>Play again!</button>
            </div>
        </div>
    )
};

export default Result;