/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Review = props => {

  const review = props.review;

  return (
    <Container>
      <Row>
        <Col>rating: {review.rating}</Col>
        <Col>reviewer: {review.reviewer_name} date: {review.date}</Col>
      </Row>
      <Row>
        <Col>{review.summary}</Col>
      </Row>
      <Row>
        <Col>{review.body}</Col>
      </Row>
      <Row>
        {review.photos.map((photo) =>
          <img key={photo.id} src={photo.url}/>
        )}
      </Row>
      {review.recommended ? <Row><Col>I recommend this product</Col></Row> : null}
      {review.response ? <Row><Col>Response: {review.response}</Col></Row> : null}
      <Row>
        <Col>Helpful? Yes ({review.helpfulness}) | Report</Col>
      </Row>

      <style jsx>{`
          img {
            height: 150px;
          }
      `}</style>

    </Container>
  );
};

export default Review;