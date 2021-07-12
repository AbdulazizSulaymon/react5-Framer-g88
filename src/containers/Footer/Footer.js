import React, { Component } from 'react'
import "./Footer.css"

class Column extends Component {
    render() {
        const { column: { title, list, colProps }, } = this.props;
        console.log(title, list);

        return (
            <div className={colProps || `col-6 col-md-4 col-lg-2 mb-4`}>
                <p className="fw-bold text-white">{title}</p>
                {list.map((value, index) => {
                    return <a href={value.url} className={`d-block my-2 text-secondary d-flex align-items-center ${value.className || ""}`}>{value.icon} {value.title}</a>
                })}
            </div>
        )
    }
}

export default class Footer extends Component {
    render() {
        const { colProps, data } = this.props;

        return (
            <footer className="bg-dark py-5">
                <div className="container">
                    <div className="row">
                        {data.map((column, index) => {
                            return <Column column={column} colProps={colProps} />
                        })}
                    </div>
                </div>
            </footer>
        )
    }
}
