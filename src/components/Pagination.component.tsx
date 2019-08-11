import React from 'react';
import '../css/fontawesome-free-5.10.1-web/fontawesome-free-5.10.1-web/css/all.css';
import '../css/browser.css';
interface IPaginationComponentProps {
    pagination: {
        totalPages: number | undefined,
        number: number,
        first: boolean | undefined,
        last: boolean | undefined,
        size: number,
    },
    loadData: (pageNumber: number, pageSize: number) => void;
}

export default class PaginationComponent extends React.Component<any, any> {

    constructor(props: IPaginationComponentProps) {
        super(props);
        this.state = {
            inputPage: ''
        }
    }

    updateValue(e: any) {
        this.setState({
            ...this.state,
            inputPage: e.target.value
        });
    }

    handleKeyPress(e: any) {
        if (e.key === 'Enter') {
            this.props.loadData(this.state.inputPage - 1, this.props.pagination.size);
        }
    }

    render() {
        //const onFirst = this.props.pagination.first;
        //const onLast = this.props.pagination.last;
        //const firstPage = 0;
        //const lastPage = (this.props.pagination.totalPages || 1) - 1;
        //const previousPage = this.props.pagination.number - 1;
        //const nextPage = this.props.pagination.number + 1;
        //const pageSize = this.props.pagination.size;
        return (
            <div>
                <div id="pagination-controls">
                    <div
                        className={'disabled-control'}
            
                    >{'First'}</div>

                    <div
                        className={'disabled-control'}
                        
                    >{'Prev'}</div>

                    <input
                        name="page" type="text" placeholder={'' + (1)}
                    ></input>

                    <div
                        className={'disabled-control'}
                        
                    >{'Next'}</div>

                    <div
                        className={'disabled-control'}
                        
                    >{'Last'}</div>
                </div>
                <p id="pagination-detail">
                    Page {1} of {5}</p>
            </div>
        )
    }
}