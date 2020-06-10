import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const notificationToShow = () => {
    return props.notification
  }
  const style = {
    border: 'solid',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notificationToShow()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    notification: state.notification,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Notification)