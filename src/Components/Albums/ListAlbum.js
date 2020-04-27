import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { albumsList } from '../../Redux/Actions/albumsList'
import Album from './Album'
import Loader from '../Common/Loader'
import Pagination from '../Common/Pagination'
import { history } from '../../Routing/history';


class ListAlbum extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loader: true,
            currentAlbums: [],
            currentPage: null,
            totalPages: null
        }
    }

    componentDidMount() { 
        let user = JSON.parse(localStorage.getItem('user'));
        // console.log(user);
        if(!user){
            history.push('/Login')
        }        
        this.props.albumsList().then(() => {
            this.setState({loader: false})
        }).catch((err) => {
            console.log(err)
            this.setState({loader: false})
        });
    }

    onPageChanged = data => {
        const { currentPage, totalPages, pageLimit } = data;
    
        const offset = (currentPage - 1) * pageLimit;
        const currentAlbums = this.props.albums.slice(offset, offset + pageLimit);
    
        this.setState({ currentPage, currentAlbums, totalPages });
    };

    render() {
        const {
            currentAlbums
          } = this.state;
        var totalAlbums = this.props.albums;

        return (
            <Fragment>
                {totalAlbums !== undefined && totalAlbums.length > 0 ?
                    <Fragment>
                        <Pagination
                                    totalRecords={totalAlbums.length}
                                    pageLimit={23}
                                    pageNeighbours={1}
                                    onPageChanged={this.onPageChanged}
                                />
                        {currentAlbums.map(albums => (
                            <Album key={albums.id} albums={albums} />
                        ))}
                    </Fragment>
                       :
                    <Loader /> 
                }
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        albums: state.albums
    }
}


export default connect(mapStateToProps, {albumsList})(ListAlbum)