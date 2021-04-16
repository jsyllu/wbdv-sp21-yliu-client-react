import React from 'react'

const QuizAttemptsList = (
    {
        attempts,
        exitViewAttempts
    }) => {

    return (
        <div className="quiz-attempt-list">
            <h3>
                Attempt History
            </h3>
            <table className="table table-hover quiz-attempt-table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">User</th>
                    <th scope="col">Attempted At</th>
                    <th scope="col">Score (%)</th>
                    {/*<th scope="col">View</th>*/}
                </tr>
                </thead>
                <tbody>
                {
                    attempts.map((attempt, index) => {
                        let dateStr
                        if (attempt._createdAt === undefined) {
                            dateStr = 'unknown'
                        } else {
                            // const date = new Date(attempt._createdAt)
                            // dateStr = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " "
                            //     + date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds()
                            dateStr = attempt._createdAt
                        }
                        return (
                            <>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{attempt.uid === undefined ? 'anonymous' : attempt.uid}</td>
                                    <td>{dateStr}</td>
                                    <td>{Number(attempt.score).toFixed(1)}</td>
                                    {/*<td>*/}
                                    {/*    <button className="btn btn-outline-success">*/}
                                    {/*        View*/}
                                    {/*    </button>*/}
                                    {/*</td>*/}
                                </tr>
                            </>
                        )
                    })
                }
                </tbody>
            </table>
            <div className="button-group">
                <button className="float-left btn btn-outline-success"
                        onClick={() => exitViewAttempts()}>
                    Back
                </button>
            </div>

        </div>
    )

}

export default QuizAttemptsList