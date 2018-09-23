import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getCommonItems } from '../actions/commonItemActions';
import PropTypes from 'prop-types';

class CommonItemsList extends Component {

    componentDidMount() {
        this.props.getCommonItems();
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
                                <ListGroupItem>
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
    commonItem: state.commonItem
});

export default connect(
    mapStateToProps,
    { getCommonItems }
)(CommonItemsList);