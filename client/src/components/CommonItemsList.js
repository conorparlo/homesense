import React, { Component } from 'react';
import { 
    Container, 
    ListGroup, 
    ListGroupItem, 
    Button
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getCommonItems } from '../actions/commonItemActions';
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class CommonItemsList extends Component {

    componentDidMount() {
        this.props.getCommonItems();
    }

    state = {
        name: ''
    }

    onAddClick = (name, _id) => {
        //console.log(_id);
        const newItem = {
            name: name
        }
        this.props.addItem(newItem);
    }
    

    render() {
        const { commonItems } = this.props.commonItem;
        return(
            <Container style={{marginTop: '2rem'}}>
                <h3>Common Items</h3>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {commonItems.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem id={_id}>
                                    <Button
                                        className="remove-btn"
                                        color="success"
                                        size="sm"
                                        onClick={() => this.onAddClick(name, _id)}
                                    >&#43;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

CommonItemsList.propTypes = {
    getCommonItems: PropTypes.func.isRequired,
    commonItem: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    commonItem: state.commonItem,
    item: state.item 
});

export default connect(
    mapStateToProps,
    { getCommonItems, addItem }
)(CommonItemsList);